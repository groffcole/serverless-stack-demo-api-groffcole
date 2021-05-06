import handler from "libs/handler-lib";
import dynamoDb from "libs/dynamodb-lib";
import * as uuid from "uuid";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    Item: {
      userId: "123",
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createdAt: Date.now()
    }
  };

  await dynamoDb.put(params);

  return params.Item;
});

// {
//   "statusCode": 200,
//   "body": "{\"userId\":\"123\",\"noteId\":\"c4f11a70-ae64-11eb-b5e4-2d055aae9036\",\"content\":\"hello world\",\"attachment\":\"hello.jpg\",\"createdAt\":1620303338903}"
// }
