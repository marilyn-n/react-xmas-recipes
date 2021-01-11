import React from 'react';
import './styles/main.scss';
import Navigation from './ui-components/Navigation';
import SearchBar from './ui-components/SearchBar';
import Card from './ui-components/Card';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <SearchBar />
      </div>
      <div className="container recipes d-flex justify-content-center">
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}

export default App;
