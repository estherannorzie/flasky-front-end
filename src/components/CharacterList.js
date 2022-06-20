import React from "react";
import Character from "./Character.js";

const CharacterList = (props) => {
  const characterComponents = props.characters.map((character) => {
    return (
      <Character
        name={character.name}
        age={character.age}
        nationality={character.nationality}
        hairColor={character.hairColor}
        occupation={character.occupation}
        alive={character.alive}
      />
    );
  });
  return <div>{characterComponents}</div>;
};

export default CharacterList;
