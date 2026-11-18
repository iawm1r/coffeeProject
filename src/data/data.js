import cappuccino from "../assets/image/cappuccino.png";
import chaiLatte from "../assets/image/chaiLatte.png";
import macchiato from "../assets/image/macchiato.png";
import expersso from "../assets/image/expersso.png";
import masalatea from "../assets/image/images.jfif";
import amricano from "../assets/image/Amricano.jfif";
import cakesobhane from "../assets/image/cakesobhane.png";
import cake from "../assets/image/cake.png";
const CoffeeMenu = [
  {
    id: 1,
    name: "کاپوچینو کلاسیک",
    image: cappuccino,
    price: 45000,
    ingredients: ["اسپرسو", "شیرداغ"],
    description: "ترکیب بی‌نظیر قهوه و شیر",
  },
  {
    id: 2,
    name: "لاته آرت",
    image: chaiLatte,
    price: 40000,
    ingredients: ["اسپرسو", "شیرداغ"],
    description: "طعم شیرین و خاص",
  },
  {
    id: 3,
    name: "موکا شکلاتی ",
    image: macchiato,
    price: 50000,
    ingredients: ["اسپرسو", "شکلات داغ"],
    description: "قهوه و شکلات در کنار هم",
  },
  {
    id: 4,
    name: "اسپرسو",
    image: expersso,
    price: 55000,
    ingredients: ["اسپرسو", "قهوه"],
    description: "ترکیب بی‌نظیر قهوه و شیر",
  },
  {
    id: 5,
    name: "اسپرسو",
    description: "قهوه‌ای غلیظ و اصیل",
    price: 80000,
    ingredients: ["اسپرسو", "قهوه"],
    category: "coffee",
    image: expersso,
  },
  {
    id: 6,
    name: "کاپوچینو",
    description: "ترکیب بی‌نظیر قهوه و شیر",
    price: 95000,
    ingredients: ["اسپرسو", "شیر"],
    category: "coffee",
    image: cappuccino,
  },
  {
    id: 7,
    name: "موکا",
    description: "قهوه و شکلات در کنار هم",
    price: 95000,
    ingredients: ["اسپرسو", "شکلات"],
    category: "coffee",
    image: macchiato,
  },
  {
    id: 8,
    name: "لاته کارامل",
    description: "طعم شیرین و خاص",
    price: 100000,
    ingredients: ["اسپرسو", "شیر", "کارامل"],
    category: "coffee",
    image: chaiLatte,
  },
  {
    id: 9,
    name: "چای ماسالا",
    description: "دمنوش معطر و خوش‌طعم",
    price: 60000,
    ingredients: ["چای", "شیر", "ادویه"],
    category: "drink",
    image: masalatea,
  },
  {
    id: 10,
    name: "آمریکانو",
    description: "ساده اما پرانرژی",
    price: 70000,
    ingredients: ["اسپرسو", "آب"],
    category: "coffee",
    image: amricano,
  },
  {
    id: 11,
    name: "کیک شکلاتی",
    description: "کیکی نرم با شکلات",
    price: 110000,
    ingredients: ["شکلات", "کیک"],
    category: "dessert",
    image: cake,
  },
  {
    id: 12,
    name: "کیک صبحانه",
    description: "انتخابی خوشمزه برای صبح",
    price: 90000,
    ingredients: ["نان", "کیک"],
    category: "breakfast",
    image: cakesobhane,
  },
];
export default CoffeeMenu;
