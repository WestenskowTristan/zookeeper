const fs = require("fs");
const {
  filterByQuery,
  findById,
  createNewAnimal,
  validateAnimal,
} = require("../lib/animals");

const { animals } = require("../data/animals.json");

Test("creates an animal object", () => {
  const animal = createNewAnimal(
    { name: "Darlene", id: "jhgdja3ng2" },
    animals
  );

  expect(animals.name).toBe("Darlene");
  expect(animals.id).toBe("jhgdja3ng2");
});
