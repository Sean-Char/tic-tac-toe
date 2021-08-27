import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';

const style = {
    width: '200px',
    margin: '20px auto', 
    fontSize: '30px'
};

function Game() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (i) => {
        const boardCopy = [...board];
        // If user click an occupied square of if game is won, just return
        if (winner || boardCopy[i]) return;
        // Put an X or an O in the click square
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    const jumpTo = () => {

    }

    const renderMoves = () => {
        <button onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    }

    return (
        <>
            <Board squares={board} onClick={handleClick}/>
            <div style={style}>
                <p>{winner ? 'Winner: ' + winner + '  🤩' : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </>
    )
}

export default Game;