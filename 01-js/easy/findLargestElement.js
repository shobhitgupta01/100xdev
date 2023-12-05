/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

    if(numbers.length == 0){
        return undefined;
    }
    
    let largest = Number.MIN_SAFE_INTEGER;
    numbers.forEach(element => {
        if (element > largest){
        largest = element
    }
    });

    return largest;
}

// console.log(findLargestElement([1,2,3,4,5]))
module.exports = findLargestElement;