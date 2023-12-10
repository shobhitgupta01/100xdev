/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise(function(resolve){
        setTimeout(resolve, 1000);
    });
}

function waitTwoSecond() {
    return new Promise(function(resolve){
        setTimeout(resolve, 2000);
    });
}

function waitThreeSecond() {
    return new Promise(function(resolve){
        setTimeout(resolve, 3000);
    });
}

function calculateTime() {
    var start = new Date().getTime();
    waitOneSecond().then(() => {
        console.log('one second resolved');
        return waitTwoSecond();
    }).then(() => {
        console.log('two second resolved');
        return waitThreeSecond();
    }).then(() => {
        console.log('three second resolved');
        var end = new Date().getTime();
        console.log(`Time to complete is ${end - start} milliseconds`);
    });
}

async function calculateTime2() {
    var start = new Date().getTime();
     await waitOneSecond();
     console.log('one second resolved');
     await waitTwoSecond();
     console.log('two second resolved');
     await waitThreeSecond();
     console.log('three second resolved');
    var end = new Date().getTime();
    console.log(`Time to complete is ${end - start} milliseconds`);
}

// calculateTime();

calculateTime2();

