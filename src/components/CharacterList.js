import React from "react";
import Character from "./Character.js";
import PropTypes from "prop-types";
// use props here, since characters is a property of CharacterList
// i also have access to toggleLifeStatus
const CharacterList = (props) => {
  const characterComponents = props.characters.map((character) => {
    return (
      <Character
        // key lets React render each character with ease
        key={character.id}
        // props now has access to id, important for moving up state
        id={character.id}
        name={character.name}
        age={character.age}
        nationality={character.nationality}
        hairColor={character.hairColor}
        occupation={character.occupation}
        isAlive={character.isAlive}
        // callback prop added, it doesn't live inside of characters which is why we used props.[thing]
        lifeStatusCallback={props.lifeStatusCallback}
        deleteCharacterCallback={props.deleteCharacterCallback}
      />
    );
  });
  return <div>{characterComponents}</div>;
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      nationality: PropTypes.string.isRequired,
      hairColor: PropTypes.string.isRequired,
      occupation: PropTypes.string.isRequired,
      isAlive: PropTypes.bool.isRequired,
    })
  ),
  lifeStatusCallback: PropTypes.func.isRequired,
  deleteCharacterCallback: PropTypes.func.isRequired,
};

export default CharacterList;
