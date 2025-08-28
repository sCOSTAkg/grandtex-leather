export default function ServicesPage() {
  return (
    <div className="container py-16 space-y-6">
      <h1 className="text-3xl font-bold">Наши услуги</h1>
      <p className="text-muted-foreground max-w-2xl">
        GRANDTEX предоставляет полный спектр услуг — от разработки лекал и
        изготовления образцов до серийного производства и контроля качества.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Разработка лекал с учётом особенностей дизайна и материалов</li>
        <li>Пошив единичных образцов для утверждения конструкции</li>
        <li>Массовый пошив партий различного объёма</li>
        <li>Трёхуровневый контроль качества на каждом этапе</li>
        <li>Индивидуальная упаковка и маркировка изделий</li>
      </ul>
    </div>
  );
}