import React from 'react';
import './styles/main.scss';
import Navigation from './ui-components/Navigation';
import SearchBar from './ui-components/SearchBar';
import Card from './ui-components/Card';
import SingleDrink from './ui-components/SingleDrink';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="search-wrapper">
          <SearchBar />
      </div>
      <div className="holiday-drinks bg-white py-5">
        <div className="container">
          <div className="d-flex justify-content-center">
            <h3>Holiday Drinks</h3>
          </div>
          <div className="d-flex justify-content-center flex-wrap">
            <SingleDrink/>
            <SingleDrink/>
            <SingleDrink/>
            <SingleDrink/>
            <SingleDrink/>
          </div>
        </div>
      </div>
      <div className="trending-recipes py-5">
        <div className="container">
          <div className="d-flex justify-content-center">
            <h3>Holiday bites</h3>
          </div>
          <div className="d-flex justify-content-center">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
