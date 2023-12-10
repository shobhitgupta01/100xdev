// implementing custom setInterval by recursively calling setTimeout
function customSetInterval(func, delay){
    function inner(){
        func();
        setTimeout(inner, delay);
    }

    setTimeout(inner, delay);
}

counter = 0;

customSetInterval(()=>{
    counter+=1;
    console.log(counter);
},1000)