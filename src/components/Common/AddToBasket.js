import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { addToBasket } from '../../Redux/Actions/Actions';

class AddToBasket extends Component{
  render(){
    const { addToBasket, product_Id } = this.props
    return(
      <button className="addToBasket-Button" onClick={() => addToBasket(product_Id)}>ADD TO BASKET</button>
    )
  }
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({addToBasket}, dispatch);
}

export default connect(state => state,mapDispatchToProps)(AddToBasket);