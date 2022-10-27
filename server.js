const express = require('express');
const path = require('path');

let intial_path = path.join(__dirname, "public");

const app = express()
app.use(express.static(intial_path));

app.get('/', (req, res) => {
    res.sendFile(path.join(intial_path, "home.html"));
})

app.get('/editor' , (req, res) => {
    res.sendFile(path.join(intial_path, "editor.html"))
})

app.listen("5500", () => {
    console.log('listening......');
})