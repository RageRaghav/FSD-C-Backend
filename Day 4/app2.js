const express = require('express');
const fs = require('fs')
const app = express();

//middleware
app.use(express.json());

const user = []

const read_data = async ()=>{
    users = await JSON.parse(fs.readFile('./data.json','utf8'));
} 

const write_data = async ()=>{
    await fs.writeFile('./data.json',JSON.stringify(user),'utf-8');
}

app.get('/users',async (req,res)=>{
    res.json(user);
})

app.get('/',async (req,res)=>{res.send('Helo World')})

read_data()

app.post('/users',(req,res)=>{
    var data = req.body;
    const newid = user.length>0?user[user.length-1].id+1:1;
    data.id=newid;
    user.push(data);
    write_data()
    res.status(200).json({message:'data recieved !'});
});

app.listen(9000,()=>{
    console.log("Server running on port 9000");
})