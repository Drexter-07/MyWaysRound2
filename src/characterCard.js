import React from 'react';

function characterCard({character})
{
    return(
        <div className="character-card">
            <img src={character.image} alt={character.name}/>
            <h2>{character.name}</h2>
            <a href={character.sourceUrl}>Source</a>
        </div>
    );
}

export default characterCard;