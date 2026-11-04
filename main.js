let cart = JSON.parse(localStorage.getItem('mutant-cart') || '[]');
const grid = document.getElementById('productGrid');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const drawer = document.getElementById('cartDrawer');
const overlay = document.getElementById('overlay');
const formatPrice = value => `${value.toLocaleString('ru-RU')} ₽`;

function defaultSizes(product) {
  if (product.sizes) return product.sizes;
  if (product.category === 'nutrition') return null;
  return ['3 размера', '4 размера'][product.id % 2];
}

let currentCategory = 'all';
let currentQuery = '';

function productMarkup(product, index) {
  const sizes = defaultSizes(product);
  const image = product.img
    ? `<img class="product-photo" src="${product.img}" alt="${product.name}" loading="lazy">`
    : `<div class="product-object jar"><strong>WHEY</strong><span>PROTEIN</span></div>`;
  return `<article class="product-card reveal" id="product-${product.id}" data-id="${product.id}" style="--d:${(index % 8) * 60}ms">
    <div class="product-image">
      <button class="fav-button" data-fav aria-label="В избранное" type="button">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7.5-4.7-10-9.3C.4 8 2 4.5 5.5 4.2 7.6 4 9.4 5.2 12 7.6c2.6-2.4 4.4-3.6 6.5-3.4C22 4.5 23.6 8 22 11.7 19.5 16.3 12 21 12 21z"/></svg>
      </button>
      ${product.hit ? '<span class="hit-badge">ХИТ</span>' : ''}
      ${image}
      <button class="quick-add" data-add="${product.id}" type="button">В корзину</button>
    </div>
    <div class="product-info">
      <h3>${product.name}</h3>
      ${sizes ? `<span class="sizes-chip">${sizes}</span>` : ''}
      <div class="price-row">
        <strong class="price">${product.oldPrice ? `<s>${formatPrice(product.oldPrice)}</s>` : ''}${formatPrice(product.price)}</strong>
        <button class="add-button" data-add="${product.id}" aria-label="Добавить ${product.name}" type="button">+</button>
      </div>
    </div>
  </article>`;
}

function filteredProducts() {
  const q = currentQuery.trim().toLowerCase();
  return products.filter(p => (currentCategory === 'all' || p.type === currentCategory) &&
    (!q || p.name.toLowerCase().includes(q)));
}

function renderProducts() {
  const list = filteredProducts();
  grid.innerHTML = list.length
    ? list.map(productMarkup).join('')
    : '<p class="empty-result">Ничего не нашлось. Попробуй другой запрос.</p>';
  const hint = document.getElementById('searchHint');
  hint.textContent = currentCategory === 'all'
    ? (q => q && `Найдено: ${list.length}`)(currentQuery)
    : `В категории «${categories.find(c => c.id === currentCategory).label}»: ${list.length}`;
  grid.querySelectorAll('[data-add]').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); openProductModal(Number(b.dataset.add)); }));
  grid.querySelectorAll('[data-fav]').forEach(b => b.addEventListener('click', () => b.classList.toggle('active')));
  observeReveals();
}

function addToCart(id, size = '') {
  const existing = cart.find(item => `${item.id}|${item.size || ''}` === `${id}|${size}`);
  if (existing) existing.qty += 1; else cart.push({ id, qty: 1, size });
  saveCart(); renderCart(); openCart();
}
function removeFromCart(id, size = '') { cart = cart.filter(item => `${item.id}|${item.size || ''}` !== `${id}|${size}`); saveCart(); renderCart(); }
function saveCart() { localStorage.setItem('mutant-cart', JSON.stringify(cart)); }
function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = count;
  cartCount.classList.remove('bump');
  void cartCount.offsetWidth;
  cartCount.classList.add('bump');
  if (!cart.length) { cartItems.innerHTML = '<p class="empty-cart">Пока пусто. Добавь что-нибудь сильное.</p>'; cartTotal.textContent = '0 ₽'; return; }
  let total = 0;
  cartItems.innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    total += product.price * item.qty;
    return `<div class="cart-item"><div><strong>${product.name}</strong>${item.size ? `<br><small class="cart-size">Размер: ${item.size}</small>` : ''}<small>${item.qty} × ${formatPrice(product.price)}</small></div><button class="remove-item" data-remove="${product.id}" data-size="${item.size || ''}" aria-label="Удалить" type="button">×</button></div>`;
  }).join('');
  cartTotal.textContent = formatPrice(total);
  cartItems.querySelectorAll('[data-remove]').forEach(b => b.addEventListener('click', () => removeFromCart(Number(b.dataset.remove), b.dataset.size || '')));
}
function openCart() { drawer.classList.add('open'); overlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeCart() { drawer.classList.remove('open'); overlay.classList.remove('open'); document.body.style.overflow = ''; }

// Фильтры по категориям
const filtersEl = document.getElementById('filters');
filtersEl.innerHTML = categories.map(c =>
  `<button class="filter${c.id === 'all' ? ' active' : ''}" data-category="${c.id}">${c.label}</button>`).join('');
filtersEl.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  filtersEl.querySelector('.filter.active').classList.remove('active');
  button.classList.add('active');
  currentCategory = button.dataset.category;
  renderProducts();
}));

