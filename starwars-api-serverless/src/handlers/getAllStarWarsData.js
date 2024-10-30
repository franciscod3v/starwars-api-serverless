const { getAllStarWarsData } = require("../models/starWarsModel.js");

const handler = async () => {
  try {
    const data = await getAllStarWarsData();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "No se pudo obtener los datos al ejecutar getAll",
      }),
    };
  }
};

module.exports = { handler };
