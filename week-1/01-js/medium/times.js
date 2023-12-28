/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

// timer class
class ExecutionTimer{
    constructor(){
        this.startTime = new Date();
    }

    stopAndShowTime() {
        const endTime = new Date();
        const timeTaken = endTime - this.startTime;
        console.log(`Execution time: ${timeTaken} milliseconds`)
        return timeTaken;
    }
}

//function to calculate time for any function
function calculateTime(callback, ...args) {
    const timer = new ExecutionTimer();
    callback(...args);
    return timer.stopAndShowTime();
}

// function to find sum
function sum(n){
    let total = 0;
    for(i=1;i<=n;i++){
        total+=i
    }
    return total
}


// calls
calculateTime(sum,[1000])
calculateTime(sum,[1000000])
calculateTime(sum,[10000000])
