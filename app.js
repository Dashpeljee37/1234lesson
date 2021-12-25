var activePlayer = 1;

var score = [0, 0];

var roundScore = 0;

var dice = Math.round(Math.random() * 5) + 1;
console.log(dice);

document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;
document.querySelector(".dice").style.display =  'none';

switch(dice){
    case 1:
        document.querySelector(".dice").src = 'dice-1.png'; break;
    case 2:
        document.querySelector(".dice").src = 'dice-2.png'; break;
    case 3:
        document.querySelector(".dice").src = 'dice-3.png'; break;
    case 4:
        document.querySelector(".dice").src = 'dice-4.png'; break;
    case 5:
        document.querySelector(".dice").src = 'dice-5.png'; break;
    case 6:
        document.querySelector(".dice").src = 'dice-6.png'; break;
    default:
        document.querySelector(".dice").style.display = 'none';
}
// document.querySelector('#score-1').innerHTML = '<em> YES! </em>'
