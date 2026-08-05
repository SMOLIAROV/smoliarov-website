import { Zap, Shield } from "lucide-react"

export function HeroImageBadge() {
  return (
    <>
      <div className="absolute -bottom-4 -left-4 z-20 flex items-center gap-3 px-4 py-3 bg-black border border-foreground/20 backdrop-blur-md rounded-2xl">
        <div className="w-9 h-9 flex items-center justify-center bg-white/[0.06] border border-foreground/20 rounded-xl">
          <Zap className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-[10px] text-foreground/40 font-mono uppercase tracking-wider">
            {/* Добавить в словарь */}
            Скорость
          </p>
          <p className="text-sm font-display text-white font-medium">
            {/* Добавить в словарь */}
            Открывается мгновенно
          </p>
        </div>
      </div>

      <div className="absolute -top-4 -right-4 z-20 flex items-center gap-3 px-4 py-3 bg-black border border-foreground/20 backdrop-blur-md rounded-2xl">
        <div className="w-9 h-9 flex items-center justify-center bg-white/[0.06] border border-foreground/20 rounded-xl">
          <Shield className="w-4 h-4 text-white" />
        </div>

        <div>
          <p className="text-[10px] text-foreground/40 font-mono uppercase tracking-wider">
            {/* Добавить в словарь */}
            Безопасность
          </p>
          <p className="text-sm font-display text-white font-medium">
            {/* Добавить в словарь */}
            Данные защищены
          </p>
        </div>
      </div>
    </>
  )
}
