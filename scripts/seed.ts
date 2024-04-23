const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

//connected with /components/categories.tsx
async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Computer science" },
        { name: "Fitness" },
        { name: "Photography" },
        { name: "Accounting" },
        { name: "Engineering" },
        { name: "Filming" },
      ],
    });
    console.log("success");
  } catch (error) {
    console.log("Error seeding database categories", error);
  } finally {
    await database.$disconnect();
  }
}
main();
