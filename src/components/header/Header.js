import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css'

class Header extends Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div className="Header">
        <p>Gif Store</p>
        <Link to="/Cart">Cart</Link>
      </div>
    )
  }
}

export default Header;