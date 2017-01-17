import React, { Component } from 'react';
import axios from 'axios';
//import { Link } from 'react-router';

class Header extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className="App-header">
        <h2>Parks and Rec.</h2>
        <ul>
          <li>
            "{this.props.ronSwanson}" - Ron Swanson
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
