import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState("Kattints Ide")

  return (
    <div className="App">
      <header className="App-header">
        <h1><i class="fas fa-drafting-compass"></i>React-Vite-TypeScript-Tailwind Weboldal</h1>
        <button onClick={() => setCount((count) => count = "Hello Aranka!")}>{count}</button>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reactjs
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vitejs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
