const fs = require('fs');

fs.mkdir("mydir",(arr)=>{
    if(arr) throw arr;
    else 
    console.log("Directory created")
})
