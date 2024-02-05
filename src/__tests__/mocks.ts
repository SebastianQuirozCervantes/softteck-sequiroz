
import { APIGatewayProxyEvent, Context } from "aws-lambda"
export const eventMock: APIGatewayProxyEvent = {
    httpMethod: 'GET',
    path: '/swapi/people',
    queryStringParameters: {},
    body: null,
    headers: {},
    isBase64Encoded: false,
    multiValueQueryStringParameters: null,
    pathParameters: {},
    requestContext: {
        authorizer: null,
        accountId: '123456789012',
        resourceId: '123456',
        stage: 'test',
        requestId: 'c6af9ac6-7b61-11e6-9a41-93e8deadbeef',
        requestTime: '09/Apr/2015:12:34:56 +0000',
        requestTimeEpoch: 1428582896000,
        identity: {
            cognitoIdentityPoolId: null,
            accountId: null,
            cognitoIdentityId: null,
            caller: null,
            accessKey: null,
            sourceIp: '127.0.0.1',
            cognitoAuthenticationType: null,
            cognitoAuthenticationProvider: null,
            userArn: null,
            userAgent: 'Custom User Agent String',
            user: null,
            apiKey: '', 
            apiKeyId: '', 
            clientCert: null, 
            principalOrgId: ''
        },
        path: '/path/to/resource',
        resourcePath: '/{proxy+}',
        httpMethod: 'GET',
        apiId: '1234567890',
        protocol: 'HTTP/1.1'
    },
    stageVariables: {},
    multiValueHeaders: {},
    resource: ''
};
export const context: Context = {
    awsRequestId: '123456',
    callbackWaitsForEmptyEventLoop: true,
    functionName: 'getInformationByType',
    functionVersion: '1',
    invokedFunctionArn: 'arn:aws:lambda:us-east-1:123456789012:function:getInformationByType',
    logGroupName: 'log-group',
    logStreamName: 'log-stream',
    memoryLimitInMB: '128',
    getRemainingTimeInMillis: () => 5000,
    done: () => {},
    fail: () => {},
    succeed: () => {}
};

export const callback = jest.fn((error, response) => {
    expect(error).toBeNull(); // Verifica que no haya errores
    expect(response.statusCode).toBe(200); // Verifica el código de estado
    expect(response.body).toBe(JSON.stringify({ message: 'Hello from Lambda!' })); // Verifica el cuerpo de la respuesta
});