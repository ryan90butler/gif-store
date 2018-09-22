import React, { Component } from 'react';
import './Dashboard.css';
import SearchBar from '../../components/SearchBar.js';
import Header from '../../components/header/Header.js';
import { connect } from 'react-redux';
import{ Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getProducts } from '../../Redux/Actions/Actions';

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
    console.log(this.props.products)
    const items = this.props.products.map((items) =>(
      <div className="trending-gifs" key={items.product_id}>
      <Link to="/Detail">
        <div onClick={()=>{}}></div>
      </Link>
        <img src={items.img}/>
      </div>
    ))
    return(
      <div>
        <Header/>
        <SearchBar/>
        <div className="gif-container">
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
	return bindActionCreators({getProducts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);