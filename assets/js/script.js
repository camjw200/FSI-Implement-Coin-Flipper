// TODO: Declare any global variables we need

/*


-Add variable for heads

-Add a variable for tails

-Add a varibale for total number of flips

-Add a button to flip coin

-Display Result of flip

-Count the number of heads

-Percentage of times on heads

-Count the number of Tails

-Percentage of times on Tails

-Clear all Results button
*/

let heads = 0;
let tails = 0;
let totalFlips = 0;

let percentHeads = function (heads, totalFlips) {
  return (100 * heads) / totalFlips;
};
let percentTails = function (tails, totalFlips) {
  return (100 * tails) / totalFlips;
};
// 0 means heads
// 1 means tails
let coin = 0;

//set initial image of coin
const coinImage = document.querySelector("#coin-image");

//cell references!
const numHeads = document.querySelector("#heads");
const numTails = document.querySelector("#tails");

const flipButton = document.querySelector("#flip-button");
flipButton.addEventListener("click", function () {
  console.log("Flip Button Clicked");
  coin = Math.round(Math.random());
  if (coin === 0) {
    heads = heads + 1;
    totalFlips++;
    coinImage.src = "./assets/images/penny-heads.jpg";
    numHeads.textContent = heads;
  } else {
    tails = tails + 1;
    totalFlips++;
    coinImage.src = "./assets/images/penny-tails.jpg";
    numTails.textContent = tails;
  }
  console.log("heads", heads);
  console.log("tails", tails);
  console.log(totalFlips);
  console.log("% heads: ", percentHeads(heads, totalFlips));
  console.log("% tails: ", percentTails(tails, totalFlips));
});
