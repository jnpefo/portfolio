import React from 'react';
import franco from './images/franco.jpeg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Olá pequeno gafanhoto! <img alt="grasshopper" src="https://img.icons8.com/ios-filled/20/000000/grasshopper.png"/></h2>
        <h3>Seja bem vido ao portfólio do (Franco)</h3>
        <img src={franco} className="App-logo" alt="logo" />
        <p>Jean Paternostre Franco</p>
        <p>Ainda estou pensando em como montar meu portfólio, então fique com uma aplicação do React, usando estado para controlar a contagem, e ao invés de usar o&ensp;
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
            , foi usado o&ensp;
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Toolkit.
          </a>
        </p>
        <Counter />
      </header>
    </div>
  );
}

export default App;
