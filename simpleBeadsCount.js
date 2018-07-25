// Two red beads are placed between every two blue beads. There are N blue beads.
// After looking at the arrangement below work out the number of red beads.
//
// @ @@ @ @@ @ @@ @ @@ @ @@ @
//
// Implement count_red_beads(N_blue) (in PHP count_red_beads($n);
// in Java, Javascript countRedBeads(n)) so that it returns the number of red beads.
// If there are less than 2 blue beads return 0.


function countRedBeads(n) {
  let redBeads = 2
  if(n > 2){
  return (n-1)*2
  }else{
  return 0
  }
}

// Refactored
function countRedBeads(n) {
  return n < 2 ? 0 : 2 * n - 2;
}
