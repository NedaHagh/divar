export const menuItems = [
  {
    title: "املاک",
    iconUrl: "https://s100.divarcdn.com/static/explorers/categories/house.svg",
    route: "real-estate",
  },
  {
    title: "وسایل نقلیه",
    iconUrl: "https://s100.divarcdn.com/static/explorers/categories/car.svg",
    route: "vehicles",
  },
  {
    title: "لوازم الکترونیکی",
    iconUrl:
      "https://s100.divarcdn.com/static/explorers/categories/electronic-devices.svg",
    route: "electronic-devices",
  },
  {
    title: "مربوط به خانه",
    iconUrl:
      "https://s100.divarcdn.com/static/explorers/categories/home-appliance.svg",
    route: "home-and-kitchen",
  },
  {
    title: "خدمات",
    iconUrl:
      "https://s100.divarcdn.com/static/explorers/categories/service.svg",
    route: "services",
  },
  {
    title: "وسایل شخصی",
    iconUrl:
      "https://s100.divarcdn.com/static/explorers/categories/personal-stuff.svg",
    route: "personal-goods",
  },
  {
    title: "سرگرمی و فراغت",
    iconUrl:
      "https://s100.divarcdn.com/static/explorers/categories/entertainment.svg",
    route: "entertainment",
  },
  {
    title: "اجتماعی",
    iconUrl: "https://s100.divarcdn.com/static/explorers/categories/social.svg",
    route: "social-services",
  },
  {
    title: "برای کسب و کار",
    iconUrl:
      "https://s100.divarcdn.com/static/explorers/categories/business.svg",
    route: "businesses",
  },
  {
    title: "استخدام و کاریابی",
    iconUrl:
      "https://s100.divarcdn.com/static/explorers/categories/recruitment.svg",
    route: "jobs",
  },
];
export const categories = [
  "car",
  "buy-apartment",
  "rent-apartment",
  "mobile-phones",
  "sofa-armchair",
  "pets-animals",
  "personal-goods",
  "services",
  "jobs",
  "tv-projector",
];
export const cities = [
  { fa: "تهران", eng: "tehran" },
  { fa: "مشهد", eng: "mashhad" },
  { fa: "کرج", eng: "karaj" },
  { fa: "شیراز", eng: "shiraz" },
  { fa: "اصفهان", eng: "isfahan" },
];

