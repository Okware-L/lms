const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Comp science" },
        { name: "Health and wellness" },
        { name: "Fitness" },
        { name: "Accounting" },
        { name: "Engineering" },
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
