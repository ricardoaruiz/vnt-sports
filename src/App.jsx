import React from 'react';
import './App.scss';

import Spinner from './components/spinner/Spinner';
import Header from './template/header/Header';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Spinner />
      <Header />
      <Routes />
    </div>
  );
}

export default App;