// Поиск (работает внутри выбранной категории; по «Все» — по всему каталогу)
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => { currentQuery = searchInput.value; renderProducts(); });

// Стартовый вид: показываем весь каталог
currentCategory = 'all';

// ===== ГЕРОЙ: одно фото справа (твоя картинка с прозрачным фоном) =====
(function initHeroArt() {
  const art = document.getElementById('heroArt');
  if (!art) return;
  art.insertAdjacentHTML('afterbegin',
    `<button class="hero-photo hp-1" type="button" data-id="1001" title="Пуховик Stone Island CP"><img src="img/hero-jacket.png" alt="Пуховик Stone Island CP"></button>`);
  art.querySelectorAll('[data-id]').forEach(b => b.addEventListener('click', () => openProductModal(1001)));
})();

// ===== ЗАГЛУШКИ ТОВАРОВ (размеры, описание, контакты) =====
// Реальные данные впиши здесь (из ТГ бота). Товары без записи получат автоматические заглушки.
// Юзернейм Telegram — задай в одном месте, подтянется и в «Задать вопрос», и в контакты.
const TG_USERNAME = 'mutant_p1ayers'; // <-- для отображения текста ссылки
const TG_LINK = 'https://web.telegram.org/a/?account=2#5886365723'; // <-- реальная ссылка на Telegram

// productDetails подключён из product-details.js

function buildTgLink(tg) {
  const t = String(tg || '').replace('@', '').trim();
  if (!t) return '#';
  if (t.startsWith('http')) return t;
  return 'https://t.me/' + t;
}

function setupTgLinks(productName) {
  const text = encodeURIComponent('У меня вопрос по товару: ' + (productName || ''));
  // Кнопка «Задать вопрос о товаре» в модалке — в ТГ уже набирается сообщение с названием товара
  if (modalQuestion) modalQuestion.href = `https://t.me/${TG_USERNAME}?text=${text}`;
  // Контакт «Телеграм» в модалке товара — просто профиль
  if (modalContactTg) modalContactTg.href = TG_LINK;
  if (modalContactTg) modalContactTg.textContent = TG_USERNAME ? '@' + TG_USERNAME : '@mutant_p1ayers';
}

function detailFor(id) {
  const product = products.find(p => p.id === id);
  const d = window.productDetails[id] || {};
  let sizes = d.sizes;
  if (!sizes && product?.sizes) {
    const m = String(product.sizes).match(/(\d+)/);
    const n = m ? Math.min(Math.max(Number(m[1]), 1), 8) : 3;
    sizes = Array.from({ length: n }, (_, i) => `Размер ${i + 1}`);
  }
  if (!sizes || !sizes.length) sizes = ['Размер'];
  return {
    sizes,
    desc: d.desc || 'Описание скоро появится.',
    tgLink: d.tgLink || TG_LINK,
    contacts: d.contacts || { tg: 'mutant_p1ayers', wa: '79503151920', phone: '+7 (950) 315-19-20' }
  };
}

