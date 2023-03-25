import React from 'react';

function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <a href={character.url} target="_blank" rel="noopener noreferrer">
        More Info
      </a>
    </div>
  );
}

export default CharacterCard;