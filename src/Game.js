import React from 'react';
import Board from './Board'
import './Board.css';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            gameResult: null,
            moveCounter: 0,
        };
    }

    squareClickHandler(i) {
        const squares = this.state.squares.slice();

        if (squares[i] != null)
            return;

        squares[i] = this.state.xIsNext ? "X" : "O";

        this.setState({squares: squares})
        this.setState({xIsNext: !this.state.xIsNext});
    }

    render() {
        const nextPlayerMove = this.state.xIsNext ? "Next player move: X" : "Next player move: O";
        const squares = this.state.squares.slice();

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={squares} onClick={i => this.squareClickHandler(i)}/>
                </div>
                <div className="game-info">
                    <div>{nextPlayerMove}</div>
                    <ol>{ /* TODO */ }</ol>
                </div>
            </div>
        );
    }
}

export default Game;
