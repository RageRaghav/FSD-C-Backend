const fs = require('fs');

const read = async()=>{
    const data = await fs.readFileSync('./data.txt','utf8');
    console.log(data);
}
read();