/* ========================================
   CARPE DIEM - CONFIGURAZIONE
   ========================================
   
   PER MODIFICARE IL SITO:
   1. Cambia i dati in CAFE (telefono, indirizzo, ecc.)
   2. Cambia il menu in MENU (aggiungi/togli prodotti)
   3. Non toccare il resto se non sai cosa fai!
   
   ======================================== */

const CAFE = {
  name: "Carpe Diem",
  phone: "347 814 0258",
  phoneTel: "+393478140258",
  phone2: "0966 420138",
  phoneTel2: "+390966420138",
  address: "Gioia Tauro, Via S. Pugliese 54",
  mapsQuery: "Via S. Pugliese 54, Gioia Tauro",
  instagramUrl: "https://www.instagram.com/ilcarpediem06/",
  instagramHandle: "@ilcarpediem06",
  wifi: {
    ssid: "ADB-DB9D56",
    password: "password123",
  },
  qrTargetUrl: "https://menucarpediem.netlify.app/#menu",
};

/* ========================================
   MENU
   Struttura: { title: { it, en }, items: [...] }
   Ogni item: { name: { it, en }, price }
   ======================================== */

const MENU = [
  {
    title: { it: "Caffetteria", en: "Coffee" },
    items: [
      { name: { it: "Caffè", en: "Espresso" }, price: "€ 1,00" },
      { name: { it: "Caffè macchiato", en: "Macchiato" }, price: "€ 1,10" },
      { name: { it: "Caffè corretto", en: "Espresso with liquor" }, price: "€ 1,50" },
      { name: { it: "Caffè orzo", en: "Barley coffee" }, price: "€ 1,00" },
      { name: { it: "Caffè decaffeinato", en: "Decaf" }, price: "€ 1,20" },
      { name: { it: "Ginseng", en: "Ginseng" }, price: "€ 1,30" },
      { name: { it: "Cappuccino / Latte macchiato", en: "Cappuccino / Latte" }, price: "€ 1,80" },
      { name: { it: "Latte bianco", en: "Hot milk" }, price: "€ 1,30" },
      { name: { it: "Caffè freddo", en: "Iced coffee" }, price: "€ 2,00" },
      { name: { it: "Crema caffè", en: "Coffee cream" }, price: "€ 2,00" },
      { name: { it: "Caffè shakerato", en: "Shaken iced coffee" }, price: "€ 3,50" },
      { name: { it: "Spremuta d'arancia", en: "Fresh orange juice" }, price: "€ 1,50" },
      { name: { it: "Amaro", en: "Bitter liqueur" }, price: "€ 3,00" },
      { name: { it: "Jefferson / Amaro Ballor", en: "Jefferson / Amaro Ballor" }, price: "€ 3,50" },
    ],
  },
  {
    title: { it: "Cornetteria / Dolci", en: "Pastries / Sweets" },
    items: [
      { name: { it: "Cornetto", en: "Croissant" }, price: "€ 1,40" },
      { name: { it: "Cornetto Nutella", en: "Nutella croissant" }, price: "€ 2,00" },
      { name: { it: "Occhio di bue grande (Nutella/Marmellata/Pistacchio/Cioccolato bianco)", en: "Jam tart large (Nutella/Jam/Pistachio/White chocolate)" }, price: "€ 1,70" },
      { name: { it: "Occhio di bue piccolo (Nutella/Marmellata/Pistacchio/Cioccolato bianco)", en: "Jam tart small (Nutella/Jam/Pistachio/White chocolate)" }, price: "€ 0,60" },
      { name: { it: "Pasticciotto grande crema pasticcera", en: "Custard pastry large" }, price: "€ 1,80" },
      { name: { it: "Pasticciotto piccolo (Crema limone/Cioccolato fondente e arancia)", en: "Custard pastry small (Lemon/Dark chocolate & orange)" }, price: "€ 1,30" },
    ],
  },
  {
    title: { it: "Bevande", en: "Drinks" },
    items: [
      { name: { it: "Acqua 0.5L (Naturale/Frizzante/Lete)", en: "Water 0.5L (Still/Sparkling/Lete)" }, price: "€ 1,00" },
      { name: { it: "Acqua 1.5L (Naturale/Frizzante)", en: "Water 1.5L (Still/Sparkling)" }, price: "€ 1,50" },
      { name: { it: "Coca-Cola / Fanta / Sprite (Lattina)", en: "Coca-Cola / Fanta / Sprite (Can)" }, price: "€ 2,00" },
      { name: { it: "Succhi di frutta", en: "Fruit juices" }, price: "€ 2,00" },
      { name: { it: "Schweppes (Limone/Tonica)", en: "Schweppes (Lemon/Tonic)" }, price: "€ 2,00" },
      { name: { it: "Acqua Tonica Mediterranea", en: "Mediterranean Tonic Water" }, price: "€ 2,50" },
      { name: { it: "Red Bull", en: "Red Bull" }, price: "€ 2,50" },
      { name: { it: "Menabrea Bionda", en: "Menabrea Blonde" }, price: "€ 3,00" },
      { name: { it: "Guinness", en: "Guinness" }, price: "€ 3,50" },
      { name: { it: "Tennent's", en: "Tennent's" }, price: "€ 4,00" },
      { name: { it: "Corona", en: "Corona" }, price: "€ 3,50" },
      { name: { it: "Beck's", en: "Beck's" }, price: "€ 3,00" },
      { name: { it: "Heineken", en: "Heineken" }, price: "€ 3,00" },
      { name: { it: "Peroni Nastro Azzurro", en: "Peroni Nastro Azzurro" }, price: "€ 2,50" },
      { name: { it: "Leffe Blonde", en: "Leffe Blonde" }, price: "€ 3,50" },
      { name: { it: "Leffe Ambrée", en: "Leffe Ambrée" }, price: "€ 3,50" },
      { name: { it: "Ceres", en: "Ceres" }, price: "€ 3,50" },
      { name: { it: "Bud", en: "Bud" }, price: "€ 2,50" },
      { name: { it: "Demon", en: "Demon" }, price: "€ 4,00" },
      { name: { it: "Bjorne", en: "Bjorne" }, price: "€ 3,50" },
      { name: { it: "Raffo", en: "Raffo" }, price: "€ 2,50" },
      { name: { it: "Kalabra IPA", en: "Kalabra IPA" }, price: "€ 5,80" },
      { name: { it: "Kalabra Blanche", en: "Kalabra Blanche" }, price: "€ 6,00" },
      { name: { it: "Kalabra Black IPA", en: "Kalabra Black IPA" }, price: "€ 6,00" },
      { name: { it: "Kalabra Blonde", en: "Kalabra Blonde" }, price: "€ 5,00" },
    ],
  },
  {
    title: { it: "Insalate", en: "Salads" },
    items: [
      { name: { it: "Verde (Lattuga)", en: "Green (Lettuce)" }, price: "€ 2,00" },
      { name: { it: "Mista (Lattuga, Pomodoro)", en: "Mixed (Lettuce, Tomato)" }, price: "€ 3,00" },
      { name: { it: "Tricolore (Lattuga, Pomodoro, Mais)", en: "Tricolore (Lettuce, Tomato, Corn)" }, price: "€ 3,80" },
      { name: { it: "Marinara (Lattuga, Pomodoro, Mais, Tonno)", en: "Marinara (Lettuce, Tomato, Corn, Tuna)" }, price: "€ 4,70" },
      { name: { it: "Top (Lattuga, Pomodoro, Mais, Tonno, Mozzarella)", en: "Top (Lettuce, Tomato, Corn, Tuna, Mozzarella)" }, price: "€ 5,50" },
    ],
  },
  {
    title: { it: "Piadine", en: "Wraps" },
    items: [
      { name: { it: "Diavola (Salame piccante, Fontina, Funghi)", en: "Diavola (Spicy salami, Fontina, Mushrooms)" }, price: "€ 5,00" },
      { name: { it: "Genuina (Prosciutto cotto, Pomodoro, Tonno)", en: "Genuina (Ham, Tomato, Tuna)" }, price: "€ 4,50" },
      { name: { it: "Paesana (Prosciutto cotto, Provola, Funghi)", en: "Paesana (Ham, Provola, Mushrooms)" }, price: "€ 4,50" },
      { name: { it: "Stuzzicosa (Prosciutto crudo, Grana)", en: "Stuzzicosa (Cured ham, Parmesan)" }, price: "€ 5,00" },
      { name: { it: "Rustica (Pancetta, Provola, Pomodoro)", en: "Rustica (Bacon, Provola, Tomato)" }, price: "€ 4,50" },
      { name: { it: "Semplice (Prosciutto crudo, Mozzarella, Pomodoro)", en: "Semplice (Cured ham, Mozzarella, Tomato)" }, price: "€ 5,00" },
    ],
  },
  {
    title: { it: "Stuzzicheria", en: "Snacks" },
    items: [
      { name: { it: "Super Toast", en: "Super Toast" }, price: "€ 3,00" },
      { name: { it: "Tramezzino al cotto (Prosciutto cotto, Mozzarella, Pomodoro, Lattuga, Maionese)", en: "Ham sandwich (Ham, Mozzarella, Tomato, Lettuce, Mayo)" }, price: "€ 3,00" },
      { name: { it: "Tramezzino al tonno (Tonno, Mozzarella, Pomodoro, Lattuga, Maionese)", en: "Tuna sandwich (Tuna, Mozzarella, Tomato, Lettuce, Mayo)" }, price: "€ 3,00" },
      { name: { it: "Rustichella* (Prosciutto cotto, Mozzarella)", en: "Rustichella* (Ham, Mozzarella)" }, price: "€ 2,50" },
      { name: { it: "Patatine fritte* (Piccola / Grande)", en: "French fries* (Small / Large)" }, price: "€ 2,50 / € 3,50" },
      { name: { it: "Chele di granchio* (5 pezzi)", en: "Crab claws* (5 pcs)" }, price: "€ 3,00" },
      { name: { it: "Olive ascolane* (5 pezzi)", en: "Stuffed olives* (5 pcs)" }, price: "€ 3,00" },
      { name: { it: "Mozzarelline panate* (5 pezzi)", en: "Breaded mozzarella* (5 pcs)" }, price: "€ 3,00" },
      { name: { it: "Crocchette di patate* (5 pezzi)", en: "Potato croquettes* (5 pcs)" }, price: "€ 3,00" },
      { name: { it: "Arancini mignon* (5 pezzi)", en: "Mini arancini* (5 pcs)" }, price: "€ 3,00" },
    ],
  },
  {
    title: { it: "Panini", en: "Sandwiches" },
    items: [
      { name: { it: "Carpe Diem (Hamburger*, Fontina, Pomodoro, Lattuga, Ketchup)", en: "Carpe Diem (Burger*, Fontina, Tomato, Lettuce, Ketchup)" }, price: "€ 5,00" },
      { name: { it: "Sfizioso (Prosciutto cotto, Provola, Funghi, Maionese, Salsa piccante)", en: "Sfizioso (Ham, Provola, Mushrooms, Mayo, Spicy sauce)" }, price: "€ 4,00" },
      { name: { it: "Fuego (Pancetta, 'Nduja, Formaggio, Funghi, Pomodoro)", en: "Fuego (Bacon, 'Nduja, Cheese, Mushrooms, Tomato)" }, price: "€ 4,50" },
      { name: { it: "Hot Dog (Wurstel*, Patatine*, Ketchup, Maionese)", en: "Hot Dog (Sausage*, Fries*, Ketchup, Mayo)" }, price: "€ 4,00" },
      { name: { it: "Marinaro (Tonno, Pomodoro, Maionese)", en: "Marinaro (Tuna, Tomato, Mayo)" }, price: "€ 3,50" },
      { name: { it: "Saporito (Pancetta, Provola, Pomodoro, Salsa piccante)", en: "Saporito (Bacon, Provola, Tomato, Spicy sauce)" }, price: "€ 4,00" },
      { name: { it: "Zalla (Prosciutto crudo, Mozzarella, Patatine*, Maionese)", en: "Zalla (Cured ham, Mozzarella, Fries*, Mayo)" }, price: "€ 4,50" },
      { name: { it: "Parma (Prosciutto crudo, Mozzarella, Pomodoro)", en: "Parma (Cured ham, Mozzarella, Tomato)" }, price: "€ 4,50" },
      { name: { it: "Piccantino (Salame piccante, Fontina, Funghi, Salsa piccante)", en: "Piccantino (Spicy salami, Fontina, Mushrooms, Spicy sauce)" }, price: "€ 4,50" },
      { name: { it: "Caprese (Pomodoro, Mozzarella, Lattuga, Origano, Olio d'oliva)", en: "Caprese (Tomato, Mozzarella, Lettuce, Oregano, Olive oil)" }, price: "€ 4,00" },
      { name: { it: "Calabrese ('Nduja, Formaggio, Funghi)", en: "Calabrese ('Nduja, Cheese, Mushrooms)" }, price: "€ 4,00" },
      { name: { it: "Delicato (Prosciutto cotto, Philadelphia, Pomodoro, Origano)", en: "Delicato (Ham, Philadelphia, Tomato, Oregano)" }, price: "€ 4,00" },
      { name: { it: "Appetitoso (Cotoletta di pollo*, Sottiletta, Pomodoro, Lattuga)", en: "Appetitoso (Chicken cutlet*, Cheese slice, Tomato, Lettuce)" }, price: "€ 5,00" },
      { name: { it: "Gustoso (Tonno, Pomodoro, Sottiletta, Salsa rosa)", en: "Gustoso (Tuna, Tomato, Cheese slice, Pink sauce)" }, price: "€ 4,00" },
      { name: { it: "Delizioso (Prosciutto cotto, Mozzarella, Funghi)", en: "Delizioso (Ham, Mozzarella, Mushrooms)" }, price: "€ 4,00" },
      { name: { it: "Ghiotto (Pancetta, Funghi, Pomodoro, Salsa piccante)", en: "Ghiotto (Bacon, Mushrooms, Tomato, Spicy sauce)" }, price: "€ 4,00" },
    ],
  },
];

