
import React from 'react';

function Counter({
    count,
    hundelIncrement,
    hundelDecrement,
    hundelReset
}) {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={hundelDecrement}>-</button>
            <button onClick={hundelIncrement}>+</button>
            <button onClick={hundelReset}>0</button>
        </div>

    )
}

export default Counter;