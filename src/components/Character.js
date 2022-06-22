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

  return (
    <div>
      <h2 className="character__name">Name: {props.name}</h2>
      <ul>
        <li>Age: {props.age}</li>
        <li>Nationality: {props.nationality}</li>
        <li>Hair color: {props.hairColor}</li>
        <li>Occupation: {props.occupation}</li>
        {/* removed props from link 18 so it could match the state in line 8 */}
        <li>Are they alive?: {isAlive ? "Yes" : "No"}</li>
      </ul>
      <button onClick={toggleLifeStatus}>Toggle Life Status</button>
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
