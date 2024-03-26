import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './layout/header';

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
   
  );
}

export default App;





