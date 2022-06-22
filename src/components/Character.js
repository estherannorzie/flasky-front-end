import "../App.js";
import "./Character.css";
import PropTypes from "prop-types";

const Character = (props) => {
  return (
    <div>
      <h2 className="character__name">Name: {props.name}</h2>
      <ul>
        <li>Age: {props.age}</li>
        <li>Nationality: {props.nationality}</li>
        <li>Hair color: {props.hairColor}</li>
        <li>Occupation: {props.occupation}</li>
        <li>Are they alive?: {props.alive ? "Yes" : "No"}</li>
      </ul>
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
