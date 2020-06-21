import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Colomn from './Components/Colomn';
import {Route } from 'react-router-dom';
import MainTable from './Components/MainTable';


const App = () => {
  return (
    <div className="App">
    <Sidebar />
    <Route exact path='/' component={MainTable}/>
    <Route path='/colomn' component={Colomn}/>
    </div>
  );
}

export default App;
