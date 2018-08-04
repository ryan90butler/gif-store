import React, { Component } from 'react';
import axios from 'axios';
import './Dashboard.css';

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      gifs: []
    }
  }

  componentDidMount(){
    axios.get(`/api/get-trending`)
      .then(r => {
        this.setState({
          gifs: r.data.results
        })
      })
  }
  render(){
    const gifs = this.state.gifs.map((gif,i) =>(
      <div className="trending-gifs" key={i}>
        <img src={gif.media[0].gif.url}/>
      </div>
    ))
    debugger
    console.log(this.state.gifs)
    return(
      <div>
        Dashboard
        {gifs}
        </div>
    )
  }
}

export default Dashboard;