// import dependencies
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// setup express app
const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// mongo database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
})

// imported routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log(`App listening on Port ${PORT}!`);
});