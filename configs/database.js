const mongoose = require('mongoose');
const config = require('config');
const portfolioDB = config.get('Dbmongo');


mongoose.connect(portfolioDB, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected")
})