const axios = require('axios');

function tenorGif(api){
  let gif = `https://api.tenor.com/v1/trending?key=${api}&limit=20&local=en_US`
  return axios.get(gif)
    .then(r => {
      return r.data;
    })
    .catch(error => {
      console.warn(error)
    });
}

module.exports ={
  tenorGif
}