import React from 'react';
import Square from './Square';

const style = {
    border: '4px solid #700c91',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '40px auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}

function Board() {
    return (
        <div style={style}>
            <Square value="1" onClick={() => "dummy value"} />
            <Square value="2" onClick={() => "dummy value"} />
            <Square value="3" onClick={() => "dummy value"} />
            <Square value="4" onClick={() => "dummy value"} />
            <Square value="5" onClick={() => "dummy value"} />
            <Square value="6" onClick={() => "dummy value"} />
            <Square value="7" onClick={() => "dummy value"} />
            <Square value="8" onClick={() => "dummy value"} />
            <Square value="9" onClick={() => "dummy value"} />
        </div>
    )
}

export default Board;