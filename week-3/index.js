const express = require('express')
const app = express()
const port = 3000

app.get('/todos', (req, res) => {
  res.send('Hello World!')
})

app.get('/todos/:id', (req, res) => {
    res.send('Hello World!') 
  })

app.post('/todos',(res,req)=>{

})  

app.put('/todos/:id',(res,req)=>{

})

app.delete('/todos/:id',(res,req)=>{
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})