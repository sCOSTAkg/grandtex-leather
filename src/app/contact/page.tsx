export default function ContactPage() {
  return (
    <div className="container py-16 space-y-6">
      <h1 className="text-3xl font-bold">Свяжитесь с нами</h1>
      <p className="text-muted-foreground max-w-2xl">
        Мы будем рады обсудить ваш проект и предоставить консультацию. Свяжитесь
        с нами любым удобным способом.
      </p>
      <ul className="space-y-2 text-muted-foreground">
        <li>Телефон: +996 507 383 127</li>
        <li>Email: <a href="mailto:info@grandtex.ru" className="text-primary hover:underline">info@grandtex.ru</a></li>
        <li>Telegram: <a href="https://t.me/grandtex" className="text-primary hover:underline">@grandtex</a></li>
        <li>Адрес: г. Бишкек, ул. Промышленная 15</li>
      </ul>
    </div>
  );
}