export default function ServicesPage() {
  return (
    <div className="container py-16 space-y-6">
      <h1 className="text-3xl font-bold">Наши услуги</h1>
      <p className="text-muted-foreground max-w-2xl">
        GRANDTEX обеспечивает полный цикл швейного производства: от
        разработки лекал и создания прототипов до серийного пошива,
        контроля качества и финальной упаковки изделий.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Разработка лекал для моделей любой сложности</li>
        <li>Прототипирование для проверки конструкции и посадки</li>
        <li>Серийный пошив партий разного объёма</li>
        <li>Контроль качества на каждом этапе</li>
        <li>Упаковка одежды согласно требованиям заказчика</li>
      </ul>
    </div>
  );
}
