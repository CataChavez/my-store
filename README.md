## Aplicación React "Emprendimientos Locales"

La app consiste en una plataforma de tiendas, donde cada propietario puede mostrar sus productos e información de contacto, junto con ella, cada propietario puede ingresar a su tablero privado para crear, editar o eliminar productos, los cuales se pueden ver de inmediato en la plataforma pública.

### Para ver el deploy visita:

[https://elated-minsky-7b9f62.netlify.app](https://elated-minsky-7b9f62.netlify.app)

Puedes visitar cualquiera de las 6 tiendas ficticias, creadas solo para la ocasión.
Puedes entrar en "Login" con cualquiera de estos correos ficticios:

- contacto@taller.com
- contacto@manolospizza.com
- contacto@bordadosrosita.com
- contacto@huertilizate.com
- contacto@cactus.com
- contacto@vforvegan.com

**Todos estos correos pueden acceder con la misma contraseña: `abc123`.**
Si se te olvida algunos de los correos ficiticios indicados más arriba, el Login tiene un recordatorio en la casilla para que puedas acceder, no olvides escribir lo que te indica el placeholder.

### ¿Cómo funciona?

Se creo un servidor con la ayuda de [JSON-server](https://github.com/typicode/json-server) para el backend ocupado como módulo, este servidor fue complementado con [JSON Server Auth](https://github.com/jeremyben/json-server-auth) para incluir autentificación de usuarios y rutas de protección contra escrituras sin Login.
Puedes ver el repositorio del backend para desarrollo de este proyecto [aquí](https://github.com/CataChavez/json-server-for-deploy).


La plantilla del JSON-server como modulo, que además trae las indicaciones de como subir a Heroku la puedes encontrar en este [https://github.com/jesperorb/json-server-heroku](https://github.com/jesperorb/json-server-heroku).

### Para correr la app en entorno de desarrollo comienza con los sgts scripts:
```
$ git clone https://github.com/CataChavez/my-store
$ cd ../path/to/the/file
$ npm install
$ npm start
```
`npm install` Instala el package.json en nuestro ordenador.

`npm start` Corre la app modo de desarrollo.
Abre [http://localhost:3000](http://localhost:3000) para verlo en el navegador.
La pagina se recargará cada vez que hagas algún cambio.

#### Opcional: 
Puedes descargar el [backend](https://github.com/CataChavez/json-server-for-deploy) de este proyecto para hacer los cambios necesarios para tu propia app y correr el servidor en local con el script `node index.js` este script disponibilizará el servidor en el puerto 4000.
Importante: debes cambiar las rutas de consulta de este repositorio a http://localhost:4000/'ruta_segun_mi_proyecto'. 
Encontrarás más información de como cambiar la "base de datos" en repositorio mencionado.

Cuando hayas finalizado de modificar, puedes correr `npm run build`, el cual creará un archivo `build`. Este contendrá todo lo necesario para publicar la app en GitHub o Netlify.

**_Importante: cuando hayas hecho las pruebas y tu app funcione bien, recuerda cambiar la dirección de las consultas según donde hayas desplegado el servidor (heroku u otro)._**

**_Ya que los productos y tiendas son ficticios, los datos que aparecen en la app, son solo para propósito de desarrollo y no representan una página oficial o representación de alguna marca. Así que por favor cambia los datos por los tuyos._**


## En esta app fueron utilizados
* [Bootstrap](https://getbootstrap.com/): versión 5.1.1
* [React](https://es.reactjs.org/): versión 17.0.2
* [React Router](https://reactrouter.com/): 5.3.0 
* [React Redux](https://react-redux.js.org/): versión 7.2.5
* [Redux](https://es.redux.js.org/): versión 4.1.1
* [Redux thunk](https://github.com/reduxjs/redux-thunk): versión 2.3.0
* [Redux Devtools extension](https://github.com/zalmoxisus/redux-devtools-extension): versión 2.13.9 (para desarrollo)

## Estado de la app
La app se encuentra **en estado de desarrollo** por lo cual aún tiene algunos BUGS que deben ser arreglados:
- La sección de Login tiene problemas de ingreso y de redirección al dashboard del propietario.
- El Logout de la barra del dashboard realiza el retiro del token del LocalStorage, pero continúa redirigiendo al dashboard.
- No realiza la persistencia de la id de la tienda para recargar cada vez que se vuelve al dashboard.

## Algunas ideas para seguir:
#### 1. Sección usuarios públicos:
- Implementar barra de navegación lateral con listado de tiendas y búsqueda.
- Implementar barra de navegación lateral con listado de productos y su búsqueda.
#### 2. Sección usuarios Propietarios:
- Implementar Login al Navbar como menú desplegable.
- Actualizar barra de navegación del dashboard.
- Implementar la actualización de datos del Propietario.
#### 3. Incorporar acceso Clientes:
- Incorporación registro y acceso de Clientes.
- Incorporación de sección para Cliente (resumen de compras, compra actual, actualización de datos)