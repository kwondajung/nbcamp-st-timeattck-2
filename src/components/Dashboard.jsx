import React, { useContext } from 'react';
import styled from 'styled-components';
import PokemonCard from './PokemonCard';
import { PokemonContext } from '../pages/Dex';

const Dashboard = () => {
  const { selectedPokemon } = useContext(PokemonContext);
  //   console.log(selectedPokemon);
  return (
    <>
      <h2>대시보드</h2>
      <DashboardContainer>
        {selectedPokemon.length === 0 ? (
          <p>선택된 포켓몬이 없습니다.</p>
        ) : (
          <div>
            {selectedPokemon.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                pokemon={{
                  id: pokemon.id,
                  name: pokemon.name,
                  img_url: pokemon.img_url,
                }}
                onRemove={() => {}}
                isSelected={true}
              />
            ))}
          </div>
        )}
      </DashboardContainer>
    </>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  height: 400px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;
