import "../App.js";
import "./Character.css";
import PropTypes from "prop-types";

const Character = (props) => {
  // const [hairColor, setHairColor] = useState(props.hairColor);
  // callback function
  // const changeHairColor = (event) => {
  //   setHairColor(event.target.value);
  // };
  const toggleLifeStatus = () => {
    props.lifeStatusCallback(props.id);
  };

  const deleteCharacter = () => {
    props.deleteCharacterCallback(props.id);
  };

  return (
    <div>
      <h2 className="character__name">Name: {props.name}</h2>
      <ul>
        <li>Age: {props.age}</li>
        <li>Nationality: {props.nationality}</li>
        {/* <li>Hair color: {hairColor}</li> */}
        <li>Hair color: {props.hairColor}</li>
        <li>Occupation: {props.occupation}</li>
        <li>Are they alive?: {props.isAlive ? "Yes" : "No"}</li>
      </ul>
      <button onClick={toggleLifeStatus}>Toggle Life Status</button>
      <button onClick={deleteCharacter}>Delete</button>
      {/* <input
        type="text"
        value={hairColor}
        onChange={(event) => {
          setHairColor(event.target.value);
        }}
      ></input> */}
    </div>
  );
};

Character.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  nationality: PropTypes.string.isRequired,
  hairColor: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  isAlive: PropTypes.bool.isRequired,
  lifeStatusCallback: PropTypes.func.isRequired,
  deleteCharacterCallback: PropTypes.func.isRequired,
};

export default Character;
