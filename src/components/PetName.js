import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPetName } from '../actions'

class PetName extends Component {
  render() {
    console.log('PetName this.props', this.props)
    const { dispatch } = this.props
    const props = this.props.state

    let input;
    
    let onClick = e => {
      console.log(input.value)
      if (input.value.trim() !== "") {
        dispatch(setPetName(input.value))
      }
    };

    return (
      <div className="names">
        <p>Pet name: {props.petName}</p>
        <div>
          <input type="text" ref={node => (input = node)} />
          <button type="submit" onClick={onClick}>change name</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.names
  }
}

export default connect(mapStateToProps)(PetName);