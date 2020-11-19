// import dependencies
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

//Express app setup
const app = express();
const PORT = process.env.PORT || 3000;

//Starts using Morgan
app.use(morgan("dev"));

//Using express functions for the middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Ties in the Mongo db and allows for deployment
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
})

//The two routes to be used for the .html files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Listener
app.listen(PORT, function () {
    console.log(`App listening on Port ${PORT}!`);
});