const fs = require('fs');
const read=()=>{
fs.readFile("./data.txt","utf8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }

})
}
console.log('Before Reading')
read();
console.log('After Reading')
