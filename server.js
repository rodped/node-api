const express = require('express');
const mongoose =require('mongoose');

// Iniciando a App
const app = express();

// Iniciando a DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
     {useNewUrlParser: true}
);

// Primeira rota
app.get('/', (req, res) => {
    res.send('Hello!!!');
});

app.listen(3001);