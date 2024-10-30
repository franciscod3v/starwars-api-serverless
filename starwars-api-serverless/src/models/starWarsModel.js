const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  ScanCommand,
} = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({ region: "us-east-1" });

const ddbDocClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = "StarWarsTable";

const getStarWarsDataById = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
  };

  const command = new GetCommand(params);

  const result = await ddbDocClient.send(command);

  return result.Item;
};

const saveStarWarsData = async (data) => {
  const params = {
    TableName: TABLE_NAME,
    Item: data,
  };

  const command = new PutCommand(params);

  await ddbDocClient.send(command);
};

const getAllStarWarsData = async () => {
  const params = {
    TableName: TABLE_NAME,
  };

  const command = new ScanCommand(params);
  const result = await ddbDocClient.send(command);
  return result.Items;
};

module.exports = {
  getStarWarsDataById,
  saveStarWarsData,
  getAllStarWarsData,
};
