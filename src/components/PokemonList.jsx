import React from 'react';
import styled from 'styled-components';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemonList }) => {
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
          onAdd={() => {}}
          isSelected={false}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
`;
