import express from "express";

const app = express()

const hostname = 'localhost'
const port = 8000

app.get('/', (req, res)=>{
    res.send('hello')
})

app.listen(port, hostname, ()=>{
    console.log('server running');
})