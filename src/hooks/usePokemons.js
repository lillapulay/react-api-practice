import React, {useEffect, useState} from "react";

function usePokemons() {
  const [ pokemons, setPokemons ] = useState([]);
  const [ error, setError ] = useState(null);
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/"; // Add ?limit=150 etc. for more

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      /* Note: typeof cannot return 'array', as it is not a simple type in JS
      'results' is an array in the API, nested inside the response object */
      setPokemons(data.results); 
    } catch(error) {
        setError(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  return [error, pokemons];
}

export default usePokemons;