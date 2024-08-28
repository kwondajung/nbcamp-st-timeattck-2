import React from 'react';
import styled from 'styled-components';
import PokemonCard from './PokemonCard';

const Dashboard = ({ selectedPokemon, onRemovePokemon }) => {
  return (
    <DashboardContainer>
      <h2>대시보드</h2>
      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <div>
          {selectedPokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={{
                id: pokemon.id,
                name: pokemon.korean_name,
                img_url: pokemon.img_url,
              }}
              onRemove={() => {
                onRemovePokemon(pokemon);
              }}
              isSelected={true}
            />
          ))}
        </div>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div``;
