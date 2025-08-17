"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async (event) => {
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
exports.handler = handler;
const handleNewUser = async (event) => {
    if (!event.body) {
        return {
            statusCode: 400,
            body: JSON.stringify('Invalid request: no body'),
        };
    }
    let user;
    try {
        user = JSON.parse(event.body);
    }
    catch (err) {
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
const handleGetUser = async (event) => {
    const id = event.queryStringParameters?.id;
    if (!id) {
        return {
            statusCode: 400,
            body: JSON.stringify("Missing 'id' query parameter"),
        };
    }
    // Dummy user – normally fetched from a database
    const user = {
        id,
        name: 'John Doe',
        email: 'johndoe@example.com',
    };
    return {
        statusCode: 200,
        body: JSON.stringify(user),
    };
};
