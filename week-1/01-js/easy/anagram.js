/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

const _ = require('lodash');

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase()
  str2 =str2.toLowerCase()
  let map1 = {}
  let map2 = {}

  // creating map
  for(i=0; i< str1.length; i++) {
    if (!(str1[i] in map1)){
      map1[str1[i]] = 1
    }
    else{
      map1[str1[i]] +=1
    }}

    for(i=0;i<str2.length; i++){
      if(!(str2[i] in map2)){
        map2[str2[i]] = 1
      }
      else{
        map2[str2[i]]+=1
      }
    }

    return _.isEqual(map1, map2)
}

module.exports = isAnagram;
