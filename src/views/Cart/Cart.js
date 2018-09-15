import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Cart.css'

class Cart extends Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div className="Cart">
        <p>My Cart</p>
        <Link to="/Dashboard">Back to Dash</Link>
      </div>
    )
  }
}

export default Cart;