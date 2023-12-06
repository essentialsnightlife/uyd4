import {
  DeleteItemCommand,
  DeleteItemCommandInput,
  DynamoDBClient,
  PutItemCommand,
  PutItemCommandInput,
  ScanCommand,
  ScanCommandInput,
} from "@aws-sdk/client-dynamodb";

import { AWS_REGION } from "../../../src/constants";

const dbClient = new DynamoDBClient({ region: AWS_REGION });
const TableName = process.env.TABLE_NAME;

export async function save(event: any) {
  console.log("Object.keys(event) ", Object.keys(event));

  let id, userId, query, response, date, context;

  // Check if the event is an SNS message
  if (event.Records && event.Records[0].Sns && event.Records[0].Sns.Message) {
    const snsMessage = JSON.parse(event.Records[0].Sns.Message);

    id = snsMessage.id;
    userId = snsMessage.userId;
    query = snsMessage.query;
    response = snsMessage.response;
    date = snsMessage.date;
    context = snsMessage.context;
  } else {
    // Assume event.body contains the required properties
    ({ id, userId, query, response, date, context } = event.body);
  }

  const newAnalysedDream = {
    id: { S: id },
    userId: { S: userId },
    query: { S: query },
    response: { S: response },
    date: { S: date },
    context: { S: context },
  };
  console.log("newAnalysedDream: ", newAnalysedDream);

  //example new analysed dream
  // {
  //   id: 'UYD1630546800000',
  //   userId: '612f1b0a1c9d5b006a0f1b9e',
  //   query: 'I dreamt was eating the sandwich and then I woke up.',
  //   context: 'I was in the kitchen'
  //   response: 'You are a very creative person.'
  //   date: '2021-09-01T00:00:00.000Z'
  // }

  const params: PutItemCommandInput = {
    TableName: TableName,
    Item: newAnalysedDream,
  };

  try {
    await dbClient.send(new PutItemCommand(params));

    return { statusCode: 200, newAnalysedDream };
  } catch (err: any) {
    console.log("Error: ", err);

    return JSON.stringify({
      body: { error: err.message },
      input: event,
    });
  }
}

const formatterDDBScan = (data: any) => {
  const formattedData: { [key: string]: any } = {};
  Object.keys(data).forEach((key: any) => {
    const value = data[key].S;
    formattedData[key] = value;
  });
  return formattedData;
};

export async function getUserAnalysedDreams(event: any) {
  const userId = event.pathParameters?.userId || event.body?.userId || "";

  const params: ScanCommandInput = {
    TableName: TableName,
    FilterExpression: "userId = :userId AND id <> :id",
    ExpressionAttributeValues: {
      ":userId": { S: userId },
      ":id": { S: "0" },
    },
  };

  try {
    const results = await dbClient.send(new ScanCommand(params));
    console.log(results);
    const formattedResultItems = results.Items?.map((item) => formatterDDBScan(item));
    console.log(formattedResultItems);

    return JSON.stringify({
      statusCode: 200,
      userId,
      responses: formattedResultItems,
    });
  } catch (err: any) {
    console.log("Error: ", err);

    return {
      body: { error: err.message },
      input: event,
    };
  }
}

export async function list() {
  try {
    const data = await dbClient.send(new ScanCommand({ TableName: TableName }));
    data.Items?.forEach(function (element) {
      console.log(
        "id: " +
          element.id.S +
          " | userId: " +
          element.userId.S +
          " | query: " +
          element.query.S +
          " | response: " +
          element.response.S
      );
    });

    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (err: any) {
    console.log("Error: ", err);
    return {
      body: { error: err.message },
    };
  }
}
export async function del(event: any) {
  const idToBeDeleted = event.pathParameters.id;
  const params: DeleteItemCommandInput = {
    TableName: TableName,
    Key: { id: { S: idToBeDeleted } },
  };

  try {
    const results = await dbClient.send(new DeleteItemCommand(params));

    return {
      statusCode: 200,
      deleted: idToBeDeleted,
      body: JSON.stringify(results),
    };
  } catch (err: any) {
    console.log("Error: ", err);
    return {
      error: err.message,
    };
  }
}
