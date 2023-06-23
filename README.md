# README.md

Este repositorio contiene un servidor Express.js que utiliza varios middlewares y rutas para manejar solicitudes HTTP. El servidor incluye funcionalidades como informar sobre las solicitudes y verificar la conectividad con la base de datos. A continuación, encontrarás información sobre cómo configurar y ejecutar el servidor.

## Prerrequisitos

Antes de ejecutar el servidor, asegúrate de tener instalado lo siguiente:

- Node.js
- npm (Node Package Manager)

## Instalación

1. Clona este repositorio en tu máquina local o descarga el código fuente.
2. Abre una terminal o símbolo del sistema y navega hasta el directorio del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias requeridas:

```
npm install
```

## Configuración

1. Crea un archivo `.env` en el directorio raíz del proyecto y establecer los valores de las variables de entorno según tu configuración local. Esto es solo un ejemplo:

```markdown
## Configuración localhost
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=futscript
JWT_SECRET=desafio_latam
PORT=3000
```

## Uso

Para iniciar el servidor, ejecuta el siguiente comando en la terminal:

```
npm run dev
```

## Rutas

El servidor incluye las siguientes rutas:

- `/`: Muestra un mensaje de bienvenida.
- `*` (todas las demás rutas): Devuelve un objeto JSON con un mensaje de error 404 que indica que la ruta solicitada no existe.

## Middlewares

El servidor utiliza los siguientes middlewares:

- `cors`: Permite el intercambio de recursos de origen cruzado (CORS) para permitir solicitudes desde diferentes orígenes.
- `express.json()`: Analiza las solicitudes entrantes con cargas útiles en formato JSON.
- `reportMiddleware`: Middleware que genera un informe de solicitudes.
- `databaseMiddleware`: Middleware que verifica la conectividad con la base de datos.


## Pruebas

El repositorio incluye pruebas automatizadas para el servidor. Estas pruebas se encuentran en el archivo `src/test/server.spec.js`. Para ejecutar las pruebas, sigue los pasos a continuación:

* Ejecuta el siguiente comando para ejecutar las pruebas:

```
npm run test
```

Las pruebas evaluarán diferentes aspectos del servidor, como la conexión a la raíz, el inicio de sesión de usuarios registrados, la obtención de objetos de jugadores por ID de equipo, la obtención de objetos de equipos, el registro de nuevos usuarios, el registro de nuevos equipos y el registro de nuevos jugadores a un equipo. También se incluye una prueba para una ruta no definida.

A continuación se muestra el listado de pruebas incluidas en el archivo `src/test/server.spec.js`:

```markdown
## Pruebas

El repositorio incluye pruebas automatizadas para el servidor. Estas pruebas se encuentran en el archivo `src/test/server.spec.js`. A continuación se muestra el listado de pruebas:

- **Prueba de conexión a la raíz**
  - Verifica que se pueda acceder correctamente a la raíz del servidor.
  - Método: GET
  - Ruta: `/`
  - Resultados esperados:
    - Código de estado: 200
    - Respuesta: "Web inicial"

- **Prueba de login de usuario registrado y envío de token que existe**
  - Verifica el inicio de sesión de un usuario registrado y la recepción de un token válido.
  - Método: POST
  - Ruta: `/login`
  - Cuerpo de la solicitud: `{ email: 'admin', password: '1234' }`
  - Resultados esperados:
    - Código de estado: 200
    - Respuesta: Objeto JSON que contiene la propiedad "token" (cadena de texto)

- **Prueba de obtención de un objeto de jugadores por ID de equipo**
  - Verifica la obtención de un objeto de jugadores por el ID del equipo.
  - Método: GET
  - Ruta: `/equipos/:id/jugadores`
  - Parámetros de la ruta: `id` (ID del equipo)
  - Cabecera de autorización: Token de acceso válido
  - Resultados esperados:
    - Código de estado: 200
    - Respuesta: Objeto JSON que representa los jugadores del equipo

- **Prueba de obtención de un objeto de equipos**
  - Verifica la obtención de un objeto de equipos.
  - Método: GET
  - Ruta: `/equipos`
  - Cabecera de autorización: Token de acceso válido
  - Resultados esperados:
    - Código de estado: 200
    - Respuesta: Objeto JSON que representa los equipos

- **Prueba de registro de nuevo usuario y revisión de mensaje de usuario creado con éxito**
  - Verifica el registro de un nuevo usuario y la recepción de un mensaje de éxito.
  - Método: POST
  - Ruta: `/registro`
  - Cuerpo de la solicitud: Objeto JSON con datos de usuario
  - Cabecera de autorización: Token de acceso válido
  - Resultados esperados:
    - Código de estado: 201
    - Respuesta: Objeto JSON que contiene el mensaje "Usuario creado con éxito"

- **Prueba de registro de nuevo equipo y revisión de mensaje de equipo ingresado con éxito**
  - Verifica el registro de un nuevo equipo y la recepción de un mensaje de éxito.
  - Método: POST
  - Ruta: `/equipo`
  - Cuerpo de la solicitud: Objeto JSON con datos de equipo
  - Cabecera de autorización: Token de acceso válido
  - Resultados esperados:
    - Código de estado: 201
    - Respuesta: Objeto JSON que contiene el mensaje "Equipo ingresado con éxito"

- **Prueba de registro de nuevo jugador a equipo y revisión de mensaje de jugador ingresado con éxito**
  - Verifica el registro de un nuevo jugador a un equipo y la recepción de un mensaje de éxito.
  - Método: POST
  - Ruta: `/equipos/:id/jugadores
  - Parámetros de la ruta: `id` (ID del equipo)
  - Cuerpo de la solicitud: Objeto JSON con datos de jugador
  - Cabecera de autorización: Token de acceso válido
  - Resultados esperados:
    - Código de estado: 201
    - Respuesta: Objeto JSON que contiene el mensaje "Jugador ingresado con éxito"

- **Prueba de ruta no definida**
  - Verifica el manejo de una solicitud a una ruta no definida.
  - Método: GET
  - Ruta: `/ruta-no-existente`
  - Resultados esperados:
    - Código de estado: 404
    - Respuesta: Objeto JSON que contiene el mensaje "La ruta que intenta consultar no existe"

```
```
