import React, { Component } from 'react';
//import { Link } from 'react-router';

class Header extends Component {
//inserts the Ron Swanson Quote via props. The empty divs are a styled icon.
  render() {
    return(
      <div className="App-header header">
        <h1>Parks and Rec.
          <div className="icon-border">
            <div className="icon-inner"></div>
          </div>
        </h1>
        <h4>"{this.props.ronSwanson}" <br />- <strong>Ron Swanson</strong></h4>
      </div>
    );
  }
}

export default Header;
