import "./App.css";
import "./components/Character.js";
import Character from "./components/Character.js";
import CharacterList from "./components/CharacterList";

function App() {
  const characters = [
    {
      id: 1,
      name: "Chrom",
      age: 21,
      nationality: "Ylisse",
      hairColor: "Blue",
      occupation: "Exalt of Ylisse",
      alive: true,
    },
    {
      id: 2,
      name: "Emmeryn",
      age: 27,
      nationality: "Ylisse",
      hairColor: "Blonde",
      occupation: "Exalt of Ylisse",
      alive: false,
    },
    {
      id: 3,
      name: "Lissa",
      age: 17,
      nationality: "Ylisse",
      hairColor: "Blonde",
      occupation: "Princess of Ylisse",
      alive: true,
    }
  ];
  
  return (
    <div>
      <h1>Video Game Characters</h1>
      <CharacterList characters={characters}/>
    </div>
  );
}

export default App;
