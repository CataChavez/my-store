## React App "My Store"

The app is a store platform, where each owner can display their products and contact information, along with it, each owner can enter their private dashboard to create, edit or delete products, which can be seen immediately on the platform public.

### To see the deploy visit:

[https://elated-minsky-7b9f62.netlify.app](https://elated-minsky-7b9f62.netlify.app)

You can visit any of the 6 fictitious stores, created just for the occasion.
You can enter "Login" with any of these fictitious emails:

- contacto@taller.com
- contacto@manolospizza.com
- contacto@bordadosrosita.com
- contacto@huertilizate.com
- contacto@cactus.com
- contacto@vforvegan.com

**All these emails can be accessed with the same password: `abc123`.**
If you forget some of the fictional emails indicated above, the Login has a reminder in the box so you can access it, do not forget to write what the placeholder tells you.

### How does it work?

A server was created with the help of [JSON-server](https://github.com/typicode/json-server) for the backend occupied as a module, this server was complemented with [JSON Server Auth](https://github.com/jeremyben/json-server-auth) to include user authentication and write-protect paths without Login.
You can see the backend repository for development of this project [here](https://github.com/CataChavez/json-server-for-deploy).

The JSON-server template as a module, which also brings instructions on how to upload to Heroku can be found in this [https://github.com/jesperorb/json-server-heroku](https://github.com/jesperorb/json-server-heroku).

### To run the app in development environment run:
```
$ git clone https://github.com/CataChavez/my-store
$ cd ../path/to/the/file
$ npm install
$ npm start
```
`npm install` Install the package.json on our computer.

`npm start` Run the development mode app.
Go to [http://localhost:3000](http://localhost:3000) to see it in the browser.
The page will reload every time you make a change.

#### Optional: 
You can download the [backend](https://github.com/CataChavez/json-server-for-deploy) of this project to make the necessary changes for your own app and run the server locally with the script `node index.js` this script will make the server available on port 4000.
Important: you must change the query paths for this repository to http://localhost:4000/'path_seg_my_project'.
You will find more information on how to change the "database" in the mentioned repository.

When you're done modifying, you can run `npm run build`, which will create a` build` file. This will contain everything you need to publish the app on GitHub or Netlify.

**_Important: when your app runs without errors remember to change the direction of the queries according to the deployment paths of the server (heroku or other)._**

**_Since the products and stores are fictitious, the data that appears in the app is for development purposes only and does not represent an official page or representation of any brand. So please change the data for yours._**


## In this app they were used
* [Bootstrap](https://getbootstrap.com/): version 5.1.1
* [React](https://es.reactjs.org/): version 17.0.2
* [React Router](https://reactrouter.com/): version 5.3.0 
* [React Redux](https://react-redux.js.org/): version 7.2.5
* [Redux](https://es.redux.js.org/): version 4.1.1
* [Redux thunk](https://github.com/reduxjs/redux-thunk): version 2.3.0
* [Redux Devtools extension](https://github.com/zalmoxisus/redux-devtools-extension): version 2.13.9 (for development purpose only)

## Estado de la app
The app is **in development stage** so it still has some BUGS that need to be fixed:
- The Login section has login and redirection problems to the owner's dashboard.
- The Logout of the dashboard bar performs the withdrawal of the token from the LocalStorage, but continues to redirect to the dashboard.
- The store id is not persisted, so the dashboard will not reload when you go to the public home and then return to the dashboard.

## Some ideas to follow:
#### 1. Public users section:
- Implement sidebar with store list and search.
- Implement sidebar bar with a list of products and their search.
#### 2. Users section Owners:
- Implement Login to the Navbar as a drop-down menu.
- Update dashboard navigation bar.
- Implement the update of Owner data.
#### 3. Add Client access:
- Incorporation of registration and access of Clients.
- Incorporation of section for Customer (summary of purchases, current purchase, data update)