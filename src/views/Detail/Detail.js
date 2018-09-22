import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../components/header/Header.js';
import './Detail.css'

class Detail extends Component {
  // constructor() {
  //   super()
  // }
  render(){
    return(
      <div className="Detail">
      <Header/>
        <p>Detail</p>
        <Link to="/Dashboard">Back to Dash</Link>
        <h3>{this.props.product.name}</h3>
        <img src={this.props.product.img}/>
        <p>${this.props.product.price}</p>
        <p>{this.props.product.description}</p>
      </div>
    )
  }
}

function mapStateToProps({product}){
	return {product};
}
// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({addToBasket}, dispatch);
// }
export default connect(mapStateToProps)(Detail);