import React from 'react';
import styled from 'styled-components';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemonList, onAddPokemon }) => {
  //   console.log(pokemonList); // 불러오는 거 확인
  return (
    <ListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={{
            id: pokemon.id,
            name: pokemon.korean_name,
            img_url: pokemon.img_url,
          }}
          onAdd={() => {
            onAddPokemon(pokemon);
          }}
          isSelected={false}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;

const ListContainer = styled.div``;
