import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
// import Logic from './logic';

// const logic = new Logic();

function Dice(props) {
  return (
    <img
      src={`dice-${props.value}.png`}
      alt="Dice"
      className="dice"
      style={{ display: props.value === 0 ? "none" : "block" }}
    />
  );
}

function InputScore(props) {
  return (
    <div className="input-score">
      <label htmlFor="input-score" id="text-score">
        Set your Winning Score: {props.winningScore}
      </label>
      <input
        type="range"
        value={props.winningScore}
        id="set-score"
        onChange={props.onChange}
      />
    </div>
  );
}

function RoundScore(props) {
  return (
    <div className="player-current-score" id={`current-${props.player}`}>
      {props.roundScore}
    </div>
  );
}

function PlayerPanel(props) {
  return (
    <div
      className={`player-${props.player}-panel ${
        props.isActivePlayer && props.gamePlaying ? "active" : ""
      }`}
    >
      <div className="player-name" id={`name-${props.player}`}>
        {props.isWinner ? "WINNER!!!" : `Player ${props.player + 1}`}
      </div>
      <div className="player-score" id={`score-${props.player}`}>
        {props.scores[props.player]}
      </div>
      <div className="player-current-box">
        <div className="player-current-label">Current</div>
        <RoundScore
          player={props.player}
          roundScore={props.isActivePlayer ? props.roundScore : 0}
        />
      </div>
    </div>
  );
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: [0, 0],
      roundScore: 0,
      activePlayer: 0,
      gamePlaying: true,
      currentDice: 0,
      previousDice: 0,
      winningScore: 10,
      players: [0, 1],
      winningPlayers: [false, false],
    };
  }

  newGame() {
    console.log("new game");

    this.setState({
      scores: [0, 0],
      roundScore: 0,
      activePlayer: 0,
      gamePlaying: true,
      currentDice: 0,
      previousDice: 0,
      winningScore: 10,
      players: [0, 1],
      winningPlayers: [false, false],
    });
  }

  updateRoundScore(score) {
    const rs = this.state.roundScore;
    this.setState({
      roundScore: rs + score,
    });
  }

  animateRoll() {
    setTimeout(() => {
      this.updateCurrentDice(1);
    }, 50);
    setTimeout(() => {
      this.updateCurrentDice(6);
    }, 100);
    setTimeout(() => {
      this.updateCurrentDice(6);
    }, 150);
    setTimeout(() => {
      this.updateCurrentDice(6);
    }, 200);
    setTimeout(() => {
      this.updateCurrentDice(4);
    }, 275);
    setTimeout(() => {
      this.updateCurrentDice(2);
    }, 375);
    setTimeout(() => {
      this.updateCurrentDice(5);
    }, 475);
  }

  rollDice() {
    const dice = Math.floor(Math.random() * 6) + 1;
    this.updatePreviousDice(dice);
    this.animateRoll();

    setTimeout(() => {
      this.updateRoundScore(dice);
      this.updateCurrentDice(dice);
    }, 500);
    return dice;
  }

  renderDice(dice) {
    return <Dice value={dice} />;
  }

  updatePreviousDice(num) {
    this.setState({
      previousDice: num,
    });
  }

  updateCurrentDice(num) {
    this.setState({
      currentDice: num,
    });
  }

  updateWinningScore(event) {
    this.setState({ winningScore: event.target.value });
  }

  checkForWinner() {
    if (this.state.scores[this.state.activePlayer] >= this.state.winningScore) {
      const updatePlayers = this.state.winningPlayers;
      updatePlayers[this.state.activePlayer] = true;
      this.setState({
        gamePlaying: false,
        winningPlayers: updatePlayers,
      });
    }
  }

  gameNotStarted() {
    if (this.state.gamePlaying) return;
  }

  renderInputScore() {
    return (
      <InputScore
        winningScore={this.state.winningScore}
        onChange={
          this.state.gamePlaying
            ? (e) => this.updateWinningScore(e)
            : () => this.gameNotStarted()
        }
      />
    );
  }

  holdScore() {
    const newScores = this.state.scores;
    newScores[this.state.activePlayer] += this.state.roundScore;
    this.setState({
      scores: newScores,
      roundScore: 0,
      currentDice: 0,
      activePlayer: this.state.activePlayer === 0 ? 1 : 0,
    });

    this.checkForWinner();
  }

  renderPlayerPanel(player, winner) {
    const isActivePlayer = this.state.activePlayer === player ? true : false;
    const isWinner = winner;
    return (
      <PlayerPanel
        player={player}
        isActivePlayer={isActivePlayer}
        gamePlaying={this.state.gamePlaying}
        isWinner={isWinner}
        scores={this.state.scores}
        roundScore={this.state.roundScore}
      />
    );
  }

  render() {
    return (
      <div className="wrapper clearfix">
        {this.renderPlayerPanel(this.state.players[0], this.state.winningPlayers[0])}
        {this.renderPlayerPanel(this.state.players[1], this.state.winningPlayers[1])}

        {this.renderInputScore()}

        <button className="btn-new" onClick={() => this.newGame()}>
          <i className="ion-ios-plus-outline"></i>New game
        </button>

        <button
          className="btn-roll"
          onClick={
            this.state.gamePlaying
              ? () => this.rollDice()
              : () => this.gameNotStarted()
          }
        >
          <i className="ion-ios-loop"></i>Roll dice
        </button>

        <button
          className="btn-hold"
          onClick={
            this.state.gamePlaying
              ? () => this.holdScore()
              : () => this.gameNotStarted()
          }
        >
          <i className="ion-ios-download-outline"></i>Hold
        </button>

        <button className="whoops-1">WHOOPS!</button>

        {this.renderDice(this.state.currentDice)}
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
