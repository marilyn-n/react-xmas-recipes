import React from 'react';
import './styles/main.scss';
import Navigation from './ui-components/Navigation';
import SearchBar from './ui-components/SearchBar';
import Card from './ui-components/Card';
import Button from './ui-components/Button';
import SingleDrink from './ui-components/SingleDrink';

import thumbnail from './assets/placeholder-image.png';

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
      <div className="explore-more">
        <div className="explore-more__content">
          <span className="explore-more__content--title">Get to know more recipes</span>
          <p className="explore-more__content--paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          </p>
          <Button/>
        </div>
        <div className="explore-more__thumbnail">
          <img src={thumbnail}/>
        </div>
      </div>
    </div>
  );
}

export default App;