const MENU_FOOTNOTE = {
  it: "*PRODOTTO SURGELATO",
  en: "*FROZEN PRODUCT",
};

/* ========================================
   TRADUZIONI INTERFACCIA
   ======================================== */

const I18N = {
  it: {
    "nav.menu": "Menù ▾",
    "nav.info": "Info",
    "nav.contacts": "Contatti",
    "menu.title": "MENÙ",
    "info.title": "INFO",
    "info.address": "Indirizzo",
    "info.hours": "Orari",
    "info.network": "Rete:",
    "contacts.title": "CONTATTI",
    "contacts.call": "Chiama",
    "contacts.mobile": "Cellulare",
    "contacts.landline": "Fisso",
    "contacts.directions": "Indicazioni",
    "contacts.openMaps": "Apri Google Maps",
    "admin.download": "Scarica QR (PNG)",
  },
  en: {
    "nav.menu": "Menu ▾",
    "nav.info": "Info",
    "nav.contacts": "Contacts",
    "menu.title": "MENU",
    "info.title": "INFO",
    "info.address": "Address",
    "info.hours": "Hours",
    "info.network": "Network:",
    "contacts.title": "CONTACTS",
    "contacts.call": "Call",
    "contacts.mobile": "Mobile",
    "contacts.landline": "Landline",
    "contacts.directions": "Directions",
    "contacts.openMaps": "Open Google Maps",
    "admin.download": "Download QR (PNG)",
  },
};

