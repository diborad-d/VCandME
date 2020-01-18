import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, IconButton, Grid, Paper, Tab, Tabs } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import ArticleCarouselItem from "../components/ArticleCarouselItem";
import ClosetCarousel from "../components/ClosetCarousel";
import closetItemCard from "../components/closetItemCard";
import Divider from "@material-ui/core/Divider";
import axios from "axios";

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

let currentUser = localStorage.getItem("currentUser");

export default function ClosetPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const [tops, setTops] = React.useState([]);
  const [bottoms, setBottoms] = React.useState([]);
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
  React.useEffect(() => {
    // get bottoms
    axios
      .get("http://localhost:4000/api/get-bottoms/" + currentUser)
      .then(function(res) {
        setBottoms(res.data);
      })
      .catch(function(error) {});

    // get tops
    axios
      .get("http://localhost:4000/api/get-tops/" + currentUser)
      .then(function(res) {
        console.log("tops", res.data);
        setTops(res.data);
      })
      .catch(function(error) {});
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Grid container>
        <Grid leftGrid sm spacing={3} style={style.paper}>
          <Grid item xs={12} style={style.paper} justify="center">
            <Tabs>
              <TextMobileStepper />
            </Tabs>
          </Grid>
        </Grid>
        <TranferButton />
        <TranferButton />
        <Grid topRightGrid sm style={style.paper}>
          <Tabs>{tops.length > 0 ? <ClosetCarousel carouselItems={tops} title={"Your Tops"} /> : <Tab label="No Tops" />}</Tabs>
          <Divider />
          <Grid bottomRightGrid sm>
            <Tabs>{tops.length > 0 ? <ClosetCarousel carouselItems={bottoms} title={"Your Bottoms"} /> : <Tab label="No Bottoms" />}</Tabs>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
