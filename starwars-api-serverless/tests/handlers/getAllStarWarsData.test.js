const { handler } = require("../../src/handlers/getAllStarWarsData.js");
const { getAllStarWarsData } = require("../../src/models/starWarsModel.js");

jest.mock("../../src/models/starWarsModel.js");

describe("getAllStarWarsData", () => {
  it("Retorno correcto de DynamoDB", async () => {
    const mockData = [
      { id: "1", nombre: "Luke Skywalker" },
      { id: "2", nombre: "C-3PO" },
    ];
    getAllStarWarsData.mockResolvedValue(mockData);

    const response = await handler();

    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body)).toEqual(mockData);
  });

  it("Error al consultar DynamoDB", async () => {
    getAllStarWarsData.mockRejectedValue(new Error("DynamoDB error"));

    const response = await handler();

    expect(response.statusCode).toBe(500);
    expect(JSON.parse(response.body)).toEqual({
      error: "No se pudo obtener los datos al ejecutar getAll",
    });
  });
});