// ===== МОДАЛКА (для ВСЕХ товаров каталога) =====
const modal = document.getElementById('productModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalSizesList = document.getElementById('modalSizesList');
const modalDesc = document.getElementById('modalDesc');
const modalAdd = document.getElementById('modalAdd');
const modalQuestion = document.getElementById('modalQuestion');
const modalContactTg = document.getElementById('modalContactTg');
const modalContactWa = document.getElementById('modalContactWa');
const modalContactPhone = document.getElementById('modalContactPhone');
let selectedSize = '';
let currentModalId = null;

function openProductModal(id) {
  const product = products.find(p => p.id === id);
  const detail = detailFor(id);
  if (!product) return;
  currentModalId = id;
  selectedSize = '';
  modalImg.src = product.img;
  modalTitle.textContent = product.name;
  modalPrice.textContent = product.price.toLocaleString('ru-RU') + ' ₽';
  modalDesc.textContent = detail.desc;
  modalSizesList.innerHTML = detail.sizes.map(s =>
    `<button class="size-btn" data-size="${s}">${s}</button>`
  ).join('');
  // если размер один — выбираем автоматически
  const sizeBtns = modalSizesList.querySelectorAll('.size-btn');
  if (sizeBtns.length === 1) {
    sizeBtns[0].classList.add('active');
    selectedSize = sizeBtns[0].dataset.size;
  }
  // Ссылки на Telegram берутся из общей константы TG_USERNAME (одно место для правки)
  setupTgLinks(product.name);
  const waRaw = String(detail.contacts.wa || '').replace(/[^0-9]/g, '');
  modalContactWa.href = waRaw ? `https://wa.me/${waRaw}` : '#';
  const phoneRaw = String(detail.contacts.phone || '').replace(/[^0-9+]/g, '');
  modalContactPhone.href = phoneRaw ? `tel:${phoneRaw}` : '#';
  modal.style.display = 'block';
  modalBackdrop.style.display = 'block';
  document.body.style.overflow = 'hidden';
  renderModalAddButton();
}

function closeProductModal() {
  modal.style.display = 'none';
  modalBackdrop.style.display = 'none';
  document.body.style.overflow = '';
  currentModalId = null;
  selectedSize = '';
}

if (modalSizesList) {
  modalSizesList.addEventListener('click', e => {
    if (e.target.classList.contains('size-btn')) {
      modalSizesList.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      selectedSize = e.target.dataset.size;
      renderModalAddButton();
    }
  });
}
if (modalClose) modalClose.addEventListener('click', closeProductModal);
if (modalBackdrop) modalBackdrop.addEventListener('click', closeProductModal);
if (modalAdd) {
  modalAdd.addEventListener('click', () => {
    if (!selectedSize) { alert('Выбери размер'); return; }
    addToCart(currentModalId, selectedSize);
    closeProductModal();
  });
}
if (modalQuestion) {
  modalQuestion.addEventListener('click', e => {
    if (!modalQuestion.href || modalQuestion.href === '#') {
      e.preventDefault();
      alert('Ссылка на вопрос ещё не вставлена. Пришли ссылку из ТГ бота — впишу.');
      return;
    }
  });
}

function renderModalAddButton() {
  if (!modalAdd) return;
  modalAdd.textContent = selectedSize
    ? `Добавить в корзину (${selectedSize}) ↗`
    : `Выбери размер → добавить в корзину ↗`;
  modalAdd.disabled = !selectedSize;
}

// Клик на карточку товара в каталоге → открыть модалку
grid.addEventListener('click', e => {
  const card = e.target.closest('.product-card');
  if (!card) return;
  const addBtn = e.target.closest('[data-add], [data-fav]');
  if (addBtn) return;
  const id = Number(card.dataset.id);
  if (id === 1001) { openProductModal(1001); return; }
  openProductModal(id);
});

// Переход к карточке товара в каталоге (для поиска)
function jumpToProduct(id) {
  const product = products.find(p => p.id === id) || { id: 1001, name: 'Пуховик Stone Island CP', price: 6490, type: 'jackets', sizes: '4 размера', img: 'img/hero-jacket.png' };
  if (!product) return;
  const filtersEl = document.getElementById('filters');
  const active = filtersEl.querySelector('.filter.active');
  if (active && active.dataset.category !== 'all' && product.type !== active.dataset.category) {
    active.classList.remove('active');
    const target = filtersEl.querySelector(`.filter[data-category="${product.type}"]`);
    if (target) { target.classList.add('active'); currentCategory = product.type; renderProducts(); }
  }
  const card = document.getElementById(`product-${id}`);
  if (!card) { document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' }); return; }
  card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  card.classList.add('flash');
  setTimeout(() => card.classList.remove('flash'), 1600);
}

document.getElementById('cartButton').addEventListener('click', openCart);
document.getElementById('closeCart').addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);
document.getElementById('menuButton').addEventListener('click', () => document.getElementById('mobileNav').classList.toggle('open'));
document.querySelectorAll('.mobile-nav a').forEach(link => link.addEventListener('click', () => document.getElementById('mobileNav').classList.remove('open')));
document.getElementById('checkoutButton').addEventListener('click', () => {
  if (!cart.length) { alert('Корзина пуста. Добавь товары перед оформлением.'); return; }
  window.location.href = TG_LINK;
});

// Плавное появление карточек при скролле
let revealObserver;
function observeReveals() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
}

// Шапка: тень при скролле
const header = document.querySelector('.site-header');
addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 10), { passive: true });

renderProducts(); renderCart();

