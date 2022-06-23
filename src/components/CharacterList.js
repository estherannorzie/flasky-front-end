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
      />
    );
  });
  return <div>{characterComponents}</div>;
};

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default CharacterList;
