import "./App.css";
import "./components/Character.js";
import CharacterList from "./components/CharacterList";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([
    {
      id: 1,
      name: "Chrom",
      age: 21,
      nationality: "Ylisse",
      hairColor: "Blue",
      occupation: "Exalt of Ylisse",
      isAlive: true,
    },
    {
      id: 2,
      name: "Emmeryn",
      age: 27,
      nationality: "Ylisse",
      hairColor: "Blonde",
      occupation: "Exalt of Ylisse",
      isAlive: false,
    },
    {
      id: 3,
      name: "Lissa",
      age: 17,
      nationality: "Ylisse",
      hairColor: "Blonde",
      occupation: "Princess of Ylisse",
      isAlive: true,
    },
  ]);

  const toggleLifeStatus = (id) => {
    console.log("In the toggleLifeStatus function!");
    const newCharacters = [];
    for (const character of characters) {
      if (character.id === id) {
        character.isAlive = !character.isAlive;
      }
      newCharacters.push(character);
    }
    setCharacters(newCharacters);
  };

  return (
    <div>
      <h1>Fire Emblem: Awakening Characters</h1>
      {/* the characters array becomes a property of CharacterList */}
      <CharacterList
        characters={characters}
        lifeStatusCallback={toggleLifeStatus}
      />
    </div>
  );
}

export default App;
