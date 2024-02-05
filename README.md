# Servicio Softtek-Sequiroz

Este servicio proporciona una API RESTful para interactuar con datos de criaturas y la integración con la API SWAPI.

## Instalación

1. Clonar este repositorio.
2. Instalar las dependencias con `npm install`.

## Despliegue del Servicio

Para desplegar el servicio en AWS:

1. Configura tus credenciales de AWS.
2. Ejecuta `serverless deploy` en la raíz del proyecto.
3. Al ejecutar el proyecto se necesita cambiar el Resource de iamRoleStatements en serverless.yml con el Amazon Resource Name (ARN) que se creará en su cuenta para la tabla creada.

## Endpoints API

### Obtener Información por Tipo
- Método: GET
- Ruta: /swapi/{type}
- Descripción: Retorna información sobre un tipo específico.
- Tipos posibles: films, people, startships, vehicles, species, planets (SWAPI)

### Obtener Información por Tipo y ID
- Método: GET
- Ruta: /swapi/{type}/{id}
- Descripción: Retorna información detallada sobre un elemento específico del tipo indicado.
- Tipos posibles: films, people, startships, vehicles, species, planets (SWAPI)

## Endpoints 

### Crear Criatura
- Método: POST
- Ruta: /sqServices/criatura
- Descripción: Crea una nueva criatura en la base de datos.

### Obtener Criatura
- Método: GET
- Ruta: /sqServices/criatura/{id}
- Descripción: Retorna información sobre un elemento específico.

### Obtener Criaturas
- Método: POST
- Ruta: /sqServices/criaturas
- Descripción: Retorna información de todas las criaturas creadas.


## URL desplegadas en AWS

## Tecnologias usadas
### Node
- Serverless
- Jest
### AWS
- DynamoDb
- Lambda

## Endpoints:
1. GET - https://hkr0zjxho8.execute-api.us-east-1.amazonaws.com/swapi/{type}
2. GET - https://hkr0zjxho8.execute-api.us-east-1.amazonaws.com/swapi/{type}/{id}
3. POST - https://hkr0zjxho8.execute-api.us-east-1.amazonaws.com/sqServices/criatura
4. GET - https://hkr0zjxho8.execute-api.us-east-1.amazonaws.com/sqlServices/criaturas
5. GET - https://hkr0zjxho8.execute-api.us-east-1.amazonaws.com/sqlServices/criatura/{id}

## Test
Para ejecutar los test:
1. Ejecuta `npx jest`
2. Ejecutará los test en la carpeta src/__tests__