import logo from './logo.svg';
import './App.css';
import Toy from './Components/Toy/Toy';
import React from 'react';
import ContextProvider from './Context/context';


function App() {
  return (
    <div className="App">
    <ContextProvider Elements = {<Toy/>}>
    </ContextProvider>
    </div>
  );
}

export default App;
