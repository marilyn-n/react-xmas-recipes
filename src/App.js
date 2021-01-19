import React from 'react';
import './styles/main.scss';
import Navigation from './ui-components/Navigation';
import SearchBar from './ui-components/SearchBar';
import Card from './ui-components/Card';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="search-wrapper">
        <div className="container">
          <SearchBar />
        </div>
      </div>
      <div className="recipes bg-white py-5">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h3>Trending Recipes</h3>
            <a href="#">View all</a>
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
