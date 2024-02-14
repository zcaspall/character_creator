import React, { useState, useEffect } from 'react';
import CharacterDetails from './CharacterDetails';
import HealthBar from '@/components/Healthbar';

type Character = {
  id: number;
  name: string;
  currentHealth: number;
  maxHealth: number;
};

type HealthEditorProps = {
  character: Character;
  onHealthChange: (characterId: number, newHealth: number) => void;
};

function HealthEditor({ character, onHealthChange }: HealthEditorProps) {
  const [newHealth, setNewHealth] = useState(character.currentHealth);

  const handleHealthChange = () => {
    onHealthChange(character.id, newHealth);
  };

  return (
    <div>
      <input type="number" value={newHealth} onChange={e => setNewHealth(Number(e.target.value))} />
      <button onClick={handleHealthChange}>Update Health</button>
    </div>
  );
}

export default function DungeonMasterView() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [gameLog, setGameLog] = useState<string[]>([]);

  useEffect(() => {
    // Replace these with your actual data fetching logic
    fetch('/api/characters')
      .then(response => response.json())
      .then(data => setCharacters(data));

    fetch('/api/gameLog')
      .then(response => response.json())
      .then(data => setGameLog(data));
  }, []);

  const handleHealthChange = (characterId: number, newHealth: number) => {
    // Replace this with your actual logic to update a character's health
    setCharacters(characters.map(character =>
      character.id === characterId ? { ...character, currentHealth: newHealth } : character
    ));
  };

  return (
    <div>
      <h1>Dungeon Master View</h1>
      {characters.map(character => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <HealthBar currentHealth={character.currentHealth} maxHealth={character.maxHealth} />
          <HealthEditor character={character} onHealthChange={handleHealthChange} />
          <button onClick={() => setSelectedCharacter(character)}>View Details</button>
        </div>
      ))}
      {selectedCharacter && <CharacterDetails character={selectedCharacter} />}
      <h2>Game Log</h2>
      <ul>
        {gameLog.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
}
