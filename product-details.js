// ============================================
// ОПИСАНИЯ, РАЗМЕРЫ И КОНТАКТЫ ТОВАРОВ
// ============================================
// КАЖДЫЙ ТОВАР ПОДПИСАН С НАЗВАНИЕМ — смотри на скрин,
// находи товар по названию и вписываешь размеры и описание.

const productDetails = {

  // 1: Шапка Y2K (890 ₽)
  1: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 2: Шапка Y2K (790 ₽)
  2: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 3: Шапка Burberry (990 ₽)
  3: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 4: Шапка Supreme (990 ₽)
  4: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 5: Штаны Essentials (3490 ₽)
  5: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 6: Штаны Prada (3190 ₽)
  6: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 7: Худи Calvin Klein (3490 ₽)
  7: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 8: Свитер Calvin Klein (2990 ₽)
  8: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 9: Свитер Ami (2990 ₽)
  9: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 10: Худи Givenchy (3490 ₽)
  10: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 11: Свитер Burberry (2990 ₽)
  11: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 12: Свитер Zara Type (2990 ₽)
  12: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 13: Шапка Givenchy (1290 ₽)
  13: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 14: Шапка Louis Vuitton (1490 ₽)
  14: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 15: Шапка Louis Vuitton (1490 ₽)
  15: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 16: Кеды Givenchy (5490 ₽)
  16: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 17: Свитшот Gucci (3493 ₽)
  17: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 18: Свитер Calvin Klein (2990 ₽)
  18: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 19: Свитер Ami (2990 ₽)
  19: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 20: Свитер Ami (2992 ₽)
  20: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 21: Ботинки Timberland (4990 ₽)
  21: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 22: Ботинки Timberland (4990 ₽)
  22: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 23: Ботинки Timberland x Supreme (5990 ₽)
  23: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 24: Ботинки Timberland x Supreme (5990 ₽)
  24: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 25: Свитер Zara Type (2992 ₽)
  25: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 26: Пуховик Canada Goose (6490 ₽)
  26: { sizes: ['XL'], desc: '👻 Пуховик Canada Goose\nЦена: 6490₽\nРазмеры: XL\nНовый, с биркой\n\nУже в MUTANT STORE ⤵️\n📍 Казань, ул. Московская, 15\n\n−5% по промокоду MUTANT5 при заказе через ТГ\n\nДоставка по России: Авито, СДЭК, Почта России.\nРазмер XL', contacts: { tg: 'mutant_p1ayers', wa: '79503151920', phone: '+7 (950) 315-19-20' } },
  // 27: (товар 27)
  27: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 28: (товар 28)
  28: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 29: (товар 29)
  29: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 30: (товар 30)
  30: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 31: (товар 31)
  31: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 32: (товар 32)
  32: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 33: (товар 33)
  33: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 34: (товар 34)
  34: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 35: (товар 35)
  35: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 36: (товар 36)
  36: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 37: (товар 37)
  37: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 38: (товар 38)
  38: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 39: (товар 39)
  39: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 40: (товар 40)
  40: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 41: (товар 41)
  41: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 42: (товар 42)
  42: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 43: (товар 43)
  43: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 44: (товар 44)
  44: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 45: (товар 45)
  45: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 46: Свитер Celine (3490 ₽)
  46: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 47: Сумка Kenzo (2490 ₽)
  47: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 48: Сумка Burberry (2490 ₽)
  48: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 49: Джинсы Gallery Dept (3490 ₽)
  49: { sizes: ['S', 'M', 'L'], desc: '👻 Джинсы Gallery Dept\nЦена: 3490₽\nРазмеры: S,M,L\nНовый, с биркой\n\nУже в MUTANT STORE ⤵️\n📍 Казань, ул. Московская, 15\n\n−5% по промокоду MUTANT5 при заказе через ТГ\n\nДоставка по России: Авито, СДЭК, Почта России. размеры S M L', contacts: { tg: 'mutant_p1ayers', wa: '79503151920', phone: '+7 (950) 315-19-20' } },
  // 50: Джинсы Gallery Dept (3490 ₽)
  50: { sizes: ['S', 'M', 'L'], desc: '👻 Джинсы Gallery Dept\nЦена: 3490₽\nРазмеры: S,M,L\nНовый, с биркой\n\nУже в MUTANT STORE ⤵️\n📍 Казань, ул. Московская, 15\n\n−5% по промокоду MUTANT5 при заказе через ТГ\n\nДоставка по России: Авито, СДЭК, Почта России. размеры S M L', contacts: { tg: 'mutant_p1ayers', wa: '79503151920', phone: '+7 (950) 315-19-20' } },
  // 51: Шапка Arcteryx (1290 ₽)
  51: { sizes: ['One Size', 'M'], desc: '👻 Шапка Arcteryx\nЦена: 1290₽\nРазмер: One Size\nНовый, с биркой\n\nУже в MUTANT STORE ⤵️\n📍 Казань, ул. Московская, 15\n\n−5% по промокоду MUTANT5 при заказе через ТГ\n\nДоставка по России: Авито, СДЭК, Почта России.\nРазмер M', contacts: { tg: 'mutant_p1ayers', wa: '79503151920', phone: '+7 (950) 315-19-20' } },
  // 52: Пуховик Canada Goose (6490 ₽)
  52: { sizes: ['XL'], desc: '👻 Пуховик Canada Goose\nЦена: 6490₽\nРазмеры: XL\nНовый, с биркой\n\nУже в MUTANT STORE ⤵️\n📍 Казань, ул. Московская, 15\n\n−5% по промокоду MUTANT5 при заказе через ТГ\n\nДоставка по России: Авито, СДЭК, Почта России.\nРазмер XL', contacts: { tg: 'mutant_p1ayers', wa: '79503151920', phone: '+7 (950) 315-19-20' } },
  // 53: Худи Acme De La Vie (3490 ₽)
  53: { sizes: ['1', '2', 'M', 'L', 'XL'], desc: '👻 Худи Acme De La Vie\nЦена: 3490₽\nРазмеры: 1, 2\nНовый, с биркой\n\nУже в MUTANT STORE ⤵️\n📍 Казань, ул. Московская, 15\n\n−5% по промокоду MUTANT5 при заказе через ТГ\n\nДоставка по России: Авито, СДЭК, Почта России.\nРазмер M L XL', contacts: { tg: 'mutant_p1ayers', wa: '79503151920', phone: '+7 (950) 315-19-20' } },
  // 54: Худи Champion x Supreme (3490 ₽)
  54: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 55: Кроссовки Gucci (5490 ₽)
  55: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 56: Кроссовки Philipp Plein (6490 ₽)
  56: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 57: Штаны Amiri (3490 ₽)
  57: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 58: Кроссовки Philipp Plein (5990 ₽)
  58: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 59: Кроссовки Givenchy Type (5490 ₽)
  59: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 60: Штаны Palm Angels (2490 ₽)
  60: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 61: Худи Gucci (3490 ₽)
  61: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 62: Свитер Miu Miu (2990 ₽)
  62: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 63: Свитер Miu Miu (Женский) (2990 ₽)
  63: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 64: Джинсы Gallery Dept (3490 ₽)
  64: { sizes: ['S', 'M', 'L'], desc: '👻 Джинсы Gallery Dept\nЦена: 3490₽\nРазмеры: S,M,L\nНовый, с биркой\n\nУже в MUTANT STORE ⤵️\n📍 Казань, ул. Московская, 15\n\n−5% по промокоду MUTANT5 при заказе через ТГ\n\nДоставка по России: Авито, СДЭК, Почта России. размеры S M L', contacts: { tg: 'mutant_p1ayers', wa: '79503151920', phone: '+7 (950) 315-19-20' } },
  // 65: Джинсы Balenciaga Type (2990 ₽)
  65: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 66: Джинсы ERD (3790 ₽)
  66: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 67: Джинсы Rick Owens Type (2990 ₽)
  67: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 68: Джинсы Zara Type (2490 ₽)
  68: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 69: Пуховик Marcelo Burlon (5490 ₽)
  69: { sizes: [], desc: '', contacts: { tg: '', wa: '', phone: '' } },
  // 1001: Пуховик Stone Island CP (6490 ₽)
  1001: {
    sizes: ['S', 'M', 'L', 'XL'],
    desc: 'Описание пуховика Stone Island CP.',
    contacts: { tg: 'mutant_p1ayers', wa: '79503151920', phone: '+7 (950) 315-19-20' }
  }

};

// ============================================
// КАК ЗАПОЛНЯТЬ (пример для товара 1):
// 1: {
//   sizes: ['S', 'M', 'L', 'XL'],      // размеры — кнопки в модалке
//   desc: 'Описание шапки Y2K здесь.', // текст описания
//   contacts: {
//     tg: 'mutant_p1ayers',   // юзернейм для Телеграма
//     wa: '79503151920',      // телефон для WhatsApp (только цифры)
//     phone: '+7 (950) 315-19-20' // номер для звонка
//   }
// },
// ============================================

window.productDetails = productDetails;

