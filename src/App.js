import React from 'react';
import './styles/main.scss';
import Navigation from './ui-components/Navigation';
import SearchBar from './ui-components/SearchBar';

function App() {
  return (
    <div className="App">
      <Navigation />
      <SearchBar />
    </div>
  );
}

export default App;
