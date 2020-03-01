const axios = require('axios')

async function getPokemon(name) {
   const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
   console.log(response);
   return response;
}

module.exports = {
    getPokemon
}