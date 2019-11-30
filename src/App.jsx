import React from 'react';
import './App.scss';

import Header from './template/header/Header';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
