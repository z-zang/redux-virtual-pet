import React from 'react';
import { connect } from 'react-redux';
import { setUserName } from '../actions'

const UserName = (state) => {
  console.log('UserName state', state)
  const { dispatch } = state

  let input;

  let onClick = e => {
    console.log(input.value)
    if (input.value.trim() !== "") {
      dispatch(setUserName(input.value))
    }
  };

  return (
    <div className="names">
      <p>User name: {state.state.userName}</p>
      <div>
        <input type="text" ref={node => (input = node)} />
        <button type="submit" onClick={onClick}>change name</button>
      </div>
    </div>

  );
}

const mapStateToProps = (state) => {
  return {
    state: state.names
  }
}

export default connect(mapStateToProps)(UserName)