import { socialLinks } from "@/constants/social/socialLinks"
import { ArrowUpRight } from "lucide-react"

export function FooterSocial() {
  return (
    <div className="flex gap-4 md:gap-5 flex-wrap">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs md:text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1.5 group"
        >
          <link.icon className="w-3.5 h-3.5" />
          {link.name}
          <ArrowUpRight className="w-2.5 h-2.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </a>
      ))}
    </div>
  )
}
