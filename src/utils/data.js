import Asr from "../assets/Asr.png";
import Dhuhr from "../assets/Dhuhr.png";
import Fajr from "../assets/Fajr.png";
import Isha from "../assets/Isha.png";
import Maghrib from "../assets/Maghrib.png";

export const images = { Asr, Dhuhr, Fajr, Isha, Maghrib };

export const cities = {
  Cairo: "القاهرة",
  Giza: "الجيزة",
  Alexandria: "الاسكندرية",
  Dumyat: "دمياط",
  Qina: "قنا",
};

export const citiesNames = [
  { ar: "القاهرة", en: "Cairo" },
  { ar: "الجيزة", en: "Giza" },
  { ar: "الاسكندرية", en: "Alexandria" },
  { ar: "دمياط", en: "Dumyat" },
  { ar: "قنا", en: "Qina" },
];

export const prayers = [
  { key: "Fajr", name: "الفجر" },
  { key: "Dhuhr", name: "الظهر" },
  { key: "Asr", name: "العصر" },
  { key: "Maghrib", name: "المغرب" },
  { key: "Isha", name: "العشاء" },
];

export const initialTiming = {
  Fajr: "04:47",
  Dhuhr: "12:06",
  Asr: "03:26",
  // Asr: "03:25",
  Maghrib: "05:58",
  Isha: "07:15",
};
