import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import PlaceToVisit from "./components/PlaceToVisit";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import Support from "./pages/Support";
import Monitoring from "./pages/Monitoring";
import Equipment from "./pages/Equipment";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg2.jpeg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <div>
        <Router>
          <Navbar />

          <Switch>
            <Route path="/" exact component={Header} />
            <Route path="/reports" component={PlaceToVisit} />
            <Route path="/products" component={Monitoring} />
            <Route path="/registerfarmer" component={Reports} />
            <Route path="/information" component={Products} />
            <Route path="/equipments" component={Equipment} />
            <Route path="/support" exact component={Support} />
          </Switch>
        </Router>
        <div className="footer">Developed by Soumadeep ❤ </div>
      </div>
    </div>
  );
}
