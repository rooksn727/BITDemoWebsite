const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');

let intial_path = path.join(__dirname, "public");

const app = express()
app.use(express.static(intial_path));
app.use(fileupload());

app.get('/', (req, res) => {
    res.sendFile(path.join(intial_path, "home.html"));
})

app.get('/editor' , (req, res) => {
    res.sendFile(path.join(intial_path, "editor.html"))
})

//upload link
app.post('/upload', (req, res) => {
    let file = req.file.image
    let date = new Date();
    // image name
    let imagename = date.getDate() + date.getTime() + file.name;
    // image upload path
    let path = 'public/uploads/' + imagename;

    // create upload
    file.mv(path, (err, result) => {
        if (err){
            throw err;
        }
        else {
            // our image upload path
            res.json('uploads/${imagename}')
        }
    })

})

app.listen("5500", () => {
    console.log('listening......');
})