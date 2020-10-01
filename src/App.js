import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
     //BEM Naming convention for styling
    <div className="app">
    {/*Soko is kind of African Amazon*/}
      {/*<h1>Hello Justine Robert, let's see you build Soko store</h1>*/
      {/* Render Header */}
      <Header/>
      {/* Home */}
    </div>
  );
}

export default App;
