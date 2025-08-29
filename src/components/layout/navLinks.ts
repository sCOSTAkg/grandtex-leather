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
  { title: "Products", href: "/products" },
  { title: "Why GRANDTEX", href: "/why-grandtex" },
  { title: "Sustainability", href: "/sustainability" },
  { title: "Tanneries", href: "/tanneries" },
  { title: "Highlights", href: "/highlights" },
  { title: "Contact", href: "/contact" },
];
