const { saveStarWarsData } = require("../models/starWarsModel.js");

const handler = async (event) => {
  console.log("Event:", event);

  let data;

  try {
    data = JSON.parse(event.body);
    console.log("Parsed Data:", data);
  } catch (error) {
    console.error("JSON Parse Error:", error);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Input inválido" }),
    };
  }

  try {
    await saveStarWarsData(data);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Data guardada exitosamente" }),
    };
  } catch (error) {
    console.error("DynamoDB Save Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "No pudimos obtener los datos" }),
    };
  }
};

module.exports = { handler };
