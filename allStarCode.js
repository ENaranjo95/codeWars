// All Star Code Challenge #18
//
// Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
//
// If no occurrences can be found, a count of 0 should be returned.

function strCount(str, letter){
  var count = 0
  var string = str.split('')
  string.forEach((el)=>{
  if(el === letter){
    count ++
  }
  })
  return count
}
