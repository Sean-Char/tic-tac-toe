import React from 'react';

const style = {
    background: '#e69cff',
    border: '2px solid #700c91',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
}

function Square({onClick, value}) {
    return (
        <button style={style} onClick={onClick}>
            {value}
        </button>
    )
}

export default Square;