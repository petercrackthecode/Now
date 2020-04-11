import React from "react";
import {Grid, Button} from "@material-ui/core";
import FastBlackLogo from "../../assets/img/Fast-LogoBlack.svg";

export default (props) => {
  return (
    <Grid
      className="Header"
      container
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <img src={FastBlackLogo} alt="Fast-Logo-Black" />
      <Button className='btn' id='login-btn' variant="contained">Login</Button>
    </Grid>
  );
};
