const express =require('express');
const app = express();
const cors=require('cors');
const phones= require('./phones.json');
const port = 3000;

app.use(cors());

app.get('/',(req,res) =>{
    res.send('Hello World');
})

app.get('/phones',(req,res)=>{
    res.send(phones)

})

app.get('/phones/:id',(req,res)=>{
    const id =req.params.id;
    const phone=phones.find(phone=>phone.id==id) ||{};
    res.send(phone);

})

app.listen(port,()=>{
    console.log(`Example app listening right at http://localhost:${port}`)
})