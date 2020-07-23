import React from 'react';
import almonds from './AlmondsHamirMahal.png';
import './App.css';

function App() {
  const dailyTotal = [];
  let url = 'https://api.nal.usda.gov/fdc/v1/food';
  url += '/169991?api_key=DEMO_KEY';
  fetch(url).then(r => r.json()).then(c => {
    console.log(c);
    console.log(c.foodNutrients);
    c.foodNutrients.forEach(foodNutrient => {
      dailyTotal.push({
        [foodNutrient.nutrient.name]: foodNutrient.amount
      });
    });
    console.log(dailyTotal);
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={almonds} className="App-logo"
          alt="Almonds from Hamir" />
        <p>
          Your daily totals are below.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
