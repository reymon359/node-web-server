const express = require('express')
const app = express();

const hbs = require('hbs');

//middleware for the static public content.
app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        name: 'Ramon',
        year: new Date().getFullYear()
    });
})

app.get('/about', (req, res) => {

    res.render('about', {
        year: new Date().getFullYear()
    });
})

app.listen(3000, () => {
    console.log('Listening requests on port 3000');
})