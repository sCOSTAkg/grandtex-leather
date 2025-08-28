import type { NavLink } from "./Header";

export const defaultNavLinks: NavLink[] = [
  {
    title: "Кожа",
    href: "/leathers",
    image: "https://ext.same-assets.com/1118492138/3442149313.jpeg",
    subLinks: [
      {
        title: "Коллекция Весна-Лето 27",
        href: "/collections/spring-summer-2027",
      },
      {
        title: "Коллекция Осень-Зима 26",
        href: "/collections/fw26",
      },
    ],
  },
  {
    title: "Тиснение и перфорация",
    href: "/emboss-perforation",
    image: "https://ext.same-assets.com/1118492138/3513175735.jpeg",
  },
  {
    title: "Почему GRANDTEX?",
    href: "/why-grandtex",
    image: "https://ext.same-assets.com/1118492138/2560085916.jpeg",
    subLinks: [
      { title: "О GRANDTEX", href: "/about-grandtex" },
      { title: "Кожевенные заводы", href: "/tanneries" },
    ],
  },
  {
    title: "Устойчивость",
    href: "/sustainability",
    image: "https://ext.same-assets.com/1118492138/180971912.jpeg",
    subLinks: [
      {
        title: "Операционное совершенство",
        href: "/sustainability#operational-excellence",
      },
      { title: "Циркулярность", href: "/sustainability#circularity" },
      {
        title: "Климатические действия",
        href: "/sustainability#climate-action",
      },
      {
        title: "Социальное воздействие",
        href: "/sustainability#social-impact",
      },
    ],
  },
  { title: "Основные моменты", href: "/highlights" },
  { title: "Обучение", href: "/education" },
  { title: "Локации", href: "/contact" },
  { title: "Ресурсы", href: "/resources" },
];

