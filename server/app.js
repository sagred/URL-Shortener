const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://sagred:sagred@cluster0-uxhzz.gcp.mongodb.net/blog?retryWrites=true&w=majority'
mongoose.connect(uri,{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established successfully...")
})

const mainRoute = require('./routes/main')
app.use('/', mainRoute)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})