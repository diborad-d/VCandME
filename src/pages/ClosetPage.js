import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, IconButton, Grid, Paper, Tab, Tabs } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Header from "../components/Header.component";
import ArticleCarouselItem from "../components/ArticleCarouselItem";
import ClosetSwipeableTextMobileStepper from "../components/ClosetCarousel";
import closetItemCard from "../components/closetItemCard";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ClosetPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const style = {
    paper: {
      padding: 5,
      margin: 25,
      width: "100%",
      backgroundColor: "lightGray",
      height: "100vh",
      textAlign: "center"
    }
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Header />
      <Grid container >
        <Grid leftGrid sm spacing={3} style={style.paper}>
          <Paper square>
            <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange} aria-label="disabled tabs example">
              <Tab label="Article Deatials" />
              <Tab label="Last Worn" />
              <Tab label="Goes With" />
            </Tabs>
          </Paper>
          <closetItemCard/>
        </Grid>
        <Grid topRightGrid sm style={style.paper}>
          <Tabs>
            <ClosetSwipeableTextMobileStepper />
          </Tabs>
          <Divider/>
          <Grid bottomRightGrid sm>
            <Tabs>
              <ClosetSwipeableTextMobileStepper />
            </Tabs>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
