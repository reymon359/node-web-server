const express = require('express')
const app = express();

//middleware for the static public content.
app.use(express.static(__dirname + '/public'));

//Express HBS engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        name: 'Ramon',
        year: new Date().getFullYear()
    });
})

app.listen(3000, () => {
    console.log('Listening requests on port 3000');
})