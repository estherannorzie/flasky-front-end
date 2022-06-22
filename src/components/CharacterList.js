import React from "react";
import Character from "./Character.js";
import PropTypes from "prop-types";
// i can use props here, since characters is a property of CharacterList
const CharacterList = (props) => {
  const characterComponents = props.characters.map((character) => {
    return (
      <Character
        key={character.id}
        name={character.name}
        age={character.age}
        nationality={character.nationality}
        hairColor={character.hairColor}
        occupation={character.occupation}
        isAlive={character.isAlive}
      />
    );
  });
  return <div>{characterComponents}</div>;
};

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default CharacterList;
