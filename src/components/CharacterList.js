import React from "react";
import Character from "./Character.js";

const CharacterList = (props) => {
  const characterComponents = props.characters.map((character) => {
    return <Character />;
  });
  return <div>{characterComponents}</div>;
};

export default CharacterList;
