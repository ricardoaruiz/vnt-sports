import React from 'react';
import './App.scss';

import Spinner from './components/spinner/Spinner';
import Toast from './components/toast/Toast';
import Header from './template/header/Header';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Spinner />
      <Toast dismiss="2000"/>
      <Header />
      <Routes />
    </div>
  );
}

export default App;
