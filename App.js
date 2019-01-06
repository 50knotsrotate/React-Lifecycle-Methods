import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './Navigation';
import Pagecontent from './Pagecontent';

class App extends Component {
  render() {

    return(
      <div>
        <h1>Component Lifecycle...</h1>
        <Navigation />
        <Pagecontent />
   

      </div>
    )
     
       }

}

export default App;
