import "../App.js";
import "./Character.css";

const Character = (props) => {
  return (
    <div>
      <h2 className="character__name">Name: {props.name}</h2>
      <ul>
        <li>Age: {props.age}</li>
        <li>Nationality: {props.nationality}</li>
        <li>Hair Color: {props.hairColor}</li>
        <li>Occupation: {props.occupation}</li>
        <li>Are they alive?: {props.alive ? "Yes" : "No"}</li>
      </ul>
    </div>
  );
};

export default Character;
