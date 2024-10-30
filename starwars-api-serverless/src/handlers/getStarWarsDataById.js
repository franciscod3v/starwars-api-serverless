const axios = require("axios");
const { mapSwapiDataToModel } = require("../utils/swapiMapper.js");

const fetchSwapiData = async (id) => {
  const response = await axios.get(`https://swapi.py4e.com/api/people/${id}/`);
  return response.data;
};

const handler = async (event) => {
  const id = event.pathParameters.id;

  try {
    const swapiData = await fetchSwapiData(id);
    const mappedData = mapSwapiDataToModel(swapiData);
    return {
      statusCode: 200,
      body: JSON.stringify(mappedData),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "No se pudo obtener los datos" }),
    };
  }
};

module.exports = { handler };
