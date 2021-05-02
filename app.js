const express = require('express')
require('./DB/mongoose')

const port = process.env.PORT || 3000

const app = express()


app.listen(port,()=>{
console.log(`Server is up and runing on port ${port}`)
})