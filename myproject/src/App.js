import React from 'react';
import './App.css';
import Issue_create from './ORM Actions/Issue_create';
import Ormspinner from './ORM Actions/OrmSpinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Changed 'BrowserRouter as Routes' to 'BrowserRouter as Router'

import AddOpen from './ORM Actions/AddOpen';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes> {/* Changed 'Routes' to 'Switch' */}
          <Route path="/" element={<Issue_create />} /> {/* Changed 'index' to 'path' */}
          <Route path="/addopen" element={<AddOpen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
