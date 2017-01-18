import React, { Component } from 'react';
import axios from 'axios';
//import { Link } from 'react-router';

class Header extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className="App-header header">
        <h1>Parks and
          Rec.
          <div className="icon-border">
            <div className="icon-inner">
            </div>
          </div>
        </h1>
        <h4>"{this.props.ronSwanson}" - <strong>Ron Swanson</strong></h4>
      </div>
    );
  }
}

export default Header;
