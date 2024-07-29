import React, { useContext } from 'react'
import CounterContext from '../ContextAPI/CounterContext'

const CounterDisplay = () => {
    const { count } = useContext(CounterContext);

    return (
        <div>Counter: {count}</div>
    )
}

export default CounterDisplay