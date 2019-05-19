import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

import Home from './Home';
import User from './User';

import style from './css/App.module.css';

function App() {
  return (
    <Router>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Link to="/" underline="none">
            <Typography variant="h6" color="inherit">
              User Profiles
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <div className={style.container}>
        <Route exact path="/" component={Home} />
        <Route path="/user/:id" component={User} />
      </div>
    </Router>
  );
}

export default App;