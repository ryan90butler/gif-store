import React, { Component } from 'react';
import axios from 'axios';
import './Dashboard.css';
import SearchBar from '../../components/SearchBar.js';
import Header from '../../components/header/Header.js'

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      gifs: [],
      results: ''
    }
    this.searchGif = this.searchGif.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    axios.get(`/api/get-trending`)
      .then(r => {
        this.setState({
          gifs: r.data.results
        })
      })
  }

  searchGif(){
    axios.get(`/api/search/${this.state.search}`)
    }

    handleChange(e){
      this.setState({
        [e.target.name]: e.target.value
      })
    }

  render(){
    const gifs = this.state.gifs.map((gif,i) =>(
      <div className="trending-gifs" key={i}>
      <button>
        <img src={gif.media[0].gif.url}/>
        <button>Details</button>
        </button>
      </div>
    ))
    return(
      <div>
        <Header/>
        <SearchBar/>
        <div className="gif-container">
        {gifs}
        </div>
        </div>
    )
  }
}

export default Dashboard;