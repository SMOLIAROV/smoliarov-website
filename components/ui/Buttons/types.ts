import React from "react"

export interface ButtonProps {
  href: string
  title: string
  className?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}
