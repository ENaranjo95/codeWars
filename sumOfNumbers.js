// Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner,
//to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, while he
//teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.

Test.assertEquals(f(100), 5050);

function f(n){
let sum = 0
if(n > 0){
for(let i = n; i >= 0; i--){
  sum += i
}
}else{
  return false
}
return sum
};
