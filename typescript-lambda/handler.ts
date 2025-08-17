import {
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
} from 'aws-lambda';

interface User {
  id: string;
  name: string;
  email: string;
}

export const handler = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> => {
  const method = event.requestContext.http.method;
  const path = event.rawPath;

  if (path === '/newUser' && method === 'POST') {
    return handleNewUser(event);
  }

  if (path === '/getUser' && method === 'GET') {
    return handleGetUser(event);
  }

  return {
    statusCode: 404,
    body: JSON.stringify({ message: 'Not Found' }),
  };
};

const handleNewUser = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> => {
  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify('Invalid request: no body'),
    };
  }

  let user: User;
  try {
    user = JSON.parse(event.body);
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify('Invalid JSON'),
    };
  }

  if (!user.id || !user.name || !user.email) {
    return {
      statusCode: 400,
      body: JSON.stringify('Missing required fields'),
    };
  }

  // Here you could store the user using AWS SDK (e.g., DynamoDB)
  console.log('Received user:', user);

  return {
    statusCode: 200,
    body: '',
  };
};

const handleGetUser = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> => {
  const id = event.queryStringParameters?.id;

  if (!id) {
    return {
      statusCode: 400,
      body: JSON.stringify("Missing 'id' query parameter"),
    };
  }

  // Dummy user – normally fetched from a database
  const user: User = {
    id,
    name: 'John Doe',
    email: 'johndoe@example.com',
  };

  return {
    statusCode: 200,
    body: JSON.stringify(user),
  };
};