/* ========================================
   FUNZIONI
   ======================================== */

function getLang() {
  const params = new URLSearchParams(window.location.search);
  const fromUrl = (params.get("lang") || "").toLowerCase();
  if (fromUrl === "it" || fromUrl === "en") return fromUrl;

  const saved = (localStorage.getItem("lang") || "").toLowerCase();
  if (saved === "it" || saved === "en") return saved;

  const browser = (navigator.language || "").toLowerCase();
  return browser.startsWith("it") ? "it" : "en";
}

function setLang(lang) {
  localStorage.setItem("lang", lang);
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  history.replaceState({}, "", url.toString());
  applyAll();
}

function t(key) {
  const lang = getLang();
  return (I18N[lang] && I18N[lang][key]) || (I18N.it && I18N.it[key]) || key;
}

function localize(obj) {
  if (!obj) return "";
  if (typeof obj === "string") return obj;
  const lang = getLang();
  return obj[lang] || obj.it || "";
}

function isAdminMode() {
  const params = new URLSearchParams(window.location.search);
  return params.get("admin") === "1";
}

function applyI18n() {
  const lang = getLang();
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
}

function updateLangButtons() {
  const lang = getLang();
  document.getElementById("langIt")?.classList.toggle("active", lang === "it");
  document.getElementById("langEn")?.classList.toggle("active", lang === "en");
}

