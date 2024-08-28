import React from 'react';
import { useSearchParams } from 'react-router-dom';
import MOCK_DATA from '../mock';

const PokemonDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsId = Number(searchParams.get('id'));

  const pokemonList = MOCK_DATA;
  const newPokemon = pokemonList.find(function (findPoke) {
    return findPoke.id === paramsId;
  });
  //   console.log(findPoke);
  return;
};

export default PokemonDetail;
