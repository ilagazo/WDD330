// Handles Hamburger menu functionality
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

// Initialize Variables and Arrays needed for JS game
var myCards = document.getElementById('container');
var resultsArray = [];
var counter = 0;
var text = document.getElementById('text');
var seconds = 00;
var tens = 00;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var Interval ;
var images = [
  'monkey',
  'elephant',
  'lion',
  'orca',
  'penguin',
  'platypus',
  'turtle',
  'dog',
  'salmon',
  'eagle'
];

 // Duplicate array
var clone = images.slice(0);
// Merge to arrays
var cards = images.concat(clone);

// Shuffle function
function shuffle(card){
  for(var j, x, i = card.length; i;
    j = Math.floor(Math.random() * i),
    x = card[--i],   card[i] = card[j], card[j] = x);
  return card;
}
shuffle(cards);

for (var i = 0; i < cards.length; i++) {
  card = document.createElement('div');
  card.dataset.item = cards[i];
  card.dataset.view = "card";
  myCards.appendChild(card);

  card.onclick = function () {
    if (this.className != 'flipped' && this.className != 'correct'){
        this.className = 'flipped';
        var result = this.dataset.item;
        resultsArray.push(result);
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    if (resultsArray.length > 1) {

      if (resultsArray[0] === resultsArray[1]) {
        check("correct");
        counter ++;
        win();
        resultsArray = [];
      } else {
        check("reverse");
        resultsArray = [];
      }
    }
  }
};


var check = function(className) {
  var x = document.getElementsByClassName("flipped");
  setTimeout(function() {

    for(var i = (x.length - 1); i >= 0; i--) {
      x[i].className = className;
    }
  },500);
}

//  If the user wins then display the time it took them
var win = function () {

  if(counter === 5) {
    clearInterval(Interval);
    text.innerHTML = "Your time was " + seconds + ":" + tens;
  }
}

// Handles the time function
function startTimer () {
  tens++;

  if(tens < 9){
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9){
    appendTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
  if (seconds > 9){
    appendSeconds.innerHTML = seconds;
  }
}

// Reset Button
document.getElementById("reset").addEventListener("click", function() {
    location.reload();
    return false;
  });