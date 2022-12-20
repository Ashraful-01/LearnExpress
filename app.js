//express 
const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
    res.send("Hi There!, I am from Express Js");
})

app.get('/ashraf', (req, res) => {
    res.send("He is a Cool Programmer");
});


app.get('/students', (req, res) => {
    fs.readFile('./db.json', 'utf-8', (err, data) => {
        console.log(data);
        const students = JSON.parse(data).students;
        res.send(students);
    });
});

app.listen(5000);




