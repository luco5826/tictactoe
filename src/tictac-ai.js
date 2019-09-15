const COMPUTER = 'O';
const PLAYER = 'X';

const winningCombos = [
    /*
        0 | 1 | 2
        ---------
        3 | 4 | 5
        ---------
        6 | 7 | 8 
    */

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];


export const checkVictory = (board, player) => {
    let coveredByPlayer = getCoveredBy(player, board);
    return winningCombos.filter(line => line.every(cell => coveredByPlayer.includes(cell))).length > 0
};

const getCoveredBy = (id, board) => {
    return board.map((cell, index) => (cell === id) ? index : -1).filter(index => index !== -1);
}

const getAvailable = (board) => {
    return board.map((cell, index) => (cell !== PLAYER && cell !== COMPUTER) ? index : -1).filter(index => index !== -1);
}

export const checkDraw = (board) => {
    return board.filter(c => c === 0).length === 0;
}

export const placeCircle = (board) => {
    return minimax(board.slice(0), COMPUTER);
}


// Copied from
// https://github.com/nicokratky/tictactoe-web
function minimax(_board, player) {    
    var av = getAvailable( _board);

    if (checkVictory(_board, PLAYER)) {
        return {
            score: -10
        };
    } else if (checkVictory(_board, COMPUTER)) {
        return {
            score: 10
        };
    } else if (av.length === 0) {
        return {
            score: 0
        };
    }

    let moves = [];
    for (let i = 0; i < av.length; i++) {
        var move = {
            index: av[i]
        };

        _board[move.index] = player;

        let mm;
        if (player === COMPUTER)
            mm = minimax(_board, PLAYER);
        else
            mm = minimax(_board, COMPUTER);

        move.score = mm.score;
        _board[av[i]] = move.index;
        moves.push(move);
    }

    let bestMove, bestScore;
    if (player === COMPUTER) {
        bestScore = -99999;

        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    else {
        bestScore = 99999;

        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }

    return moves[bestMove];
}