import {v4} from "uuid";
import { APIGatewayProxyHandler } from "aws-lambda"
import AWS from "aws-sdk"
import { Criatura } from "../utils/types";

export const createCriatura: APIGatewayProxyHandler = async (event) => {
    try{
        if(!event?.body){
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Not enough params' })
            };
        }
        const { name, description, powers, height, width } = JSON.parse(event.body)
        if(!name || !description || !powers || !height || !width){
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Not enough params' })
            };
        }
        const db = new AWS.DynamoDB.DocumentClient();
        const id = v4();
        const newCriatura: Criatura = {
            name, 
            description, 
            powers, 
            height, 
            width,
            createdDate: new Date(),
            id
        }

        await db.put({
            TableName: 'Criaturas',
            Item: newCriatura
        }).promise()

        return {
            statusCode: 200,
            body: JSON.stringify(newCriatura)
        }
    }catch(e){
        return {
            statusCode: 500,
            body: JSON.stringify({ message: e })
        };
    }
} 

export const getCriaturas: APIGatewayProxyHandler = async (event) => {
    try{
        const db = new AWS.DynamoDB.DocumentClient();
        const result = await db.scan({
            TableName: 'Criaturas',
        }).promise()

        return {
            statusCode: 200,
            body: JSON.stringify(result.Items)
        }
    }catch(e){
        return {
            statusCode: 500,
            body: JSON.stringify({ message: e })
        };
    }
}

export const getCriaturaById: APIGatewayProxyHandler = async (event) => {
    const { pathParameters } = event;
    const id: string = pathParameters?.id ?? '';
    if (!id) {
        return { 
            statusCode: 400,
            body: JSON.stringify({ message: 'Not enough params' }),
        };
    }
    try{
        const db = new AWS.DynamoDB.DocumentClient();
        const result = await db.get({
            TableName: 'Criaturas',
            Key: {
                id
            }
        }).promise()

        return {
            statusCode: 200,
            body: JSON.stringify(result.Item)
        }
    }catch(e){
        return {
            statusCode: 500,
            body: JSON.stringify({ message: e })
        };
    }
}