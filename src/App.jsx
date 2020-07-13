import React from 'react';
import BaseRouter from "./route";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import './App.css'

const App = (props) => {
  return (
        <Router>
            <BaseRouter />
        </Router>
  );
}

export default App;
