const express = require('express')
const app = express()

//middleware for the static public content.
app.use(express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
//     // res.send('Hello World')
//     let data = {
//         name: 'ramon',
//         age: 24,
//         url: req.url
//     }
//     res.send(data);
// })

app.listen(3000, () => {
    console.log('Listening requests on port 3000');
})