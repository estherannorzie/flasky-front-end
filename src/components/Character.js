import "../App.js";
import "./Character.css";

function Character() {
  const chrom = {
    name: "Chrom",
    age: 21,
    nationality: "Ylisse",
    hairColor: "Blue",
    occupation: "Exalt",
    isCool: true,
  };

  return (
    <div>
      <h2 className="character__name">Name: {chrom.name}</h2>
      <ul>
        <li>Age: {chrom.age}</li>
        <li>Nationality: {chrom.nationality}</li>
        <li>Hair Color: {chrom.hairColor}</li>
        <li>occupation: {chrom.occupation}</li>
        <li>Are they cool?: {chrom.isCool ? "Yes" : "No"}</li>
      </ul>
    </div>
  );
}

export default Character;
