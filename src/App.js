import React, { Component } from 'react';
import { connect } from 'react-redux';
import PetName from './components/PetName'
import UserName from './components/UserName';
import Stats from './components/Stats';
import Commands from './components/Commands';
import Inventory from './components/Inventory';


class App extends Component {
  render() {
    console.log('_________________________')

    // setInterval(function() {
    //   console.log('timeupdate')
    // }, 5000);
    
    return (
      <div className="App">
      <h3>Info</h3>
      <PetName /> 
      <UserName /> 
      <Stats /> 
      <Commands /> 
      <Inventory />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(App);
