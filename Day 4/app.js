const express = require('express');
const app = express();

//middleware
app.use(express.json());

const user = []

app.get('/users',async (req,res)=>{
    res.json(user);
})

app.get('/',async (req,res)=>{res.send('Helo World')})

app.post('/users',(req,res)=>{
    var data = req.body;
    const newid = user.length>0?user[user.length-1].id+1:1;
    data.id=newid;
    user.push(data);
    res.status(200).json({message:'data recieved !'});
});

app.listen(9000,()=>{
    console.log("Server running on port 9000");
})