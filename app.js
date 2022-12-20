//express 

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hi There!, I am from Express Js");
})



app.listen(5000);































// const { response } = require('express');
// const express = require('express');

// const app = express();

// app.get('/', (request, response) => {
//     response.send("hello from express js");
// });

// app.get('/another', (request, response) => {
//     response.send("I am from another!");
// })
// app.get('/students', (req, res) => {
//     res.send(JSON.stringify(["Rahim", "Karim"]));
// });

// const port = 3000;

// app.listen(port, () => {
//     console.log(`Listening on port 3000....`);
// })


