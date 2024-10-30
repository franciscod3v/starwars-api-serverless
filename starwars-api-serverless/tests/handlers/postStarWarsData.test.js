const { handler } = require("../../src/handlers/postStarWarsData.js");
const { saveStarWarsData } = require("../../src/models/starWarsModel.js");

jest.mock("../../src/models/starWarsModel.js");

describe("postStarWarsData", () => {
  it("Guardar y devolver mensaje exitoso", async () => {
    const mockEvent = {
      body: JSON.stringify({ id: "1", nombre: "Luke Skywalker" }),
    };

    saveStarWarsData.mockResolvedValue();

    const response = await handler(mockEvent);

    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body)).toEqual({
      message: "Data guardada exitosamente",
    });
  });

  it("Devuelve un error si el input es inválido", async () => {
    const mockEvent = {
      body: "invalid JSON",
    };

    const response = await handler(mockEvent);

    expect(response.statusCode).toBe(400);
    expect(JSON.parse(response.body)).toEqual({
      error: "Input inválido",
    });
  });

  it("Devuelve error si falla el saveStarWarsData", async () => {
    const mockEvent = {
      body: JSON.stringify({ id: "1", nombre: "Luke Skywalker" }),
    };

    saveStarWarsData.mockRejectedValue(new Error("DynamoDB error"));

    const response = await handler(mockEvent);

    expect(response.statusCode).toBe(500);
    expect(JSON.parse(response.body)).toEqual({
      error: "No pudimos obtener los datos",
    });
  });
});
