// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

describe("Basic Tests", function(){
  it("It should works for basic tests", function(){

Test.assertSimilar(replace("Hi!") , "H!!")
Test.assertSimilar(replace("!Hi! Hi!") , "!H!! H!!")
Test.assertSimilar(replace("aeiou") , "!!!!!")
Test.assertSimilar(replace("ABCDE") , "!BCD!")

})})

function replace(s){
  return s.replace(/[aeiouAEIOU]/gi, "!")
}
