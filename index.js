const express = require('express')

const app = express()

app.get('/',(_,res)=>{
    res.send('hello world')
})

const server = app.listen(3000,()=>{
    console.log('start listen on port 3000')
})

