import React, { createContext, useState } from 'react';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import MOCK_DATA from '../mock';

export const PokemonContext = createContext();
const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    const findPoke = selectedPokemon.find(function (sameId) {
      if (sameId.id === pokemon.id) {
        return true;
      } else {
        return false;
      }
    });

    const newPokemon = [...selectedPokemon, pokemon];
    setSelectedPokemon(newPokemon);
  };

  const removePokemon = (pokemon) => {
    const deletePokemon = selectedPokemon.filter(function (sameId) {
      if (sameId.id === pokemon.id) {
        return false;
      } else {
        return true;
      }
    });
    setSelectedPokemon(deletePokemon);
  };
  return (
    <>
      <Dashboard
        selectedPokemon={selectedPokemon}
        onRemovePokemon={removePokemon}
      />
      <PokemonList pokemonList={MOCK_DATA} onAddPokemon={addPokemon} />
    </>
  );
};

export default Dex;
