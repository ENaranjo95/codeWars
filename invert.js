// Given a set of numbers, return the additive inverse of each.
// Each positive becomes negatives, and the negatives become positives.

function invert(array) {
  var inverse = []
  for(var i = 0; i < array.length; i++){
    if( array[i] === 0){
      inverse.push(array[i])
    }else{
      inverse.push(array[i] * - 1 )
    }
  }
  return inverse
}
