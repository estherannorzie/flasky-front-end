import Character from "./Character.js";

const CharacterList = (props) => {
  const characterComponents = props.character.map((character) => {
    return <Character />;
  });
  return (
    <div>
      <h1>Fire Emblem Awakening Characters</h1>
      {characterComponents}
    </div>
  );
};

export default CharacterList;
