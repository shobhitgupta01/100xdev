const fs = require('fs');

function readFile(fileName){
    return new Promise(function(resolve){
        fs.readFile(fileName, 'utf-8', (err, data)=>{
            resolve(data);
        })
    })
}

function writeToFile(fileName, content){
    return new Promise(function(resolve){
        fs.writeFile(fileName, content, (err)=>{
            if(err){
                throw err;
            }
            resolve('success');
        })
    })
}

async function fileCleaner(fileName){
    var data = await readFile(fileName);
    console.log("Before cleaning, content was : \n"+data)
    var cleaned_data = data.replace(/\s+/g,' ');
    console.log("After cleaning, content is : \n"+cleaned_data)
    response = await writeToFile(fileName, cleaned_data);
    console.log(response);
}

fileCleaner('file_to_clean.txt');