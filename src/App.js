import React from 'react';
import './App.css';
import Issue_create from './ORM Actions/Issue_create';
import Ormspinner from './ORM Actions/OrmSpinner';
import { SSRProvider, useIsSSR, useSSRSafeId } from '@react-aria/ssr';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import axios from 'axios';
import AddOpen from './ORM Actions/AddOpen';
import ActionPage from './ORM Actions/ActionPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Issue_create />} /> 
          <Route path="/addopen" element={<AddOpen />} /> 
          <Route path="/Action" element={<ActionPage/>} />
        </Routes>
      </Router>
    
    </div>     
  );
}

export default App;
