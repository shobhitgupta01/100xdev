const fs = require('fs');

function writeToFile(content){
    return new Promise(function(resolve){
        fs.writeFile('myFile.txt', content, (err)=>{
            if(!err){
                resolve()
            }
        });
    })
}

writeToFile("Hello from content written using fs inside myFile").then(()=>{
    console.log("written successfully");
})