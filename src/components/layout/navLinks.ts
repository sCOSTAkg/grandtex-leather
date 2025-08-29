export interface NavLink {
  /**
   * Заголовок пункта меню.
   */
  title: string;
  /**
   * Путь относительно корня сайта. При нажатии происходит переход по этому маршруту.
   */
  href: string;
  /**
   * Необязательные дочерние ссылки для выпадающих меню.
   */
  subLinks?: NavLink[];
}

/**
 * Стандартная структура навигации для компонента Header. Пункты меню
 * отражают основные разделы сайта.
 */
export const defaultNavLinks: NavLink[] = [
  { title: "Продукция", href: "/products" },
  { title: "Почему GRANDTEX", href: "/why-grandtex" },
  { title: "Устойчивое развитие", href: "/sustainability" },
  { title: "Фабрики", href: "/tanneries" },
  { title: "Новости", href: "/highlights" },
  { title: "Контакты", href: "/contact" },
];
