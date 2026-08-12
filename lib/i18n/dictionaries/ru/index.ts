import metadata from "./metadata.json"
import common from "./common.json"
import navigation from "./navigation.json"
import hero from "./hero.json"
import solutions from "./solutions.json"
import cta from "./cta.json"
import workflow from "./workflow.json"
import reviews from "./reviews.json"
import contact_form from "./contact_form.json"
import faq from "./faq.json"
import footer from "./footer.json"
import cookie_banner from "./cookie_banner.json"
import promo from "./promo.json"
import solution_packages from "./solution_packages.json"
import not_found from "./not_found.json"

const dictionary = {
  metadata,
  common,
  navigation,
  hero,
  solutions,
  cta,
  workflow,
  reviews,
  contact_form,
  faq,
  footer,
  cookie_banner,
  promo,
  solution_packages,
  not_found,
} as const

export default dictionary
