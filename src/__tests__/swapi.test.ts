import { getInformationByType, getInformationByTypeAndId } from "../functions/swapi";
import { eventMock, context, callback } from "./mocks";

describe('getInformationByType function', () => {
  // ---- PEOPLE ----
  test('Obtiene la información por tipo people correctamente', async () => {
    eventMock.pathParameters = {type: 'people'}
    const data: any = await getInformationByType(eventMock, context, callback);
    const body = JSON.parse(data.body)
    expect(data).toBeDefined()
    expect(data.statusCode).toBe(200)
    expect(body.results.length).toBeGreaterThan(0);
    expect(body.count).toEqual(87);
    expect(body.results[0].nombre).toBe('Luke Skywalker')
  });
  //FILMS
  test('Obtiene la información por tipo films correctamente', async () => {
    eventMock.pathParameters = {type: 'films'}
    const data: any = await getInformationByType(eventMock, context, callback);
    const body = JSON.parse(data.body)
    expect(data).toBeDefined()
    expect(data.statusCode).toBe(200)
    expect(body.results.length).toBeGreaterThan(0);
    expect(body.count).toEqual(7);
    expect(body.results[0].titulo).toBe('A New Hope')
  });
  test('Obtiene la información por tipo starships correctamente', async () => {
    eventMock.pathParameters = {type: 'starships'}
    const data: any = await getInformationByType(eventMock, context, callback);
    const body = JSON.parse(data.body)
    expect(data).toBeDefined()
    expect(data.statusCode).toBe(200)
    expect(body.results.length).toBeGreaterThan(0);
    expect(body.count).toEqual(37);
    expect(body.results[0].nombre).toBe('CR90 corvette')
  });
  test('Obtiene la información por tipo vehicles correctamente', async () => {
    eventMock.pathParameters = {type: 'vehicles'}
    const data: any = await getInformationByType(eventMock, context, callback);
    const body = JSON.parse(data.body)
    expect(data).toBeDefined()
    expect(data.statusCode).toBe(200)
    expect(body.results.length).toBeGreaterThan(0);
    expect(body.count).toEqual(39);
    expect(body.results[0].nombre).toBe('Sand Crawler')
  });
  test('Obtiene la información por tipo species correctamente', async () => {
    eventMock.pathParameters = {type: 'species'}
    const data: any = await getInformationByType(eventMock, context, callback);
    const body = JSON.parse(data.body)
    expect(data).toBeDefined()
    expect(data.statusCode).toBe(200)
    expect(body.results.length).toBeGreaterThan(0);
    expect(body.count).toEqual(37);
    expect(body.results[0].nombre).toBe('Human')
  });
  test('Obtiene la información por tipo planets correctamente', async () => {
    eventMock.pathParameters = {type: 'planets'}
    const data: any = await getInformationByType(eventMock, context, callback);
    const body = JSON.parse(data.body)
    expect(data).toBeDefined()
    expect(data.statusCode).toBe(200)
    expect(body.results.length).toBeGreaterThan(0);
    expect(body.count).toEqual(61);
    expect(body.results[0].nombre).toBe('Tatooine')
  });
  test('Obtiene un error si no se envia un tipo correcto', async () => {
    eventMock.pathParameters = {type: 'test'}
    const data: any = await getInformationByType(eventMock, context, callback);
    const body = JSON.parse(data.body)
    expect(data).toBeDefined()
    expect(data.statusCode).toBe(400)
    expect(body.message).toBe('Not enough params');
  });
});


describe('getInformationByTypeAndId function', () => {
  // GET PEOPLE BY ID
  test('Obtiene la información por tipo people y id correctamente', async () => {
    eventMock.pathParameters = {type: 'people', id: '1'}
    const data: any = await getInformationByTypeAndId(eventMock, context, callback);
    const body = JSON.parse(data.body)
    expect(data).toBeDefined()
    expect(data.statusCode).toBe(200)
    expect(body.nombre).toBe('Luke Skywalker')
  });

  test('Obtiene la información por tipo people pero el id no existe', async () => {
    eventMock.pathParameters = {type: 'people', id: '12312312313'}
    const data: any = await getInformationByTypeAndId(eventMock, context, callback);
    const body = JSON.parse(data.body)
    expect(data).toBeDefined()
    expect(data.statusCode).toBe(500)
    expect(body.message).toBe('Error getting info')
  });
})