import axios from "axios";
import { APIGatewayProxyHandler} from "aws-lambda"
import { translate } from "../utils/functions";
import { TypesSwapiService } from "../utils/types";
import { types } from "../utils/constants";

export const getInformationByType: APIGatewayProxyHandler = async (event) => {
    const { pathParameters } = event
    const type = pathParameters?.type ?? '';
    if (!types?.includes(type) ) {
        return { 
            statusCode: 400,
            body: JSON.stringify({ message: 'Not enough params' }),
        };
    }
    try {
        const response = await axios.get(`https://swapi.py4e.com/api/${type}/`);
        const data = response.data;
        data.results = data?.results?.map((e: any) => {
            return translate(e)
        })
        return {
          statusCode: 200,
          body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error getting info' }),
        };
    }
}

export const getInformationByTypeAndId: APIGatewayProxyHandler = async (event) => {
    const { pathParameters } = event;
    const type = pathParameters?.type ?? '';
    const id: string = pathParameters?.id ?? '';
    if (!id || !types?.includes(type) ) {
        return { 
            statusCode: 400,
            body: JSON.stringify({ message: 'Not enough params' }),
        };
    }
    try {
        const response = await axios.get(`https://swapi.py4e.com/api/${type}/${id}/`);
        const data = translate(response?.data);
        return {
          statusCode: 200,
          body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error getting info' }),
        };
    }
}