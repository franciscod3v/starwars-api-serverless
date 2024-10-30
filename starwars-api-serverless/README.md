# Reto técnico: Usando Serverless para implementar Lambda AWS y DynamoDB

API desplegada mediante el Framework Serverless para gestionar datos de Star Wars utilizando AWS Lambda y DynamoDB.

## Instalación:

1. Clonar el repositorio
2. Mediante el comando npm install, se instalarán todas las dependencias del archivo package.json
3. Configurar tu CLI de AWS, utilizando tu Id de acceso y tu clave de acceso secreta, puedes hacerlo mediante el comando aws configure.
4. Ejecutar los test, mediante el comando npm run test, se ejecutará las pruebas unitarias correspondientes a 3 lambdas.
5. Opcional (Puede probar el post localmente con el comando serverless invoke local --function postStarWarsData --path tests/event.json)
6. Desplegar el proyecto, si tu usuario de AWS tiene los permisos para desplegar, podrás hacerlo mediante el comando serverless deploy.

## Tecnologías usadas

- Node.js v20
- Aws sdk v3 para Javascript
- Serverless Framework v4
- Jest v3
- Common JS

## Uso (Postman):

1. Get por Id (Consumo de Swapi mediante Lambda): https://xjxwk12g6c.execute-api.us-east-1.amazonaws.com/dev/starwarsapi/{id}
2. Get All: https://xjxwk12g6c.execute-api.us-east-1.amazonaws.com/dev/starwarsapi/all
3. Post: https://xjxwk12g6c.execute-api.us-east-1.amazonaws.com/dev/starwarsapi

Para este caso puedes usar este body:

{
"id": "5",
"nombre": "Leia Organa",
"altura": "150",
"masa": "49",
"color_cabello": "brown",
"color_piel": "light",
"color_ojos": "brown",
"año_nacimiento": "19BBY",
"género": "female",
"planeta_natal": "https://swapi.py4e.com/api/planets/2/",
"peliculas": [
"https://swapi.py4e.com/api/films/1/",
"https://swapi.py4e.com/api/films/2/",
"https://swapi.py4e.com/api/films/3/",
"https://swapi.py4e.com/api/films/6/",
"https://swapi.py4e.com/api/films/7/"
],
"especies": [
"https://swapi.py4e.com/api/species/1/"
],
"vehiculos": [
"https://swapi.py4e.com/api/vehicles/30/"
],
"naves_estelares": [],
"creado": "2014-12-10T15:20:09.791000Z",
"editado": "2014-12-20T21:17:50.315000Z",
"url": "https://swapi.py4e.com/api/people/5/"
}

## Detalle de serveless.yml:

1. Inicialmente, se declara el nombre del servicio, la versión de serverless, el proveedor de nube, el entorno de ejecución y la región de aws.
2. Luego, se tienen que definir las politicas de IAM que tendrán las lambdas para que puedan interactuar con DynamoDB y no tengas un error.
3. Posteriormente, se definen las funciones Lambdas y sus triggers, en este caso como es una API será por el protocolo HTTP y Apigateway
4. Finalmente, se define el recurso adicional DynamoDB
