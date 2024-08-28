import React, { createContext, useState } from 'react';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import MOCK_DATA from '../mock';

export const PokemonContext = createContext();
const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  return (
    <PokemonContext.Provider value={{ selectedPokemon, setSelectedPokemon }}>
      <Dashboard />
      <PokemonList pokemonList={MOCK_DATA} />
    </PokemonContext.Provider>
  );
};

export default Dex;
