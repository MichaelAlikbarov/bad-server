db = db.getSiblingDB('weblarek');

db.products.insertMany([
  {
    _id: ObjectId("66edb93e9b289d24854b30de"),
    title: "+1 час в сутках",
    image: { fileName: "/images/5_Dots.png", originalName: "5_Dots.png" },
    category: "софт-скил",
    description: "Если планируете решать задачи в тренажёре, берите два.",
    price: 750
  },
  {
    _id: ObjectId("66edb98a9b289d24854b30e8"),
    title: "HEX-леденец",
    image: { fileName: "/images/Shell.png", originalName: "Shell.png" },
    category: "другое",
    description: "Лизните этот леденец, чтобы мгновенно запоминать и узнавать любой цветовой код CSS.",
    price: 1450
  },
  {
    _id: ObjectId("66edb9c69b289d24854b30f2"),
    title: "Мамка-таймер",
    image: { fileName: "/images/Asterisk_2.png", originalName: "Asterisk_2.png" },
    category: "софт-скил",
    description: "Будет стоять над душой и не давать прокрастинировать.",
    price: null
  },
  {
    _id: ObjectId("66edba0c9b289d24854b30fc"),
    title: "Фреймворк куки судьбы",
    image: { fileName: "/images/Soft_Flower.png", originalName: "Soft_Flower.png" },
    category: "дополнительное",
    description: "Откройте эти куки, чтобы узнать, какой фреймворк вы должны изучить дальше.",
    price: 2500
  },
  {
    _id: ObjectId("66edba2c9b289d24854b3106"),
    title: "Кнопка «Замьютить кота»",
    image: { fileName: "/images/mute-cat.png", originalName: "mute-cat.png" },
    category: "кнопка",
    description: "Если орёт кот, нажмите кнопку.",
    price: 2000
  },
  {
    _id: ObjectId("66edba4e9b289d24854b3110"),
    title: "БЭМ-пилюлька",
    image: { fileName: "/images/Pill.png", originalName: "Pill.png" },
    category: "другое",
    description: "Чтобы научиться правильно называть модификаторы, без этого не обойтись.",
    price: 1500
  },
  {
    _id: ObjectId("66edba6e9b289d24854b311a"),
    title: "Портативный телепорт",
    image: { fileName: "/images/Polygon.png", originalName: "Polygon.png" },
    category: "другое",
    description: "Измените локацию для поиска работы.",
    price: 100000
  },
  {
    _id: ObjectId("66edba879b289d24854b3124"),
    title: "Микровселенная в кармане",
    image: { fileName: "/images/Butterfly.png", originalName: "Butterfly.png" },
    category: "другое",
    description: "Даст время для изучения React, ООП и бэкенда",
    price: 750
  },
  {
    _id: ObjectId("66edba9f9b289d24854b312e"),
    title: "UI/UX-карандаш",
    image: { fileName: "/images/Leaf.png", originalName: "Leaf.png" },
    category: "хард-скил",
    description: "Очень полезный навык для фронтендера. Без шуток.",
    price: 10000
  },
  {
    _id: ObjectId("66edbaba9b289d24854b3138"),
    title: "Бэкенд-антистресс",
    image: { fileName: "/images/Mithosis.png", originalName: "Mithosis.png" },
    category: "другое",
    description: "Сжимайте мячик, чтобы снизить стресс от тем по бэкенду.",
    price: 1000
  }
]);

db.users.insertMany([
  {
    _id: ObjectId("66ed71ce9c59262364955b3e"),
    name: "Admin",
    email: "admin@mail.ru",
    password: "5f4dcc3b5aa765d61d8327deb882cf99",
    roles: ["admin"],
    lastOrderDate: null,
    lastOrder: null,
    totalAmount: 0,
    orderCount: 0,
    orders: [],
    tokens: [
      {
        token: "c03738d48927a424d2439b85d50853b58f67e15e2c9fe9b5b62c6f313c8610ee",
        _id: ObjectId("66edb90c9b289d24854b30b7")
      }
    ],
    createdAt: ISODate("2024-09-20T12:59:58.737Z"),
    updatedAt: ISODate("2024-09-20T18:03:56.272Z")
  },
  {
    _id: ObjectId("66ed725a9c59262364955b5f"),
    name: "First Customer",
    email: "user1@mail.ru",
    password: "7c6a180b36896a0a8c02787eeafb0e4c",
    roles: ["customer"],
    lastOrderDate: null,
    lastOrder: null,
    totalAmount: 0,
    orderCount: 0,
    orders: [],
    tokens: [
      {
        token: "3101840723f742c206f69fba3ceb5725cde5d73f478fe907e962836061d2accc",
        _id: ObjectId("66ed725a9c59262364955b61")
      }
    ],
    createdAt: ISODate("2024-09-20T13:02:18.404Z"),
    updatedAt: ISODate("2024-09-20T13:02:18.408Z")
  }
]);