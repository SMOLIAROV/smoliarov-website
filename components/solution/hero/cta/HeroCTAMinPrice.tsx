export function HeroCTAMinPrice({
  price,
  currency,
}: {
  price: number
  currency: string
}) {
  return (
    <div>
      <p className="text-xs text-foreground/40 uppercase tracking-widest font-mono mb-1">
        {/* Добавить в словарь */}
        Стоимость
      </p>
      <p className="text-2xl font-display font-medium text-white">
        {/* Добавить в словарь */}
        от {price}
        <span className="text-foreground/50 text-lg"> {currency}</span>
      </p>
    </div>
  )
}
