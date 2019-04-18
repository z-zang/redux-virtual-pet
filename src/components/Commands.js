import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { playCatch, goToSleep, eatFood } from '../actions'
import * as utils from '../functions';

class Commands extends Component{
  render() {
    const state = this.props.state
    const props = this.props

    console.log('Commands', this.props)

    return(
      <React.Fragment> 
        <h3>Actions</h3>
        <button onClick={props.eatFood} disabled={utils.foodBtn(state.hunger)}>Eat Food</button>
        <button onClick={props.goToSleep} disabled={utils.sleepBtn(state.hunger)}>Sleep</button>
        <button onClick={props.playCatch} disabled={utils.playCatchBtn(state.hunger, state.health)}>Play Catch</button>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ eatFood, goToSleep, playCatch }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    state: state.stats
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Commands)