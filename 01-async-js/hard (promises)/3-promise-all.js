/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise(function(resolve){
        setTimeout(resolve, 1000);
    })
}

function waitTwoSecond() {
    return new Promise(function(resolve){
        setTimeout(resolve, 2000);
    })
}

function waitThreeSecond() {
    return new Promise(function(resolve){
        setTimeout(resolve, 3000);
    })
}

function calculateTime() {
    var p1 = waitOneSecond();
    var p2 = waitTwoSecond();
    var p3 = waitThreeSecond();
    var start = new Date().getTime();
    Promise.all([p1, p2, p3]).then(()=>{
        console.log(`Total time taken to resolve all promises in milliseconds is ${new Date().getTime() - start}`);
    })
}

console.log('starting to resolve')
calculateTime();
