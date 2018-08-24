import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Title />
      </div>
    );
  }
}

export default App;
