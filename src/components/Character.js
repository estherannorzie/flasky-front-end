import "../App.js";

function Character() {
  const chrom = {
    age: 30,
    nationality: "Ylisse",
    hairColor: "Blue",
    occupation: "Exalt",
    isCool: true,
  };

  return (
    <div>
      <li>Age: {chrom.age}</li>
    </div>
  );
}

export default Character;
