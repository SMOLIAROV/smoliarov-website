import type { MDXComponents } from "mdx/types"
import type { ReactNode } from "react"

interface RequisitesProps {
  name: string
  unp: string
  country: string
  email: string
  site: string
}

interface RequisitesRow {
  label: string
  value: ReactNode
}

export function Requisites({
  name,
  unp,
  country,
  email,
  site,
}: RequisitesProps) {
  const rows: RequisitesRow[] = [
    { label: "ФИО", value: name },
    { label: "УНП", value: unp },
    { label: "Страна", value: country },
    {
      label: "Email",
      value: (
        <a
          href={`mailto:${email}`}
          className="underline underline-offset-2 hover:text-foreground"
        >
          {email}
        </a>
      ),
    },
    {
      label: "Сайт",
      value: (
        <a
          href={site}
          className="underline underline-offset-2 hover:text-foreground"
        >
          {site}
        </a>
      ),
    },
  ]

  return (
    <div className="not-prose my-8 rounded-xl border border-foreground/10 bg-foreground/[0.03] p-5 md:p-6">
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
        Реквизиты
      </p>
      <dl className="space-y-1.5 text-sm">
        {rows.map((row) => (
          <div key={row.label} className="flex gap-2">
            <dt className="text-muted-foreground shrink-0 w-20">
              {row.label}:
            </dt>
            <dd className="text-foreground">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export const legalComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="font-display text-xl md:text-2xl font-semibold text-foreground mt-12 mb-4 pb-2 border-b border-foreground/10"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-base md:text-lg font-medium text-foreground mt-6 mb-2"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="text-sm md:text-base leading-relaxed text-foreground/70 mb-4"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="text-foreground font-semibold" {...props} />
  ),
  ul: (props) => (
    <ul
      className="list-disc pl-5 space-y-2 mb-4 text-foreground/70"
      {...props}
    />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  a: (props) => (
    <a
      className="underline underline-offset-2 hover:text-foreground"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-foreground/10" />,
  Requisites,
}
