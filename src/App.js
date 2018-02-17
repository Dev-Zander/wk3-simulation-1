import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import routes from './routes';
import Header from '../src/components/Header'
import Shelfie from '../src/components/Shelfie'



class App extends Component {
  render() {
    return (
      <div className="App">
<Header />

<div className="header">
<div className="body">

</div>
</div>
{ routes }
      </div>
     
    

    );
  }
}

export default App;