export const dataMenuLevelTwo = {
  realEstate: {
    title: { name: "املاک", route: "real-estate" },
    item: [
      { name: "فروش مسکونی", route: "buy-residential" },
      { name: "اجاره مسکونی", route: "rent-residential" },
      { name: "فروش اداری و تجاری", route: "buy-commercial-property" },
      { name: "اجاره اداری و تجاری", route: "rent-commercial-property" },
      { name: "اجاره کوتاه مدت", route: "rent-temporary" },
      { name: "خدمات املاک", route: "real-estate-services" },
    ],
  },
  vehicles: {
    title: { name: "وسایل نقلیه", route: "vehicles" },
    item: [
      { name: "خودرو", route: "auto" },
      { name: "قطعات یدکی و لوازم جانبی خودرو", route: "car-accessories" },
      { name: "موتورسیکلت و لوازم جانبی", route: "motorcycles" },
      { name: "قایق و لوازم جانبی", route: "boat" },
    ],
  },
  electronicDevices: {
    title: { name: "لوازم الکترونیکی", route: "electronic-devices" },
    item: [
      { name: "موبایل و تبلت", route: "mobile-tablet" },
      { name: "رایانه", route: "computers" },
      { name: "کنسول، بازی‌ ویدئویی و آنلاین", route: "game-consoles" },
      { name: "صوتی و تصویری", route: "video-audio-device" },
      { name: "تلفن رومیزی", route: "telephone" },
    ],
  },
  homeAndKitchen: {
    title: { name: "مربوط به خانه", route: "home-and-kitchen" },
    item: [
      { name: "وسایل و تزئینات خانه", route: "home-decor-furniture" },
      { name: "وسایل آشپزخانه", route: "kitchen-appliances" },
      { name: "ابزار", route: "home-appliances" },
      { name: "ساختمان و حیاط", route: "building-garden" },
    ],
  },
  services: {
    title: { name: "خدمات", route: "services" },
    item: [
      { name: "موتور و ماشین", route: "vehicles-services" },
      { name: "پذیرایی/مراسم", route: "catering-services" },
      { name: "خدمات رایانه‌ای و موبایل", route: "technology-services" },
      { name: "مالی/حسابداری/بیمه", route: "financial-services" },
      { name: "حمل و نقل", route: "transport-logistic-services" },
      { name: "پیشه و مهارت", route: "craft-skill-services" },
      { name: "آرایشگری و زیبایی", route: "beauty-services" },
      { name: "سرگرمی", route: "entertaining-services" },
      { name: "نظافت", route: "cleaning-services" },
      { name: "باغبانی و درختکاری", route: "gardening-services" },
      { name: "آموزشی", route: "teaching-services" },
    ],
  },
  personalGoods: {
    title: { name: "وسایل شخصی", route: "personal-goods" },
    item: [
      { name: "کیف، کفش و لباس", route: "apparel" },
      { name: "تزیینی", route: "accessories" },
      { name: "آرایشی، بهداشتی و درمانی", route: "beauty-and-personal-care" },
      { name: "کفش و لباس بچه", route: "child-apparel" },
      { name: "وسایل بچه و اسباب بازی", route: "child-products" },
      { name: "لوازم التحریر", route: "stationery" },
    ],
  },
  entertainment: {
    title: { name: "سرگرمی و فراغت", route: "entertainment" },
    item: [
      { name: "بلیط", route: "ticket" },
      { name: "تور و چارتر", route: "tours" },
      { name: "کتاب و مجله", route: "publication" },
      { name: "دوچرخه/اسکیت/اسکوتر", route: "bike-skate-scooter" },
      { name: "حیوانات", route: "pets-animals" },
      { name: "کلکسیون و سرگرمی", route: "collecting" },
      { name: "آلات موسیقی", route: "musical-instruments" },
      { name: "ورزش و تناسب اندام", route: "sport-entertainment" },
      { name: "اسباب‌ بازی", route: "game-and-toys" },
    ],
  },
  socialServices: {
    title: { name: "اجتماعی", route: "social-services" },
    item: [
      { name: "رویداد", route: "event" },
      { name: "داوطلبانه", route: "voluntary" },
      { name: "گم‌شده‌ها", route: "missing" },
    ],
  },
  businesses: {
    title: { name: "برای کسب و کار", route: "businesses" },
    item: [
      { name: "تجهیزات و ماشین‌آلات", route: "business-equipment" },
      { name: "عمده فروشی", route: "wholesale" },
    ],
  },
  jobs: {
    title: { name: "استخدام و کاریابی", route: "jobs" },
    item: [
      { name: "اداری و مدیریت", route: "administrative-jobs" },
      { name: "سرایداری و نظافت", route: "janitorial-jobs" },
      { name: "معماری ،عمران و ساختمانی", route: "architect-jobs" },
      { name: "خدمات فروشگاه و رستوران", route: "service-jobs" },
      { name: "رایانه و فناوری اطلاعات", route: "it-computer-jobs" },
      { name: "مالی و حسابداری و حقوقی", route: "finance-legal-jobs" },
      { name: "بازاریابی و فروش", route: "marketing-jobs" },
      { name: "صنعتی و فنی و مهندسی", route: "technical-jobs" },
      { name: "آموزشی", route: "teaching-jobs" },
      { name: "حمل و نقل", route: "transport-delivery-jobs" },
      { name: "درمانی و زیبایی و بهداشتی", route: "health-beauty-jobs" },
      { name: "هنری و رسانه", route: "art-media-jobs" },
    ],
  },
};

