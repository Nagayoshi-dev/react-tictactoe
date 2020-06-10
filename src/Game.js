import React from 'react';
import Board from './Board'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true,
            gameResult: null,
            moveCounter: 0,
            history: [{squares: Array(9).fill(null)}],
        };
    }

    squareClickHandler() {
        this.setState({xIsNext: !this.state.xIsNext});
    }

    render() {
        let nextPlayerMove = this.state.xIsNext ? "Next player move: X" : "Next player move: O";
        let squares = this.state.history[0];

        return (
            <div className="game">
                <div className="gameInfo">
                    <div>{nextPlayerMove}</div>
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
