var activePlayer = 0;
var score = [0, 0];
var roundScore = 0;
var isGameOver = false;

var diceDom = document.querySelector(".dice")

initGame();

document.querySelector(".btn-roll").addEventListener("click", function (){
    var diceNumber = Math.round(Math.random() * 5) + 1;
    diceDom.style.display = 'block';
    diceDom.src = "dice-" + diceNumber + ".png";
    if (diceNumber !== 1) {
        roundScore = roundScore + diceNumber;
        document.getElementById("current-"+ activePlayer).textContent = roundScore;
    }
    else{
        changePlayer();
    }
});
document.querySelector(".btn-hold").addEventListener("click",function(){
    score[activePlayer] = score[activePlayer] +  roundScore;
    document.getElementById("score-" + activePlayer).textContent = score[activePlayer];
    if (score[activePlayer] >= 20){
        document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
        document.querySelector(".player-" + activePlayer +"-panel").classList.add("winner");
        document.querySelector(".btn-hold").style.display = 'none';
        document.querySelector(".btn-roll").style.display = 'none';
        document.getElementById("current-"+ activePlayer).textContent = '0';
    }else{
        changePlayer();
    }
});

document.querySelector(".btn-new").addEventListener("click",initGame);

function changePlayer(){
    document.querySelector(".player-0-panel").classList.toggle('active');
    document.querySelector(".player-1-panel").classList.toggle('active');
    document.getElementById("current-"+ activePlayer).textContent = '0';
    document.querySelector(".dice").style.display =  'none';
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;
}

function initGame(){
    isGameOver = false;
    activePlayer = 0;
    score = [0, 0];
    roundScore = 0;
    document.querySelector(".player-0-panel").classList.remove('winner');
    document.querySelector(".player-1-panel").classList.remove('winner');
    document.querySelector(".player-0-panel").classList.remove('active');
    document.querySelector(".player-1-panel").classList.remove('active');
    document.querySelector(".player-0-panel").classList.add('active');
    document.getElementById("name-0").textContent = 'Player 1';
    document.getElementById("name-1").textContent = 'Player 2';
    document.querySelector(".dice").style.display =  'none';
    document.getElementById("score-0").textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector(".btn-hold").style.display = 'block';
    document.querySelector(".btn-roll").style.display = 'block';
    diceDom.style.display =  'none';
}
// document.querySelector('#score-1').innerHTML = '<em> YES! </em>'