function setupLangButtons() {
  document.getElementById("langIt")?.addEventListener("click", () => setLang("it"));
  document.getElementById("langEn")?.addEventListener("click", () => setLang("en"));
}

function setupLinks() {
  const phoneLink = document.getElementById("phoneLink");
  if (phoneLink) phoneLink.href = `tel:${CAFE.phoneTel}`;

  const phoneText = document.getElementById("phoneText");
  if (phoneText) phoneText.textContent = CAFE.phone;

  const addressText = document.getElementById("addressText");
  if (addressText) addressText.textContent = CAFE.address;

  const mapsLink = document.getElementById("mapsLink");
  if (mapsLink) mapsLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CAFE.mapsQuery)}`;

  const instagramLink = document.getElementById("instagramLink");
  if (instagramLink) instagramLink.href = CAFE.instagramUrl;

  const wifiSsid = document.getElementById("wifiSsid");
  if (wifiSsid) wifiSsid.textContent = CAFE.wifi.ssid;

  const wifiPass = document.getElementById("wifiPass");
  if (wifiPass) wifiPass.textContent = CAFE.wifi.password;
}

function setupMenuDropdown() {
  const dropdown = document.getElementById("menuDropdown");
  if (!dropdown) return;

  dropdown.innerHTML = "";
  
  // Link "Tutto il menu"
  const allLink = document.createElement("a");
  allLink.href = "#menu";
  allLink.textContent = getLang() === "en" ? "Full menu" : "Tutto il menù";
  dropdown.appendChild(allLink);

  // Link per ogni categoria
  for (let i = 0; i < MENU.length; i++) {
    const cat = MENU[i];
    const link = document.createElement("a");
    link.href = `#cat-${i}`;
    link.textContent = localize(cat.title);
    dropdown.appendChild(link);
  }
}

