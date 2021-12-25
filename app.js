var activePlayer = 0;

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
    if (diceNumber !== 1) {
        roundScore = roundScore + diceNumber;
        document.getElementById("current-"+ activePlayer).textContent = roundScore;
    }
    else{
        changeUser();
        document.querySelector(".dice").style.display =  'none';
    }
});
document.querySelector(".btn-hold").addEventListener("click",function(){
    score[activePlayer] = score[activePlayer] +  roundScore;
    document.getElementById("score-" + activePlayer).textContent = score[activePlayer];
    changeUser();
})

function changeUser(){
    if (score[activePlayer] >= 100){
        alert("Player " + (activePlayer + 1) + "яллаа");
    }
    document.querySelector(".player-0-panel").classList.toggle('active');
    document.querySelector(".player-1-panel").classList.toggle('active');
    document.getElementById("current-"+ activePlayer).textContent = '0';
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0
}
// document.querySelector('#score-1').innerHTML = '<em> YES! </em>'
