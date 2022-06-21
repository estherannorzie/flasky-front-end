import React from "react";
import Character from "./Character.js";
import PropTypes from "prop-types";

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

CharacterList.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  hairColor: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  alive: PropTypes.bool.isRequired,
};

export default CharacterList;
