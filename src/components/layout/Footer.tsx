import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-8 bg-muted">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-medium mb-4">Навигация</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/leathers" className="text-muted-foreground hover:text-foreground">
                Наши кожи
              </Link>
            </li>
            <li>
              <Link
                href="/emboss-perforation"
                className="text-muted-foreground hover:text-foreground"
              >
                Тиснение и перфорация
              </Link>
            </li>
            <li>
              <Link
                href="/why-grandtex"
                className="text-muted-foreground hover:text-foreground"
              >
                Почему GRANDTEX?
              </Link>
            </li>
            <li>
              <Link
                href="/about-grandtex"
                className="text-muted-foreground hover:text-foreground"
              >
                О компании
              </Link>
            </li>
            <li>
              <Link
                href="/tanneries"
                className="text-muted-foreground hover:text-foreground"
              >
                Кожевенные заводы
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                Контакты
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-4">Коллекции</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/collections/spring-summer-2027"
                className="text-muted-foreground hover:text-foreground"
              >
                Коллекция Весна-Лето 27
              </Link>
            </li>
            <li>
              <Link
                href="/collections/fw26"
                className="text-muted-foreground hover:text-foreground"
              >
                Коллекция Осень-Зима 26
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-4">Устойчивость</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/sustainability"
                className="text-muted-foreground hover:text-foreground"
              >
                Устойчивость
              </Link>
            </li>
            <li>
              <Link
                href="/sustainability#operational-excellence"
                className="text-muted-foreground hover:text-foreground"
              >
                Операционное совершенство
              </Link>
            </li>
            <li>
              <Link
                href="/sustainability#circularity"
                className="text-muted-foreground hover:text-foreground"
              >
                Циркулярность
              </Link>
            </li>
            <li>
              <Link
                href="/sustainability#climate-action"
                className="text-muted-foreground hover:text-foreground"
              >
                Климатические действия
              </Link>
            </li>
            <li>
              <Link
                href="/sustainability#social-impact"
                className="text-muted-foreground hover:text-foreground"
              >
                Социальное воздействие
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-4">Информация</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/highlights"
                className="text-muted-foreground hover:text-foreground"
              >
                Основные моменты
              </Link>
            </li>
            <li>
              <Link
                href="/education"
                className="text-muted-foreground hover:text-foreground"
              >
                Обучение
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                Локации
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className="text-muted-foreground hover:text-foreground"
              >
                Ресурсы
              </Link>
            </li>
          </ul>

          <div className="mt-8">
            <p className="text-sm text-muted-foreground mb-4">
              Подпишитесь на нашу рассылку, чтобы получать последние новости о
              продуктах, устойчивых инициативах и сервисах.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Электронная почта"
                className="px-4 py-2 border border-border rounded-md"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
        <p className="text-muted-foreground text-sm">© 2025 GRANDTEX</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link
            href="https://www.linkedin.com"
            className="text-muted-foreground hover:text-foreground"
          >
            LinkedIn
          </Link>
          <Link
            href="https://www.instagram.com"
            className="text-muted-foreground hover:text-foreground"
          >
            Instagram
          </Link>
          <Link
            href="/privacy-policy"
            className="text-muted-foreground hover:text-foreground"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
