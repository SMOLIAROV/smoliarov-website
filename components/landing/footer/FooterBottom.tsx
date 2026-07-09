import { useDict } from "@/lib/i18n/hooks/useDict"

export function FooterBottom() {
  const dict = useDict()
  const year = new Date().getFullYear()

  return (
    <div className="py-4 md:py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
      <p className="text-[10px] md:text-xs text-white/30 text-center sm:text-left">
        &copy; {year} {dict.common.name}. {dict.footer.copyright}
      </p>

      <div className="flex items-center gap-3 text-[10px] md:text-xs text-white/30">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          {dict.common.avaliable}
        </span>
      </div>
    </div>
  )
}
