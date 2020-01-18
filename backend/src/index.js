const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://diegodantas:181287@cluster0-yy554.mongodb.net/wazedesenvolvedor?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);