import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  await prisma.review.deleteMany()

  await prisma.review.createMany({
    data: [
      {
        name: "Анна Ковалёва",
        position: "CEO, TechStart",
        message:
          "Отличная работа! Сайт был готов точно в срок, все правки учтены. Рекомендую!",
        avatar: "/images/reviews/anna.jpeg",
        date: new Date("2026-06-15"),
      },
      {
        name: "Максим Петров",
        position: "Основатель, StartupHub",
        message:
          "Очень доволен результатом. Профессиональный подход, понятные сроки и отличная коммуникация.",
        avatar: "/images/reviews/maxim.jpeg",
        date: new Date("2026-06-20"),
      },
      {
        name: "Елена Смирнова",
        position: "Маркетолог, RetailPro",
        message:
          "Сделали именно то, что нужно. Сайт получился современным и удобным. Спасибо!",
        avatar: "/images/reviews/elena.jpeg",
        date: new Date("2026-07-01"),
      },
    ],
  })

  console.log("Seed выполнен успешно! Добавлено 3 отзыва.")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
