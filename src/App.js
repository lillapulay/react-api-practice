import './App.css';
import React from 'react';
import usePokemons from './hooks/usePokemons';
import Cards from './components/Cards';

function App() {
  const [error, pokemons] = usePokemons([]);
  return (
    <Cards pokemons={pokemons} />
  );
}

export default App;
