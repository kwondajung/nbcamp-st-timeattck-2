import React, { useContext } from 'react';
import styled from 'styled-components';
import { PokemonContext } from '../pages/Dex';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ pokemon, isSelected }) => {
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext);
  const navigate = useNavigate();

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
    <Card
      onClick={() => {
        navigate(`/pokemon-detail?id=${pokemon.id}`);
      }}
    >
      <img src={pokemon.img_url} alt={pokemon.name} />
      <p>No.{pokemon.id}</p>
      <p>{pokemon.name}</p>
      {isSelected ? (
        <Button
          onClick={(e) => {
            removePokemon(pokemon);
            e.stopPropagation();
          }}
        >
          삭제
        </Button>
      ) : (
        <Button
          onClick={(e) => {
            addPokemon(pokemon);
            e.stopPropagation();
          }}
        >
          추가
        </Button>
      )}
    </Card>
  );
};

export default PokemonCard;

const Card = styled.div`
  background-color: #ececec;
  text-align: center;
  display: block;
  height: 260px;
`;
const Button = styled.button``;
