import "../App.js";

function Character() {
  const chrom = {
    name: "Chrom",
    age: 30,
    nationality: "Ylisse",
    hairColor: "Blue",
    occupation: "Exalt",
    isCool: true,
  };

  return (
    <div>
      <h1>Name: {chrom.name}</h1>
      <ul>
        <li>Age: {chrom.age}</li>
        <li>Nationality: {chrom.age}</li>
      </ul>
    </div>
  );
}

export default Character;
