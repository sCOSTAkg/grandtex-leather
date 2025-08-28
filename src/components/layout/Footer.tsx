import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-medium mb-4">Навигация</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/leathers" className="text-gray-600 hover:text-black">
                Наши кожи
              </Link>
            </li>
            <li>
              <Link
                href="/emboss-perforation"
                className="text-gray-600 hover:text-black"
              >
                Тиснение и перфорация
              </Link>
            </li>
            <li>
              <Link
                href="/why-grandtex"
                className="text-gray-600 hover:text-black"
              >
                Почему GRANDTEX?
              </Link>
            </li>
            <li>
              <Link
                href="/about-grandtex"
                className="text-gray-600 hover:text-black"
              >
                О компании
              </Link>
            </li>
            <li>
              <Link
                href="/tanneries"
                className="text-gray-600 hover:text-black"
              >
                Кожевенные заводы
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-black">
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
                className="text-gray-600 hover:text-black"
              >
                Коллекция Весна-Лето 27
              </Link>
            </li>
            <li>
              <Link
                href="/collections/fw26"
                className="text-gray-600 hover:text-black"
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
                className="text-gray-600 hover:text-black"
              >
                Устойчивость
              </Link>
            </li>
            <li>
              <Link
                href="/sustainability#operational-excellence"
                className="text-gray-600 hover:text-black"
              >
                Операционное совершенство
              </Link>
            </li>
            <li>
              <Link
                href="/sustainability#circularity"
                className="text-gray-600 hover:text-black"
              >
                Циркулярность
              </Link>
            </li>
            <li>
              <Link
                href="/sustainability#climate-action"
                className="text-gray-600 hover:text-black"
              >
                Климатические действия
              </Link>
            </li>
            <li>
              <Link
                href="/sustainability#social-impact"
                className="text-gray-600 hover:text-black"
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
                className="text-gray-600 hover:text-black"
              >
                Основные моменты
              </Link>
            </li>
            <li>
              <Link
                href="/education"
                className="text-gray-600 hover:text-black"
              >
                Обучение
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-black">
                Локации
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className="text-gray-600 hover:text-black"
              >
                Ресурсы
              </Link>
            </li>
          </ul>

          <div className="mt-8">
            <p className="text-sm text-gray-600 mb-4">
              Подпишитесь на нашу рассылку, чтобы получать последние новости о
              продуктах, устойчивых инициативах и сервисах.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Электронная почта"
                className="px-4 py-2 border border-gray-300 rounded-md"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-md"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 text-sm">© 2025 GRANDTEX</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link
            href="https://www.linkedin.com"
            className="text-gray-600 hover:text-black"
          >
            LinkedIn
          </Link>
          <Link
            href="https://www.instagram.com"
            className="text-gray-600 hover:text-black"
          >
            Instagram
          </Link>
          <Link
            href="/privacy-policy"
            className="text-gray-600 hover:text-black"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
