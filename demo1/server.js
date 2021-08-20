'use strict'

const express = require('express')
const app = express()

const notFoundhandler = require('./handlers/404')
const errorHandler = require('./handlers/500')
app.use(express.json())

function start(port) {
    app.listen(port, () => console.log(`server is runing on port ${port}`))
}

app.get('/', (req, res) => {
    res.send("Hello in Home Page")
})

app.get('/data', (req, res) => {
    res.json({
        message: 'hello',
        pathName: req.path
    })
})

app.post('/bad' ,(req,res)=>{
    let number = 12;
    number.forEach(x => console.log(x))
    res.send("Bad Route")
})

app.use('*', notFoundhandler)
app.use(errorHandler)
module.exports = {
    app: app,
    start: start,
}