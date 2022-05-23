const express = require('express')
const res = require('express/lib/response')

const app = express()
const port = 5000

//allow this app to receive incoming json request
//Create app.use for express.json here
app.use(express.json())

let todos = [
    {
        id: 1,
        title: "Cuci tangan",
        isDone: true
    },
    {
        id: 2,
        title: "Jaga jarak",
        isDone: false
    },
]

//GET list route: simply send arr of obj todos on your user screen
// Create method GET here



app.get('/todos',(req,res)=>{
  res.send(todos)
})

//GET detail route: send the todo obj, by received id request params
// Create method GET by received id here
app.get('/todo/:id',(req,res)=>{
 const id=req.params.id
 const data=todos.find((item)=>item.id==id)

 if(!data){
   return res.send({
     error:{
      massage:`todo with id:${id} not found`
     }
     
   })
 }
 res.send(data)
})

//POST route: receive json body request, from user input, then push to todos array
// Create method POST here
app.post('/todo',(req,res)=>{
  const data=req.body
  todos.push(data)
  res.send({
    data:{
      massage:'insert data todo finished'
    }
   
    

  })
 })

//PATCH route: receive json body request, from user input, then push to todos array
//by object id
// Create method PATCH here
app.patch('/todo/:id',(req,res)=>{
 const id=req.params.id
 const data=req.body
 todos=todos.map((todo)=>{
  if(todo.id==id){
    return data
  }else{
    return todo
  }
 })
 res.send({
  massage:'update data todo finished',
  data,
})
 })

//DELETE route: delete the todo obj, by received id request params
// Create method DELETE here
app.delete('/todo/:id',(req,res)=>{
 const id=req.params.id
 todos=todos.filter((todo)=>todo.id != id)
 res.send({
  massage:`delete data todo whit id ${id} finished`
  
})
 })
  

app.listen(port, () => console.log(`Listening on port ${port}!`))