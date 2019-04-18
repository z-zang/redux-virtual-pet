import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { setUserName } from '../actions'

class Inventory extends Component {
  render() {
    console.log('Inventory this.props', this.props)
    // const { dispatch } = this.props
    const props = this.props.state
    console.log(props)

    return (
      <div>
        <h3>Items</h3>
        <div className="inventory">
          {props.map((item, i) => (
              <div key={i} className={item}>
                <h4 className={item.perishable == true ? 'perishable' : ''}>{item.name}</h4>
                <sub>{item.flavor}</sub>
                <br/>
                <br/>
                <button>Use</button>
              </div>
            ))}
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    state: state.items
  }
}

export default connect(mapStateToProps)(Inventory)
