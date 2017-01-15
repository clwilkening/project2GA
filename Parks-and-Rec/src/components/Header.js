import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return(
      <div className="App-header">
        <h2>Parks and Rec.</h2>
        <ul>
          <li>
            <Link
              to="/"
              activeOnlyWhenExact
              activeClassName="active"
            >
              Home
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
