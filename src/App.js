import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

/*
async function getBeer() {
  const response = await fetch("https://api.punkapi.com/v2/beers/random", {
    mode: "cors",
  });
  const beerData = await response.json();
  const id = beerData[0].id;
  const name = beerData[0].name;
  const tagline = beerData[0].tagline;
  const description = beerData[0].description;
  const food = beerData[0].food_pairing;
  return id + name + tagline + description + food;
}
*/

function App() {
  const [name, nameSet] = useState(null);
  const [tagline, taglineSet] = useState(null);
  const [description, descriptionSet] = useState(null);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("https://api.punkapi.com/v2/beers/random");
      let beerData = await response.json();
      nameSet(beerData[0].name);
      taglineSet(beerData[0].tagline);
      descriptionSet(beerData[0].description);
    }

    fetchMyAPI();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Punk Beer Guide</h1>
        <h2>{name}</h2>
        <h4>{tagline}</h4>
        <p>{description}</p>
        <a
          className="App-link"
          href="https://punkapi.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Punk API
        </a>
      </header>
    </div>
  );
}

export default App;
