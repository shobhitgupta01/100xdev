/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // removing empty spaces
  str = str.replace(/[^a-z0-9]/gi, '');
  if(str.length === 0){
    return true;
  }
  str = str.toLowerCase();
  let i=0, j=str.length-1;
  while(i<j){
    if(str[i]!=str[j]){
      return false;
    }
    i+=1;
    j-=1;
  }
  return true;
}

module.exports = isPalindrome;
