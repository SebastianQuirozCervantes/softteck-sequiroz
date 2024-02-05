import { createCriatura, getCriaturas, getCriaturaById } from "../functions/sqServices";
import { eventMock, context, callback } from "./mocks";

describe('createCriatura function', () => {
  // ---- PEOPLE ----
  // GET PEOPLE
  // AQUI DARÁ ERROR 500 POR LA CONEXION CON LA BBDD
  test('Falla conexion BBDD', async () => {
    eventMock.body = JSON.stringify(
      {
        "name": "Test",
        "width":1000,
        "height":3,
        "powers":"Los Dewbacks tienen una piel gruesa que los hace resistentes a las temperaturas extremas y pueden sobrevivir en condiciones áridas.",
        "description":"Los Dewbacks son criaturas reptilianas grandes y pesadas que también habitan en Tatooine. Son usados como monturas por las fuerzas imperiales y los buscadores en el desierto.",
      }
    )
    const data: any = await createCriatura(eventMock, context, callback);
    const body = JSON.parse(data.body)
    expect(data).toBeDefined()
    expect(data.statusCode).toBe(500)
    expect(body.message.message).toBe('Missing region in config')
  });
})