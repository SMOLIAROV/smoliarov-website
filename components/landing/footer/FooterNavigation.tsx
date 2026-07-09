import { getNavLinks } from "@/constants/navigation/getNavLinks"
import { useDict } from "@/lib/i18n/hooks/useDict"

export function FooterNavigation() {
  const dict = useDict()
  const navLinks = getNavLinks(dict)

  return (
    <div>
      <h3 className="text-xs md:text-sm font-medium text-white mb-4">
        {dict.footer.links.title}
      </h3>
      <ul className="space-y-2.5 md:space-y-3">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-xs md:text-sm text-white/40 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
