import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

import Header from './Header'
import HomePageCrousel from './Carousel/HomePage'

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="row Carousel-home">
          <div>
            <HomePageCrousel />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
