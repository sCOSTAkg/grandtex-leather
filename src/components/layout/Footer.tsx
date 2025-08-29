"use client";

import Link from 'next/link';

/**
 * Нижний колонтитул сайта. Организован в четыре колонки: услуги,
 * направления производства, информация и контакты. В последней колонке
 * находится форма подписки, которую позже можно связать с бэкендом.
 */
export default function Footer() {
  return (
    <footer className="bg-secondary/20 border-t border-border mt-24">
      <div className="container py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Services column */}
        <div>
          <h4 className="font-semibold mb-3 text-foreground">Услуги</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/services#design" className="hover:text-primary">Разработка лекал</Link>
            </li>
            <li>
              <Link href="/services#sampling" className="hover:text-primary">Пошив образцов</Link>
            </li>
            <li>
              <Link href="/services#manufacturing" className="hover:text-primary">Серийное производство</Link>
            </li>
            <li>
              <Link href="/services#quality" className="hover:text-primary">Контроль качества</Link>
            </li>
          </ul>
        </div>
        {/* Production column */}
        <div>
          <h4 className="font-semibold mb-3 text-foreground">Производство</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/production/mens" className="hover:text-primary">Мужская одежда</Link>
            </li>
            <li>
              <Link href="/production/womens" className="hover:text-primary">Женская одежда</Link>
            </li>
            <li>
              <Link href="/production/business" className="hover:text-primary">Деловая одежда</Link>
            </li>
            <li>
              <Link href="/production/sports" className="hover:text-primary">Спортивная одежда</Link>
            </li>
            <li>
              <Link href="/production/kids" className="hover:text-primary">Детская одежда</Link>
            </li>
          </ul>
        </div>
        {/* Information column */}
        <div>
          <h4 className="font-semibold mb-3 text-foreground">Информация</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/about" className="hover:text-primary">О нас</Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-primary">FAQ</Link>
            </li>
            <li>
              <Link href="/calculator" className="hover:text-primary">Калькулятор стоимости</Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-primary">Портфолио</Link>
            </li>
          </ul>
        </div>
        {/* Contacts and subscribe column */}
        <div>
          <h4 className="font-semibold mb-3 text-foreground">Контакты</h4>
          <ul className="space-y-2 text-sm text-muted-foreground mb-4">
            <li>Тел: +996 507 383 127</li>
            <li>Email: <a href="mailto:info@grandtex.ru" className="hover:text-primary">info@grandtex.ru</a></li>
            <li>Telegram: <a href="https://t.me/grandtex" className="hover:text-primary">@grandtex</a></li>
            <li>Адрес: г. Бишкек, ул. Промышленная 15</li>
          </ul>
          <h4 className="font-semibold mb-2 text-foreground">Подписаться на новости</h4>
          <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-grow rounded-l-md border border-border bg-card px-3 py-2 text-sm text-foreground placeholder-muted-foreground focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-r-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-border py-4">
        <p className="text-center text-xs text-muted-foreground">© {new Date().getFullYear()} GRANDTEX. Все права защищены.</p>
      </div>
    </footer>
  );
}