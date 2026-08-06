const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");

const homeAddsOne = document.getElementById("home-adds-one");
const homeAddsTwo = document.getElementById("home-adds-two");
const homeAddsTree = document.getElementById("home-adds-tree");

const guestAddsOne = document.getElementById("guest-adds-one");
const guestAddsTwo = document.getElementById("guest-adds-two");
const guestAddsTree = document.getElementById("guest-adds-tree");

let homeScore = 0;
let guestScore = 0;

homeAddsOne.addEventListener("click", function(){
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
});
homeAddsTwo.addEventListener("click", function(){
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
});
homeAddsTree.addEventListener("click", function(){
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
});

guestAddsOne.addEventListener("click", function(){
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
});
guestAddsTwo.addEventListener("click", function(){
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
});
guestAddsTree.addEventListener("click", function(){
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
});