import React from "react";
import NavBar from "./components/NavBar.js";
import { Header, Footer } from "./components/componentsPort.js";
import { Exercises } from "./components/Excercises/Exercises.js";
import "./App.css";
import { Container, Grid } from "@material-ui/core";

function App() {
  return (
    <Grid
      className="App"
      style={{ backgroundColor: "red" }}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Header />
      <Exercises />
      <Footer />
    </Grid>
  );
}

export default App;
