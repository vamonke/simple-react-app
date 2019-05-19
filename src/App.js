import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

import Home from './Home';
import './App.css';

function App() {
  return (
    <Router>
      <CssBaseline />
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Users
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="container">
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;