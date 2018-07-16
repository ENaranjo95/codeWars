// Task:
// Given a number, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep..."

Test.assertEquals(countSheep(1), "1 sheep...");
Test.assertEquals(countSheep(2), "1 sheep...2 sheep...");
Test.assertEquals(countSheep(3), "1 sheep...2 sheep...3 sheep...");

var countSheep = function (num){
let string = ""
 for(let i = 1; i <= num; i++){
  string += i + " sheep..."
 }
 return string
}


// Refactored
var countSheep = function (num){
let string = ""
 for(let i = 1; i <= num; i++){
  string += `${i} sheep...`
 }
 return string
}
