export default function Logic() {
    /*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// var scores, roundScore, activePlayer, gamePlaying, previousDice, winningScore;

// init();

// // on rolldice click
// document.querySelector('.btn-roll').addEventListener('click', function(){
//     if (gamePlaying){
//         // 1. random number
//         var dice = Math.floor(Math.random() * 6) + 1; // random number between 1-6
    
//         if(previousDice === 6 && dice === 6){
//             document.querySelector('.btn-roll').style.display = 'none';
//             document.querySelector('.btn-hold').style.display = 'none';
//             document.querySelector('.whoops-1').style.display = 'block';
//             setTimeout(doubleSix, 1000);
//         } else{
//             // 1. update previousDice
//             previousDice = dice;
//             // 2. display the result
//             var diceDOM = document.querySelector('.dice');
//             diceDOM.src = 'dice-' + dice + '.png';
//             diceDOM.style.display = 'block';
        
//             // 3. update the round score IF the rolled number was not a 1
//             if (dice !== 1){
//                 // add score
//                 roundScore += dice;
//                 document.querySelector('#current-'+activePlayer).textContent = roundScore;
//             } else{
//                 document.querySelector('.btn-roll').style.display = 'none';
//                 document.querySelector('.btn-hold').style.display = 'none';
//                 document.querySelector('.whoops-1').style.display = 'block';
//                 setTimeout(nextPlayer, 1000);
//             }
//         }
//     }
// });

// // on buttonhold click
// document.querySelector('.btn-hold').addEventListener('click', function(){
//     if(gamePlaying){
//         //ADd CURRENT score to GLOBAL score
//         scores[activePlayer] += roundScore;
    
//         // Update the UI
//         document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
    
//         // Check if player won the game
//         if (scores[activePlayer] >= winningScore) {
//             document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
//             document.querySelector('.dice').style.display = 'none';
//             document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
//             document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
//             gamePlaying = false;
//         } else {
//             // Next player
//             nextPlayer();
//         }
//     }
// });

// document.getElementById('set-score').addEventListener('change', function(e){
//     document.getElementById('text-score').textContent = 
//         "Set your Winning Score: " + document.getElementById('set-score').value;
//     init();
// });


// function nextPlayer() {
//     document.querySelector('.whoops-1').style.display = 'none';
//     document.querySelector('.btn-roll').style.display = 'block';
//     document.querySelector('.btn-hold').style.display = 'block';

//     // next player
//     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        
//     roundScore = 0;
//     document.getElementById('current-0').textContent = 0;
//     document.getElementById('current-1').textContent = 0;

//     document.querySelector('.player-0-panel').classList.toggle('active');
//     document.querySelector('.player-1-panel').classList.toggle('active');

//     document.querySelector('.dice').style.display = 'none';
// }

// document.querySelector('.btn-new').addEventListener('click', init);

// function rules(){
//     document.querySelector('.game-rules').style.display = 'none';
// }

// function init() {
//     setTimeout(rules, 2000);
//     gamePlaying = true;
//     scores = [0,0];
//     roundScore = 0;
//     activePlayer = 0;
//     winningScore = document.getElementById('set-score').value;

//     document.querySelector('.dice').style.display = 'none';
//     document.getElementById('score-0').textContent = '0';
//     document.getElementById('score-1').textContent = '0';
//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0';
//     document.getElementById('name-0').textContent = 'Player 1';
//     document.getElementById('name-1').textContent = 'Player 2';
//     document.querySelector('.player-0-panel').classList.remove('winner');
//     document.querySelector('.player-1-panel').classList.remove('winner');
//     document.querySelector('.player-0-panel').classList.remove('active');
//     document.querySelector('.player-1-panel').classList.remove('active');
//     document.querySelector('.player-0-panel').classList.add('active');
//     document.querySelector('.btn-roll').style.display = 'block';
//     document.querySelector('.btn-hold').style.display = 'block';
//     document.querySelector('.whoops-1').style.display = 'none';
// }

// function doubleSix() {
//     document.getElementById('score-'+activePlayer).textContent = '0';
//     scores[activePlayer] = 0;
//     nextPlayer();
// }
}