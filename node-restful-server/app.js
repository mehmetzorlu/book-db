const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app= express();

const booksRoute = require('./routes/books');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

//route books with using middleware
app.use('/books', booksRoute);

app.get('/', (req, res) => {
    res.send('<h2>Welcome from Restful server!</h2>');
});

//Mongo DB connection
mongoose.connect(process.env.MONGO_DB_CONNECTION,{
    useNewUrlParser: true,
    useUnifiedTopology: true },  () => {
        console.log('connected to MongoDB!');
    });

app.listen(5000);