import "../App.js";
import "./Character.css";
import PropTypes from "prop-types";
import { useState } from "react";

const Character = (props) => {
  // useState is the default when first rendered, lifeStatus changes
  const [isAlive, setIsAlive] = useState(props.isAlive);
  // callback function
  const toggleLifeStatus = () => {
    isAlive ? setIsAlive(false) : setIsAlive(true);
  };

  const [hairColor, setHairColor] = useState(props.hairColor);
  // callback function
  const changeHairColor = (event) => {
    setHairColor(event.target.value);
  };

  return (
    <div>
      <h2 className="character__name">Name: {props.name}</h2>
      <ul>
        {/* props are removed for hairColor and life status since it's already defined in state */}
        <li>Age: {props.age}</li>
        <li>Nationality: {props.nationality}</li>
        <li>Hair color: {hairColor}</li>
        <li>Occupation: {props.occupation}</li>
        <li>Are they alive?: {isAlive ? "Yes" : "No"}</li>
      </ul>
      <button onClick={toggleLifeStatus}>Toggle Life Status</button>
      <input type="text" value={hairColor} onChange={changeHairColor}></input>
    </div>
  );
};

Character.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  nationality: PropTypes.string.isRequired,
  hairColor: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  isAlive: PropTypes.bool.isRequired,
};

export default Character;
