import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div className="Header">
        <p>Gif Store</p>
      </div>
    )
  }
}

export default Header;