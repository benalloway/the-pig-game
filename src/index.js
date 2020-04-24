import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Logic from './logic';

const logic = new Logic();

class Game extends React.Component {
    render() {
        return (
            <div class="wrapper clearfix">
            <div class="player-0-panel active">
                <div class="player-name" id="name-0">Player 1</div>
                <div class="player-score" id="score-0">43</div>
                <div class="player-current-box">
                    <div class="player-current-label">Current</div>
                    <div class="player-current-score" id="current-0">0</div>
                </div>
            </div>
            
            <div class="player-1-panel">
                <div class="player-name" id="name-1">Player 2</div>
                <div class="player-score" id="score-1">72</div>
                <div class="player-current-box">
                    <div class="player-current-label">Current</div>
                    <div class="player-current-score" id="current-1">0</div>
                </div>
            </div>
            
            <div class="input-score">
                <label for="input-score" id="text-score">Set your Winning Score: 100</label>
                <input type="range" value="100" id="set-score" />
            </div>
            
            <button class="btn-new"><i class="ion-ios-plus-outline"></i>New game</button>
            <button class="btn-roll"><i class="ion-ios-loop"></i>Roll dice</button>
            <button class="btn-hold"><i class="ion-ios-download-outline"></i>Hold</button>
            <button class="whoops-1">WHOOPS!</button>
            
            <img src="dice-5.png" alt="Dice" class="dice" />
            {/* <!-- <div class="game-rules">
                <h1>GAME RULES</h1>
                <ol>
                    <li>The game has 2 players, playing in rounds</li>
                    <li>In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score</li>
                    <li>BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn</li>
                    <li>The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn</li>
                    <li>The first player to reach 100 points on GLOBAL score wins the game</li>
                </ol>
            </div> --> */}
        </div>
        )
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );