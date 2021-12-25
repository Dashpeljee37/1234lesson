var activePlayer = 1;

var score = [0, 0];

var roundScore = 0;

var diceNumber = Math.round(Math.random() * 5) + 1;
console.log(diceNumber);

document.getElementById("score-0").textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector(".dice").style.display =  'none';
var diceDom = document.querySelector(".dice")

document.querySelector(".btn-roll").addEventListener("click", function (){
    var diceNumber = Math.round(Math.random() * 5) + 1;
    diceDom.style.display = 'block';
    diceDom.src = "dice-" + diceNumber + ".png";
});

// document.querySelector('#score-1').innerHTML = '<em> YES! </em>'
