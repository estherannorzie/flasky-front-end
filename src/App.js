import "./App.css";
import "./components/Character.js";
import Character from "./components/Character.js";
import CharacterList from "./components/CharacterList";

function App() {
  return (
    <div>
      <h1>Video Game Characters</h1>
      <CharacterList />
    </div>
  );
}

export default App;
