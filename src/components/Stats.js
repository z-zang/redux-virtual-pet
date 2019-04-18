import React, { Component } from 'react'
import { connect } from 'react-redux';
import {  } from '../actions'

class Stats extends Component {
  render() {
    const props = this.props.state
    console.log('Stats this.props', this.props.state)
    
    return(
      <div>
        <h3>Stats</h3>
          <p>mood: {props.mood}</p>
          <br/>
          <div className="stats">
            <p>health: {props.health}</p>
            <p>hunger: {props.hunger}</p>
            <p>happiness: {props.happiness}</p>
            <p>experience: {props.exp}</p>
            <p>money: {props.money}</p>
            <div className="bar" style={{width: `${props.health}px`}}/>
            <div className="bar" style={{width: `${props.hunger}px`}}/>
            <div className="bar" style={{width: `${props.happiness}px`}}/>
            <div className="bar" style={{width: `${props.exp}px`}}/>
            {/* <div className="bar" style={{width: `${props.money}px`, height: '5px', backgroundColor: 'powderblue'}}/>    */}
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.stats
  }
}

export default connect(mapStateToProps)(Stats)