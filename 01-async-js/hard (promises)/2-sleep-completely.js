/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(milliseconds) {
    const start = new Date().getTime();
  
    // Busy wait loop
    while (Date.now() - start < milliseconds) {
      // Do nothing, just wait
    }
  }
  
  // Example usage: Blocking the thread for 3000 milliseconds (3 seconds)
  console.log("Start");
  sleep(3000);
  console.log("End");