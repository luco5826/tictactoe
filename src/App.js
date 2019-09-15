import React from 'react';
import Grid from './Grid';
import 'tachyons';
import { placeCircle, checkVictory, checkDraw } from './tictac-ai';

const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
class App extends React.Component {

    constructor() {
        super();
        this.state = {
            _board: [...board],
            _winner: 0
        }

    }
    clickHandler = (event) => {
        let selected = event.target.id;

        // If it is not an empty cell, return
        if (board[selected] !== 0) {
            return;
        }

        // Updates the board with the corresponding cell
        board[selected] = 'X';
        if (checkVictory(board, 'X')) {
            this.setState({
                _winner: 'X',
                _board: board
            });
            return;
        }
        // Now the computer plays
        console.time("place");
        let index = placeCircle(board).index;
        console.timeEnd("place");
        board[index] = 'O';
        if (checkVictory(board, 'O')) {
            this.setState({
                _winner: 'O',
                _board: board
            });
            return;
        }

        // Check for a draw
        if (checkDraw(board)) {
            this.setState({ _winner: -1 });
        }

        this.setState({ _board: board })
    }

    replay = (event) => {
        for (let i = 0; i < board.length; i++) {
            board[i] = 0;
        }
        let winner = 0;
        this.setState({
            _board: board,
            _winner: winner
        });
    }
    render() {

        return (
            <div className='tc'>
                <Grid
                    board={this.state._board}
                    onclickMethod={this.clickHandler}
                    replayBtnHandler={this.replay}
                    winner={this.state._winner} />
            </div >
        );
    }
};
export default App;