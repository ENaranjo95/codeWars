// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
// Zero isn't an odd number and you don't need to move it.
// If you have an empty array, you need to return it.

function sortArray(array) {
  var odd = array.filter(is_odd).sort(ascending);
  return array.map(replace_odd_inorder);
  function ascending(a, b) {
    return a > b;
  }
  function is_odd(num) {
    return num % 2;
  }
  function replace_odd_inorder(num) {
    return is_odd(num) ? odd.shift() : num;
}
}
