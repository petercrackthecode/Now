import React, {Fragment} from 'react';
import NavBar from './components/NavBar.js';
import {Header, Footer} from './components/componentsPort.js';
import {Exercises} from './components/Excercises/Exercises.js';
import './App.css';

function App() {
  return (
    <fragment className="App">
      <Header/>
      <Exercises/>
      <Footer/>
    </fragment>
  );
}

export default App;
