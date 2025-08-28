export interface NavLink {
  /**
   * Display title for the link.
   */
  title: string;
  /**
   * Path relative to the site root. When set, clicking the link navigates to this route.
   */
  href: string;
  /**
   * Optional child links for dropdown menus.
   */
  subLinks?: NavLink[];
}

/**
 * Default navigation structure used by the Header component. The menu items
 * reflect the structure described in the adaptation guide: services, about,
 * portfolio, production categories and contacts. Add additional links or
 * sub-links as your application grows.
 */
export const defaultNavLinks: NavLink[] = [
  {
    title: 'Услуги',
    href: '/services',
  },
  {
    title: 'О нас',
    href: '/about',
  },
  {
    title: 'Портфолио',
    href: '/portfolio',
  },
  {
    title: 'Производство',
    href: '/production',
    subLinks: [
      { title: 'Мужская одежда', href: '/production/mens' },
      { title: 'Женская одежда', href: '/production/womens' },
      { title: 'Деловая одежда', href: '/production/business' },
      { title: 'Спортивная одежда', href: '/production/sports' },
      { title: 'Детская одежда', href: '/production/kids' },
    ],
  },
  {
    title: 'Контакты',
    href: '/contact',
  },
];