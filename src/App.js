import React, { useState, useEffect } from 'react';
import{BrowserRouter,Link,Route}from'react-router-dom';
import almonds from './AlmondsHamirMahal.png';
import './App.css';

export default function App() {
  let url = 'https://api.nal.usda.gov/fdc/v1/food/';
  const [ dailyTotal , setDailyTotal ] = useState([]);
  const [sixDigitID,setSixDigitID] = useState(169991);
  const add = foodObject =>                          {
    let newTotal = [ ...dailyTotal ];
    foodObject.foodNutrients.forEach( n => {
      for (let i = 0; i < newTotal.length; i++)
        if (newTotal[i].nutrient.id === n.nutrient.id)
          return newTotal[i].amount=Math.round(
          (newTotal[i].amount + n.amount)*1000)/1000;
      n.id && newTotal.push(n);            }        );
    setDailyTotal(newTotal);                         }
  const handleID = e => setSixDigitID(e.target.value);
  const handleSubmit = buttonSubmitEvent => {
    buttonSubmitEvent.preventDefault();
    url += `${sixDigitID}?api_key=DEMO_KEY`;
    fetch(url).then(r => r.json()).then(j => add(j));}
  const listTotal = _ => dailyTotal.map(foodNutrient=>
    <li key={foodNutrient.nutrient.id}>
  {foodNutrient.nutrient.name}: {foodNutrient.amount}
  {foodNutrient.nutrient.unitName}</li>);
  return ( <div className="App">
    <header className="App-header">
      <img src={almonds} className="App-logo"
        alt="Almonds from Hamir" /> <br />
      <form onSubmit={handleSubmit}>
      <input max='999999' min='100000' type='number'
      onChange={handleID} value={sixDigitID} /></form>
      { dailyTotal.length > 0 && <p> Today's total
      nutritional intake is {listTotal()} </p> }
      <br /> <a className="App-link" href=
      "https://github.com/hamirmahal/Nutrient-Tracker"
      rel="noopener noreferrer" target="_blank" > View
      the source material on Hamir Mahal's GitHub </a>
    </header> </div> );                                }