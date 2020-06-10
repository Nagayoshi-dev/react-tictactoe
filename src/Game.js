import React from 'react';
import Board from './Board'

const toMove = {
    X_TO_MOVE: 'Next player to move: X',
    O_TO_MOVE: 'Next player to move: O',
    GAME_DRAW: 'Game draw',
    WINNER_IS_X: 'Player X is the winner',
    WINNER_IS_O: 'Player O is the winner',
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameStatus: toMove.X_TO_MOVE,
            gameResult: null,
            moveCounter: 0,
            history: [{squares: Array(9).fill(null)}],
        };
    }

    squareClickHandler() {
    }

    render() {
        let squares = this.state.history[0];

        return (
            <div className="game">
                <div className="gameInfo">
                    <div>{this.state.gameStatus}</div>
                    <ol>{ /* TODO */ }</ol>
                </div>
                <div className="gameBoard">
                    <Board squares={squares} onClick={() => this.squareClickHandler()}/>
                </div>
            </div>
        );
    }
}

export default Game;
