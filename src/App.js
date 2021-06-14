import "./styles.css";
import Home from "./page/Home/Home";
import Todolist from "./page/Todolist/Todolist";
import About from "./page/About/About";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import Header from "./Header";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ReactGA from 'react-ga'
import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";

const useStyles = makeStyles({});
ReactGA.initialize('UA-199389612-2');

export default function App() {
  const location = useLocation();
  const classes = useStyles();
  useEffect(() => {
    // To Report Page View 
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  return (
    <div className={classes.container}>
      <Header />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} />
        <Route exact path="/todolist" render={props => <Todolist {...props} />} />
        <Route exact path="/login" render={props => <Login {...props} />} />
        <Route exact path="/register" render={props => <Register {...props} />} />
      </Switch>
    </div>
  );
}

