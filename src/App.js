import React  from "react";
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

const useStyles = makeStyles({});
ReactGA.initialize('G-KT3VC27GPY');
ReactGA.pageview(window.location.pathname + window.location.search);

export default function App() {
  const classes = useStyles();
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

