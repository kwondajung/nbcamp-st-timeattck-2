import React from 'react';
import styled from 'styled-components';

const PokemonCard = ({ pokemon, onAdd, onRemove, isSelected }) => {
  return (
    <Card>
      <img src={pokemon.img_url} alt={pokemon.name} />
      <p>{pokemon.name}</p>
      {isSelected ? (
        <Button
          onClick={() => {
            onRemove(pokemon);
          }}
        >
          삭제
        </Button>
      ) : (
        <Button
          onClick={() => {
            onAdd(pokemon);
          }}
        >
          추가
        </Button>
      )}
    </Card>
  );
};

export default PokemonCard;

const Card = styled.div``;
const Button = styled.button``;
