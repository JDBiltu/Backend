require('dotenv').config();


const express = require('express')

const app = express()

//highest port is 65535

const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter' , (req,res)=>{
    res.send('Jayndra Dey')

})
app.get('/youtube' , (req , res)=>{
    res.send('<h2>chi aur code</h2>')
})

app.get('/login' , (req,res)=>{
    res.send('<h1>hello u  are in login page</h1>')

})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})