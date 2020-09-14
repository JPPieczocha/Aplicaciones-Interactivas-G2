import React from 'react';
import './App.css';
import MenuPrincipal from './components/MenuPrincipal.js';
import AutoGrid from './components/Grid.js'

function App() {

  return (
    <div className="App">
      <header className="App-barraTitulo">
        <AutoGrid></AutoGrid>
      </header>
      <header className="App-header">
      <MenuPrincipal>
      </MenuPrincipal>
      </header>
      <header className="App-principal">
        <p>
          Test
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=fC7oUOUEEi4&ab_channel=StackMan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open for a surprise
        </a>
      </header>
    </div>
  );
}

export default App;
