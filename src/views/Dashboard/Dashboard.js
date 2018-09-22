import React, { Component } from 'react';
import './Dashboard.css';
import SearchBar from '../../components/SearchBar.js';
import Header from '../../components/header/Header.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getProducts, getProduct } from '../../Redux/Actions/Actions';
import AddToBasket from '../../components/Common/AddToBasket';

class Dashboard extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
  }

    componentDidMount(){
      this.props.getProducts()
      .then(()=>{
          this.setState({
              isLoaded:true,
          });
      })
  }

    handleChange(e){
      this.setState({
        [e.target.name]: e.target.value
      })
    }

  render(){
    const items = this.props.products.map((items) =>(
      <div className="items" key={items.product_id}>
      <Link to="/detail">
        <div onClick={()=>{this.props.getProduct(items)}}>
        <p className="name">{items.name}</p>
        <img src={items.img}/>
        <p className="price">${items.price}</p>
        </div>
      </Link>
      <AddToBasket product_Id = {items.product_id} />
      </div>
    ))
    return(
      <div>
        <Header/>
        <SearchBar/>
        <div className="item-container">
        {items}
        </div>
        </div>
    )
  }
}

function mapStateToProps({products}){
	return {products};
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({getProducts, getProduct}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);