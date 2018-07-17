// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
 if(Math.sign(num) === -1){
   return num
 }else{
  return num * -1
 }
}


//Refactored
function makeNegative(num){
  return -Math.abs(num)
}
