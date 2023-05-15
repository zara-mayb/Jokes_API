const express = require("express");
const app = express();

//must have this at the top to access the .env file
require('dotenv').config();

//require/import file
require("./config/mongoose_config")

// extract info from the .env file
const PORT = process.env.PORT;

//middleware
app.use(express.json(), express.urlencoded({extended: true}));

//require the routes to run
const AllMyJokesRoutes = require("./routes/joke.routes");
AllMyJokesRoutes(app);

// run the server
app.listen( PORT, () => console.log(`Listening on port: ${PORT}`) );
