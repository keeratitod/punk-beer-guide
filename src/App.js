import "./App.css";
import { useEffect, useState } from "react";

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
