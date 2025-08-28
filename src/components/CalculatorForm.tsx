"use client";

import { useState } from 'react';

/**
 * A simple cost calculator. Users input the number of garments they wish to
 * produce and receive a quote with tiered discounts. The calculation is
 * illustrative; real pricing logic should be implemented on the backend.
 */
export default function CalculatorForm() {
  const [quantity, setQuantity] = useState<number>(100);
  const [pricePerItem] = useState<number>(100); // базовая цена за единицу

  /**
   * Determines the discount based on the number of items. Returns a
   * multiplier (e.g. 0.95 for 5% discount).
   */
  const getDiscount = (qty: number): number => {
    if (qty >= 1000) return 0.8; // 20% скидка
    if (qty >= 500) return 0.9; // 10% скидка
    if (qty >= 200) return 0.95; // 5% скидка
    return 1;
  };

  const discount = getDiscount(quantity);
  const finalPricePerItem = pricePerItem * discount;
  const totalCost = finalPricePerItem * quantity;

  return (
    <div className="max-w-xl mx-auto bg-card p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Калькулятор стоимости</h2>
      <p className="text-muted-foreground mb-4">
        Рассчитайте приблизительную стоимость вашей партии. Минимальный заказ — 100
        изделий. Скидка 5% действует от 200 ед., 10% — от 500 ед., 20% — от 1000 ед.
      </p>
      <label htmlFor="qty" className="block mb-2 font-medium">
        Количество изделий
      </label>
      <input
        id="qty"
        type="number"
        min={100}
        step={1}
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="w-full mb-4 rounded-md border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <div className="space-y-2 text-sm text-foreground">
        <p>Цена за единицу: {finalPricePerItem.toFixed(2)} руб.</p>
        <p>Итого за заказ: {totalCost.toFixed(2)} руб.</p>
        {discount < 1 && (
          <p className="text-accent">
            Применена скидка {((1 - discount) * 100).toFixed(0)}%
          </p>
        )}
      </div>
    </div>
  );
}