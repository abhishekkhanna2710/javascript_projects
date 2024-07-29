import React from 'react'
import Movies from './Components/Debouncing/Movies'

import CounterDisplay from "./Components/Counter/CounterDisplay"
import CounterControls from "./Components/Counter/CounterControls"
import CounterProvider from './Components/Counter/CounterProvider'


function App() {


  return (
    <div className="App">
      {/* <Movies /> */}

      <CounterProvider>
        <CounterDisplay />
        <CounterControls />
      </CounterProvider>
    </div>
  )
}

export default App;
