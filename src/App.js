import "./App.css";
import DogList from "./components/DogList"

function App() {
  const dogData = [
    {
      name: "Wishbone",
      favoriteToy: "Squeaker",
      chipNumber: "82373",
    },
    {
      name: "Appa",
      favoriteToy: "Ball",
      chipNumber: "29238",
    },
    {
      name: "Jimminy",
      favoriteToy: "Bone",
      chipNumber: "72902",
    },
  ];
   
  return (
    <main>
      <h1>List of Dogs</h1>
      <DogList dogData={dogData} />
    </main>
  );
}

export default App;
