import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Detail.css'

class Detail extends Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div className="Detail">
        <p>Detail</p>
        <Link to="/Dashboard">Back to Dash</Link>
      </div>
    )
  }
}

export default Detail;