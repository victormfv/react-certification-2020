import React from 'react';
import logo from '../assets/logo.svg';

function ReactDemo() {
  return (
    <div className="text-center">
      <header className="bg-gray-800 h-screen w-screen flex flex-col text-white items-center text-calc10 justify-center">
        <img src={logo} className="w-2/5 h-2/5 animate-spin-slow" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-cyan-250"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default ReactDemo;
