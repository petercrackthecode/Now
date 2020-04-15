import React, { useState, useEffect } from "react";
import { Header, Footer } from "./components/componentsPort.js";
import { Exercises } from "./components/Excercises/Exercises.js";
import "./style/App.css";
import { Container, Grid } from "@material-ui/core";

function App() {
  const [screenMode, setScreenMode] = useState("desktop");

  return (
    <Container fixed>
      <Grid
        className="App"
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Header />
        <Exercises />
        <Footer />
      </Grid>
    </Container>
  );
}

export default App;
