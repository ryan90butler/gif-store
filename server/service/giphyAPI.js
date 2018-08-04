const axios = require('axios');

function getGif(api){
  let gif = `api.giphy.com/v1/gifs/random?&api_key=${api}`
  return axios.get(gif)
    .then(r => {
      return r.data;
    })
    .catch(error => {
      console.warn(error)
    });
}

module.exports ={
  getGif
}