// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive. The string can contain any char.

Test.assertEquals(XO('xo'),true);
Test.assertEquals(XO("xxOo"),true);
Test.assertEquals(XO("xxxm"),false);
Test.assertEquals(XO("Oo"),false);
Test.assertEquals(XO("ooom"),false);

function XO(str) {
  let letter = str.toLowerCase()
  let countX = 0
  let countO = 0
  for(let i = 0; i < letter.length; i++){
  if(letter[i] == "x"){
    countX ++
  }else if(letter[i] == "o"){
    countO ++
  }
  }
  if(countX === countO){
  return true
  }else{
  return false
  }
}
