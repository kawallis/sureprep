import React from 'react';
import './App.css';
import Header from './components/header';
import Destination from './components/destination';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <main>
            <Header />
            <Destination />
        </main>
      </div>
    );
  }
}

export default App;
