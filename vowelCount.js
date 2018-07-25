// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.
// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
  var vowelsCount = 0;
  let word = str.split('');
  let vowels = ['a','e','i','o','u']
  word.forEach((el)=>{
  for(let i = 0; i < vowels.length; i++){
  if(el == vowels[i]){
  vowelsCount++
  }
  }
  });
  return vowelsCount;
}


// Refactored
function getCount(str) {
  var vowelsCount = 0;
  vowelsCount = str.match(/[aeiou]/gi);
  return vowelsCount ? vowelsCount.length:0;
}
