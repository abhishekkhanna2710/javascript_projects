import React, { useContext } from 'react'
import CounterContext from '../ContextAPI/CounterContext'


const CounterControls = () => {
    const { increment, decrement } = useContext(CounterContext);
    return (
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default CounterControls