export const dataMenuLevelThree = {
  buyResidential: {
    title: {
      subMenuOneName: "املاک",
      routeOne: "real-estate",
      subMenuTwoName: "فروش مسکونی",
      routeTwo: "buy-residential",
    },
    item: [
      { name: "آپارتمان", route: "buy-apartment" },
      { name: "خانه و ویلا", route: "buy-villa" },
      { name: "زمین و کلنگی", route: "buy-old-house" },
    ],
  },
  rentResidential: {
    title: {
      subMenuOneName: "املاک",
      routeOne: "real-estate",
      subMenuTwoName: "اجاره مسکونی",
      routeTwo: "rent-residential",
    },
    item: [
      { name: "آپارتمان", route: "rent-apartment" },
      { name: "خانه و ویلا", route: "rent-villa" },
    ],
  },
  buyCommercialProperty: {
    title: {
      subMenuOneName: "املاک",
      routeOne: "real-estate",
      subMenuTwoName: "فروش اداری و تجاری",
      routeTwo: "buy-commercial-property",
    },
    item: [
      { name: "دفتر کار، اتاق اداری و مطب", route: "buy-office" },
      { name: "مغازه و غرفه", route: "buy-store" },
      {
        name: "صنعتی،‌ کشاورزی و تجاری",
        route: "buy-industrial-agricultural-property",
      },
    ],
  },
  rentCommercialProperty: {
    title: {
      subMenuOneName: "املاک",
      routeOne: "real-estate",
      subMenuTwoName: "اجاره اداری و تجاری",
      routeTwo: "rent-commercial-property",
    },
    item: [
      { name: "دفتر کار، اتاق اداری و مطب", route: "rent-office" },
      { name: "مغازه و غرفه", route: "rent-store" },
      {
        name: "صنعتی،‌ کشاورزی و تجاری",
        route: "rent-industrial-agricultural-property",
      },
    ],
  },
  rentTemporary: {
    title: {
      subMenuOneName: "املاک",
      routeOne: "real-estate",
      subMenuTwoName: "اجاره کوتاه مدت",
      routeTwo: "rent-temporary",
    },
    item: [
      { name: "آپارتمان و سوئیت", route: "rent-temporary-suite-apartment" },
      { name: "ویلا و باغ", route: "rent-temporary-villa" },
      { name: "دفتر کار و فضای آموزشی", route: "rent-temporary-workspace" },
    ],
  },
  realEstateServices: {
    title: {
      subMenuOneName: "املاک",
      routeOne: "real-estate",
      subMenuTwoName: "خدمات املاک",
      routeTwo: "real-estate-services",
    },
    item: [
      { name: "آژانس املاک", route: "home-agencies" },
      { name: "مشارکت در ساخت", route: "contribution-construction" },
      { name: "امور مالی و حقوقی", route: "real-estate-financial-legal" },
      { name: "پیش‌فروش", route: "pre-sell-home" },
    ],
  },
  auto: {
    title: {
      subMenuOneName: "وسایل نقلیه",
      routeOne: "vehicles",
      subMenuTwoName: "خودرو",
      routeTwo: "auto",
    },
    item: [
      { name: "سواری", route: "car" },
      { name: "کلاسیک", route: "classic-car" },
      { name: "اجاره‌ای", route: "rental-car" },
      { name: "سنگین", route: "heavy-car" },
    ],
  },
  carAccessories: {
    title: {
      subMenuOneName: "وسایل نقلیه",
      routeOne: "vehicles",
      subMenuTwoName: "قطعات یدکی و لوازم جانبی خودرو",
      routeTwo: "car-accessories",
    },
    item: [],
  },
  motorcycles: {
    title: {
      subMenuOneName: "وسایل نقلیه",
      routeOne: "vehicles",
      subMenuTwoName: "موتورسیکلت و لوازم جانبی",
      routeTwo: "motorcycles",
    },
    item: [],
  },
  boat: {
    title: {
      subMenuOneName: "وسایل نقلیه",
      routeOne: "vehicles",
      subMenuTwoName: "قایق و لوازم جانبی",
      routeTwo: "boat",
    },
    item: [],
  },
  mobileTablet: {
    title: {
      subMenuOneName: "لوازم الکترونیکی",
      routeOne: "electronic-devices",
      subMenuTwoName: "موبایل و تبلت",
      routeTwo: "mobile-tablet",
    },
    item: [
      { name: "گوشی موبایل", route: "mobile-phones" },
      { name: "تبلت", route: "tablet" },
      { name: "لوازم جانبی موبایل و تبلت", route: "mobile-tablet-accessories" },
      { name: "سیم کارت", route: "sim-card" },
    ],
  },
  computers: {
    title: {
      subMenuOneName: "لوازم الکترونیکی",
      routeOne: "electronic-devices",
      subMenuTwoName: "رایانه",
      routeTwo: "computers",
    },
    item: [
      { name: "رایانه همراه", route: "laptop-notebook-macbook" },
      { name: "رایانه رومیزی", route: "desktop-computer" },
      { name: "قطعات و لوازم جانبی", route: "computer-parts-accessories" },
      { name: "مودم و تجهیزات شبکه", route: "modem-network-equipments" },
      { name: "پرینتر/اسکنر/کپی/فکس", route: "printer-scanner-fax" },
    ],
  },
  gameConsoles: {
    title: {
      subMenuOneName: "لوازم الکترونیکی",
      routeOne: "electronic-devices",
      subMenuTwoName: "کنسول، بازی‌ ویدئویی و آنلاین",
      routeTwo: "game-consoles",
    },
    item: [],
  },
  videoAudioDevice: {
    title: {
      subMenuOneName: "لوازم الکترونیکی",
      routeOne: "electronic-devices",
      subMenuTwoName: "صوتی و تصویری",
      routeTwo: "video-audio-device",
    },
    item: [
      { name: "فیلم و موسیقی", route: "film-music" },
      { name: "تلویزیون و پروژکتور", route: "tv-projector" },
    ],
  },
  telephone: {
    title: {
      subMenuOneName: "لوازم الکترونیکی",
      routeOne: "electronic-devices",
      subMenuTwoName: "تلفن رومیزی",
      routeTwo: "telephone",
    },
    item: [],
  },
  homeDecorFurniture: {
    title: {
      subMenuOneName: "مربوط به خانه",
      routeOne: "home-and-kitchen",
      subMenuTwoName: "وسایل و تزئینات خانه",
      routeTwo: "home-decor-furniture",
    },
    item: [
      { name: "تزئینی و آثار هنری", route: "art-decorative" },
      { name: "لوازم روشنایی", route: "lighting" },
      { name: "میز و صندلی", route: "table-desk-chair" },
      { name: "فرش و گلیم", route: "carpets" },
      { name: "کمد و بوفه", route: "closet-storage" },
      { name: "مبلمان و صندلی راحتی", route: "sofa-armchair" },
    ],
  },
  kitchenAppliances: {
    title: {
      subMenuOneName: "مربوط به خانه",
      routeOne: "home-and-kitchen",
      subMenuTwoName: "وسایل آشپزخانه",
      routeTwo: "kitchen-appliances",
    },
    item: [
      { name: "ماشین ظرفشویی", route: "dishwasher" },
      { name: "یخچال و فریزر", route: "refrigerator-freezer" },
    ],
  },
  homeAppliances: {
    title: {
      subMenuOneName: "مربوط به خانه",
      routeOne: "home-and-kitchen",
      subMenuTwoName: "ابزار",
      routeTwo: "home-appliances",
    },
    item: [
      {
        name: "نظافت و خیاطی و اتو",
        route: "vacuum-cleaner-sewing-machine-iron",
      },
    ],
  },
  buildingGarden: {
    title: {
      subMenuOneName: "مربوط به خانه",
      routeOne: "home-and-kitchen",
      subMenuTwoName: "ساختمان و حیاط",
      routeTwo: "building-garden",
    },
    item: [{ name: "سرویس بهداشتی و سونا", route: "bathroom-fixtures" }],
  },
  vehiclesServices: {
    title: {
      subMenuOneName: "خدمات",
      routeOne: "services",
      subMenuTwoName: "موتور و ماشین",
      routeTwo: "vehicles-services",
    },
    item: [{ name: "موتور و ماشین", route: "vehicles-services" }],
  },
  cateringServices: {
    title: {
      subMenuOneName: "خدمات",
      routeOne: "services",
      subMenuTwoName: "پذیرایی/مراسم",
      routeTwo: "catering-services",
    },
    item: [{ name: "پذیرایی/مراسم", route: "catering-services" }],
  },
  technologyServices: {
    title: {
      subMenuOneName: "خدمات",
      routeOne: "services",
      subMenuTwoName: "خدمات رایانه‌ای و موبایل",
      routeTwo: "technology-services",
    },
    item: [{ name: "خدمات رایانه‌ای و موبایل", route: "technology-services" }],
  },
  financialServices: {
    title: {
      subMenuOneName: "خدمات",
      routeOne: "services",
      subMenuTwoName: "مالی/حسابداری/بیمه",
      routeTwo: "financial-services",
    },
    item: [{ name: "مالی/حسابداری/بیمه", route: "financial-services" }],
  },
  transportLogisticServices: {
    title: {
      subMenuOneName: "خدمات",
      routeOne: "services",
      subMenuTwoName: "حمل و نقل",
      routeTwo: "transport-logistic-services",
    },
    item: [{ name: "حمل و نقل", route: "transport-logistic-services" }],
  },
  craftSkillServices: {
    title: {
      subMenuOneName: "خدمات",
      routeOne: "services",
      subMenuTwoName: "پیشه و مهارت",
      routeTwo: "craft-skill-services",
    },
    item: [{ name: "پیشه و مهارت", route: "craft-skill-services" }],
  },
  beautyServices: {
    title: {
      subMenuOneName: "خدمات",
      routeOne: "services",
      subMenuTwoName: "آرایشگری و زیبایی",
      routeTwo: "beauty-services",
    },
    item: [{ name: "آرایشگری و زیبایی", route: "beauty-services" }],
  },
  entertainingServices: {
    title: {
      subMenuOneName: "خدمات",
      routeOne: "services",
      subMenuTwoName: "سرگرمی",
      routeTwo: "entertaining-services",
    },
    item: [{ name: "سرگرمی", route: "entertaining-services" }],
  },
  cleaningServices: {
    title: {
      subMenuOneName: "خدمات",
      routeOne: "services",
      subMenuTwoName: "نظافت",
      routeTwo: "cleaning-services",
    },
    item: [{ name: "نظافت", route: "cleaning-services" }],
  },
  gardeningServices: {
    title: {
      subMenuOneName: "خدمات",
      routeOne: "services",
      subMenuTwoName: "باغبانی و درختکاری",
      routeTwo: "gardening-services",
    },
    item: [{ name: "باغبانی و درختکاری", route: "gardening-services" }],
  },
};
