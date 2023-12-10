const fs = require('fs');

//  function to read file
function readFile(fileName){
    return new Promise(function(resolve){
        fs.readFile(fileName, 'utf-8', (err, data) =>{
            resolve(data);
        });
    });
}

readFile('myFile.txt').then((data)=>{
    console.log(data);
})

let sum = 0;
for(i=0;i<100000000;i++){
    sum+=i;
}
console.log(sum);

