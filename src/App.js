import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrimarySearchAppBar from "./Components/HRnavbar";
import Route from "react-router-dom/Route";
import Admin from "./Components/HRtable2";
import Consumer from "./Components/MultiSelect";
import Container from "@material-ui/core/Container";
import Login from "./Login";
import HRdashboard from "./Components/HRdashboard";
import EnhancedTable from "./Components/HRtable";
import Cards from "./Components/Cards"
import DenseAppBar from "./Components/NewUserfromLink";
import { selectIntern } from "./actions"




function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Login" exact component={Login} />
          <Route path="/HRnavbar" exact component={PrimarySearchAppBar} />
          <Route path="/HRdashboard" exact component={HRdashboard} />
          <Route path="/HRtable2" exact component={Admin} />
          <Route path="/Cards" exact component={Cards} />
          <Route path="/NewUserfromLink" exact component={DenseAppBar} />



        </Switch>
        {/* <PrimarySearchAppBar />
      <div>
        <EnhancedTable />
      </div>
      <Container maxWidth="sm"><Consumer /></Container> */}
      </div>
    </Router>
  );
}

export default App;
