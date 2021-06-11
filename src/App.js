import React from "react";
import "./styles.css";
import Home from "./page/Home/Home";
import Zoo from "./page/Zoo/Zoo";
import About from "./page/About/About";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import Header from "./Header";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} />
        <Route exact path="/zoo" render={props => <Zoo {...props} />} />
        <Route exact path="/login" render={props => <Login {...props} />} />
        <Route exact path="/register" render={props => <Register {...props} />} />
      </Switch>
    </div>
  );
}
