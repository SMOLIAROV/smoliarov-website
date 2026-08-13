import Link from "next/link"
import type { MouseEventHandler, ReactNode } from "react"

interface BaseLinkButtonProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export function BaseLinkButton({
  href,
  children,
  className,
  onClick,
}: BaseLinkButtonProps) {
  const linkProps = {
    href,
    className,
    onClick,
  }

  if (href.startsWith("#")) {
    return <a {...linkProps}>{children}</a>
  }

  return <Link {...linkProps}>{children}</Link>
}
