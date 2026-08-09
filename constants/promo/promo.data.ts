import { Dictionary } from "@/lib/i18n/dictionaries"
import { LEGAL_SLUGS } from "../legal/legal"
import { SOLUTION_TYPES } from "../solution/solution.data"
import PromoImage from "@/public/images/promo.webp"

export type Promotion = {
  solution_type: string
  slug: {}
  date_start: string
  date_expired: string
  content: {
    title: {
      first: string
      second: string
    }
    order: string
    remark: string
    image: string
    notice: {
      title: string
      description: string
    }
  }
}

type PromoDict = {
  promo: {
    items: {
      websites: {
        title: {
          first: string
          second: string
        }
        order: string
        remark: string
        notice: {
          title: string
          description: string
        }
      }
    }
  }
}

export const PROMOS = (dict: PromoDict): Record<string, Promotion> => ({
  free_domain_and_hosting: {
    solution_type: SOLUTION_TYPES.WEBSITE,
    slug: LEGAL_SLUGS.PROMO__FREE_DOMAIN_AND_HOSTING,
    date_start: "2026-05-31",
    date_expired: "2026-08-31",
    content: {
      title: {
        first: dict.promo.items.websites.title.first,
        second: dict.promo.items.websites.title.second,
      },
      order: dict.promo.items.websites.order,
      remark: dict.promo.items.websites.remark,
      image: PromoImage.src,
      notice: {
        title: dict.promo.items.websites.notice.title,
        description: dict.promo.items.websites.notice.description,
      },
    },
  },
})

export function getPromo({
  dict,
  solution_type,
}: {
  dict: Dictionary
  solution_type: string
}) {
  const promos = Object.values(PROMOS(dict))

  return promos.find((promo) => promo.solution_type === solution_type) ?? null
}
