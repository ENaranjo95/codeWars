// nthEven(1) //=> 0, the first even number is 0
// nthEven(3) //=> 4, the 3rd even number is 4 (0, 2, 4)
//
// nthEven(100) //=> 198
// nthEven(1298734) //=> 2597466


Test.assertEquals(nthEven(1), 0, "Wrong Value!");
Test.assertEquals(nthEven(2), 2, "Wrong Value!");
Test.assertEquals(nthEven(3), 4, "Wrong Value!");

Test.assertEquals(nthEven(100), 198, "Wrong Value!");
Test.assertEquals(nthEven(1298734), 2597466, "Wrong Value!");

function nthEven(n){
  return n * 2 - 2
}
