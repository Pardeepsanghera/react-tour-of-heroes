import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from './components/Navbar';
import AppRouter from './routers/AppRouter'
const App = () => {
  return (
    <Router>
    <AppRouter />
  </Router>
  );
};
export default App;