function renderMenu() {
  const container = document.getElementById("menuContainer");
  if (!container) return;

  container.innerHTML = "";
  const lang = getLang();

  for (let i = 0; i < MENU.length; i++) {
    const category = MENU[i];
    const section = document.createElement("div");
    section.className = "menu-category";
    section.id = `cat-${i}`;

    const title = document.createElement("h3");
    title.className = "menu-category-title";
    title.textContent = localize(category.title);
    section.appendChild(title);

    const list = document.createElement("div");
    list.className = "menu-list";

    for (const item of category.items) {
      const itemDiv = document.createElement("div");
      itemDiv.className = "menu-item";

      // Separa nome prodotto da ingredienti (tra parentesi)
      const fullName = localize(item.name);
      const match = fullName.match(/^([^(]+)(\(.+\))?$/);
      const productName = match ? match[1].trim() : fullName;
      const productDesc = match && match[2] ? match[2] : null;

      // Prima riga: nome + puntini + prezzo
      const row = document.createElement("div");
      row.className = "menu-item-row";

      const nameEl = document.createElement("span");
      nameEl.className = "menu-item-name";
      nameEl.textContent = productName;

      const dots = document.createElement("span");
      dots.className = "menu-item-dots";

      const priceEl = document.createElement("span");
      priceEl.className = "menu-item-price";
      priceEl.textContent = item.price;

      row.appendChild(nameEl);
      row.appendChild(dots);
      row.appendChild(priceEl);
      itemDiv.appendChild(row);

      // Seconda riga: ingredienti (se ci sono)
      if (productDesc) {
        const descEl = document.createElement("span");
        descEl.className = "menu-item-desc";
        descEl.textContent = productDesc;
        itemDiv.appendChild(descEl);
      }

      list.appendChild(itemDiv);
    }

    section.appendChild(list);
    container.appendChild(section);
  }

  // Nota finale
  const footnote = document.createElement("div");
  footnote.className = "menu-footnote";
  footnote.textContent = MENU_FOOTNOTE[lang] || MENU_FOOTNOTE.it;
  container.appendChild(footnote);
}

function setupAdmin() {
  const adminSection = document.getElementById("qrAdmin");
  if (!adminSection) return;

  if (!isAdminMode()) {
    adminSection.hidden = true;
    return;
  }

  adminSection.hidden = false;

  const qrText = document.getElementById("qrTargetText");
  if (qrText) qrText.textContent = CAFE.qrTargetUrl;

  // Carica libreria QR
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js";
  script.onload = () => {
    const qrContainer = document.getElementById("qrcode");
    if (qrContainer && window.QRCode) {
      qrContainer.innerHTML = "";
      new window.QRCode(qrContainer, {
        text: CAFE.qrTargetUrl,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: window.QRCode.CorrectLevel.M,
      });
    }
  };
  document.head.appendChild(script);

  const downloadBtn = document.getElementById("downloadQrBtn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      const qrContainer = document.getElementById("qrcode");
      const canvas = qrContainer?.querySelector("canvas");
      if (canvas) {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "CarpeDiem-QR.png";
        link.click();
      }
    });
  }
}

function applyAll() {
  applyI18n();
  updateLangButtons();
  renderMenu();
  setupMenuDropdown();
}

/* ========================================
   AVVIO
   ======================================== */

document.addEventListener("DOMContentLoaded", () => {
  setupLangButtons();
  setupLinks();
  setupAdmin();
  applyAll();
});
