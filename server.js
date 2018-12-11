const express = require('express')
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

//when we upload the app and need to know the port.
//if there is no port then we are in local and we set it to 3000
const port = process.env.PORT || 3000;

//middleware for the static public content.
app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        name: 'raMon morciLlo',
        year: new Date().getFullYear()
    });
})
app.get('/about', (req, res) => {

    res.render('about', {
        year: new Date().getFullYear()
    });
})

app.listen(port, () => {
    console.log(`Listening requests on port ${port}`);
})