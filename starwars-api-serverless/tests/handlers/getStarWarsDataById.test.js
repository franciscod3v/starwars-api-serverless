const { handler } = require("../../src/handlers/getStarWarsDataById.js");
const axios = require("axios");
const { mapSwapiDataToModel } = require("../../src/utils/swapiMapper.js");

jest.mock("axios");
jest.mock("../../src/utils/swapiMapper.js");

describe("getStarWarsDataById", () => {
  it("Devuelve datos mapeados desde SWAPI", async () => {
    const mockSwapiData = {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
      homeworld: "https://swapi.py4e.com/api/planets/1/",
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: "2014-12-09T13:50:51.644000Z",
      edited: "2014-12-20T21:17:56.891000Z",
      url: "https://swapi.py4e.com/api/people/1/",
    };

    const mockMappedData = {
      id: "1",
      nombre: "Luke Skywalker",
      altura: "172",
      masa: "77",
      color_cabello: "blond",
      color_piel: "fair",
      color_ojos: "blue",
      año_nacimiento: "19BBY",
      género: "male",
      planeta_natal: "https://swapi.py4e.com/api/planets/1/",
      peliculas: [],
      especies: [],
      vehiculos: [],
      naves_estelares: [],
      creado: "2014-12-09T13:50:51.644000Z",
      editado: "2014-12-20T21:17:56.891000Z",
      url: "https://swapi.py4e.com/api/people/1/",
    };

    axios.get.mockResolvedValue({ data: mockSwapiData });
    mapSwapiDataToModel.mockReturnValue(mockMappedData);

    const event = { pathParameters: { id: "1" } };
    const response = await handler(event);

    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body)).toEqual(mockMappedData);
  });

  it("Devuelve un error si falla la solicitud SWAPI", async () => {
    axios.get.mockRejectedValue(new Error("SWAPI error"));

    const event = { pathParameters: { id: "1" } };
    const response = await handler(event);

    expect(response.statusCode).toBe(500);
    expect(JSON.parse(response.body)).toEqual({
      error: "No se pudo obtener los datos",
    });
  });
});
