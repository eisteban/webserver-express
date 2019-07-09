const hbs = require('hbs');
const express = require('express');
const app = express();

//imports
require('./hbs/helpers');

const port = process.env.PORT || 8080

app.use(express.static(__dirname + '/public'));

//Express HBS engine
app.set('view engine', 'hbs');

//partials
hbs.registerPartials(__dirname + '/views/parciales');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'esteban',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {

    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Corriendo servidor en el puerto ${port}`);
});