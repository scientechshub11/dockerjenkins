const express = require('express');
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`app listen to the port ${port}`)
})

app.get('/check-build', (req, res)=>{
    res.send("page loaded hmmm successfully check check!!!!!")
})

app.get('/', (req, res)=>{
    res.send("page loaded hmmm successfully check check!!!!!")
})