# Yummi Pizza Backend

A Node.js based REST API to use along the Yummi Pizza app, that is intended to be a delivery application for a pizzeria. For now it is for learning purposes only.

## Installation

First clone the repository

```bash
git https://github.com/simonmontaggioni/yummi-pizza-backend.git
```

and then move to the project folder

```bash
cd yummi-pizza-backend
npm install
```

## Usage

You can use the project in several ways.

- Development mode

```bash
npm run dev
```

This will start the server and you should see a message like

```bash
> yummi-pizza-backend@1.0.0 dev
> nodemon server.js

[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
DEVELOPMENT Server listening on port: 3001.

```

Then you can open your browser or your preferred tool with the following url [http://localhost:3001](http://localhost:3001), if everything is OK, there you must see the message:

```
{
  message: "Welcome to the Yummi Pizza API."
}
```

- Production mode

```bash
npm start
```

This command will run the server in a production environment, and you should see the following message:

```bash
> yummi-pizza-backend@1.0.0 start
> NODE_ENV=production node server.js

PRODUCTION Server listening on port: 3001.

```

## Contributing

Pull requests are welcome, but the aim to this project is for learn about React.js and Node.js. Again, if you want to clone it, and use it, you are welcome to do it.

## License

[MIT](https://choosealicense.com/licenses/mit/)
