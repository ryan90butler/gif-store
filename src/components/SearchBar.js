import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      search: '',
      results: {}
    }
    this.searchGif = this.searchGif.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  searchGif(){
  axios.get(`/api/search/${this.state.search}`)
    .then(r => {
      console.log(r)
      this.setState({
        results: r,
        search: ''
      });
    })
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(
      <div>
        <form>
          <input name="search" placeholder='hello' value={this.state.search} onChange={this.handleChange} type="text"/>
          <button onClick={this.searchGif}>Search</button>
          </form>
        </div>
    )
  }
}

export default SearchBar;