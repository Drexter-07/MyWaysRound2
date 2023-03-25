// src/App.js
import React, { useState, useEffect } from 'react';
import { fetchCharacters } from './api';
import CharacterCard from './characterCard';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [sortType, setSortType] = useState('id');

  useEffect(() => {
    async function fetchData() {
      const characters = await fetchCharacters();
      setCharacters(characters);
      setFilteredCharacters(characters);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const sortedCharacters = [...characters].sort((a, b) => {
      if (sortType === 'name') {
        return a.name.localeCompare(b.name);
      }
      return a.id - b.id;
    });

    setFilteredCharacters(sortedCharacters);
  }, [sortType, characters]);

  const handleSearch = (e) => {
    setSearch(e.target.value);

    if (e.target.value === '') {
      setFilteredCharacters(characters);
    } else {
      const searchedCharacters = characters.filter((character) =>
        character.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredCharacters(searchedCharacters);
    }
  };

  return (
    <div className="app">
      <h1>Disney Characters</h1>
      <div className="controls">
        <input
          type="text"
          placeholder="Search characters..."
          value={search}
          onChange={handleSearch}
        />
        <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
          <option value="id">Sort by ID</option>
          <option value="name">Sort by Name</option>
        </select>
      </div>
      <div className="character-grid">
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id}
          character={character} />
        ))}
      </div>
    </div>
  );
}

export default App;