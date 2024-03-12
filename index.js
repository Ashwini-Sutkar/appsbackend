const express = require("express");
require('dotenv').config();
const app = express();
const port = 4000;

app.get('/',(req, res)=>{
    res.send("connected");
});

app.get('/twitter', (req, res)=>{
    res.send("connected succesfully");
})

app.get('/youtube',(req, res )=>{
    res.send("I m a Youtuber");
})

app.get('/insta',(req, res)=>{
    res.send("hey i did it");
})


app.listen(process.env.PORT,()=>{
    console.log(`app listening on port ${port}`)
})