import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils/cn"
import { ButtonProps } from "./types"

export function BackLink({ href, title, className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
        className
      )}
    >
      <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
      <span>{title}</span>
    </Link>
  )
}
