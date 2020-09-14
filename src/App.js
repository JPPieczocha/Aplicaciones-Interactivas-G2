import React from 'react';
import './App.css';
import MenuPrincipal from './components/MenuPrincipal.js';
import AutoGrid from './components/Grid.js'

import Footer from "./components/Footer"
import Slider from './components/Slider';

function App() {

  return (
    <div className="App">
      <header className="App-barraTitulo">
        <AutoGrid></AutoGrid>
      </header>
      <div className="App-header">
        <MenuPrincipal>
        </MenuPrincipal>
      </div>
      <div className="App-principal">
        <div className="App-principal">
          <p>
            Test
            <Slider>
              
            </Slider>
          </p>
          <a
            className="App-link"
            href="https://www.youtube.com/watch?v=fC7oUOUEEi4&ab_channel=StackMan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open for a surprise
          </a>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
