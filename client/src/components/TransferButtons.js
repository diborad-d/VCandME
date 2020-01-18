import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Grid, Paper, Tab, Tabs } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
const TranferButton = () => {
  return (
    <div>
      <Grid container>
        <Grid item>
          <Button>
            {" "}
            <ChevronLeftIcon />{" "}
          </Button>
          <Button>
            {" "}
            <ChevronRightIcon />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
export default TranferButton;