import React from 'react';
import Cell from './Cell';
import './Grid.css';


const Grid = ({ board, onclickMethod, replayBtnHandler, winner }) => {

    let winLoose, background = 'black', showH1 = (winner !== 0) ? 'appear' : 'disappear';
    if (winner === 'X') {
        background = 'green';
        winLoose = 'YOU WON!';
    } else if (winner === 'O') {
        background = 'red';
        winLoose = 'YOU LOST!'
    } else if (winner === -1){
        background = 'yellow';
        winLoose = 'IT\'S A TIE';
    }    
    return (
        <div>
            <h1 className='tc f1 white'>IMPOSSIBLE TIC-TAC-TOE</h1>
            <h1 className={`white ${showH1}`}>{winLoose}</h1>
            <table className='tc w-ns f2'>
                <tbody >
                    <tr>
                        <Cell bgcolor={background} clickedCell={onclickMethod} value={board[0]} id={0} />
                        <Cell bgcolor={background} clickedCell={onclickMethod} value={board[1]} id={1} />
                        <Cell bgcolor={background} clickedCell={onclickMethod} value={board[2]} id={2} />
                    </tr>
                    <tr>
                        <Cell bgcolor={background} clickedCell={onclickMethod} value={board[3]} id={3} />
                        <Cell bgcolor={background} clickedCell={onclickMethod} value={board[4]} id={4} />
                        <Cell bgcolor={background} clickedCell={onclickMethod} value={board[5]} id={5} />
                    </tr>
                    <tr><Cell bgcolor={background} clickedCell={onclickMethod} value={board[6]} id={6} />
                        <Cell bgcolor={background} clickedCell={onclickMethod} value={board[7]} id={7} />
                        <Cell bgcolor={background} clickedCell={onclickMethod} value={board[8]} id={8} />
                    </tr>
                </tbody>
            </table>
            <button className='f6 white br-pill ba bw2 ph3 pv2 ma2 ttu' onClick={replayBtnHandler} >Replay</button>
        </div>
    );
};
export default Grid;