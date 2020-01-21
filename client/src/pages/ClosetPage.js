import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, IconButton, Grid, Paper, Tab, Tabs } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import ArticleCarouselItem from "../components/ArticleCarouselItem";
import ClosetCarousel from "../components/ClosetCarousel";
import closetItemCard from "../components/closetItemCard";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
// import TextMobileStepperTop from "../components/ClosetCarouselTop";
// import ClosetCarousleBottom from "../components/ClosetCarouselBottom";
import TranferButtons from "../components/TransferButtons";
import Img from "react-image";

const defaultGarment = { picture: "https://www.graphicsprings.com/filestorage/stencils/7a0dcc38c57d7746e456c1c6af88b735.png?width=500&height=500", brand: "N/A" };

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
  const [tops, setTops] = React.useState([defaultGarment]);
  const [bottoms, setBottoms] = React.useState([defaultGarment]);
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
        console.log("bottoms", res.data);
        setBottoms(res.data.length > 0 ? res.data : [defaultGarment]);
      })
      .catch(
        function(error) {
          console.log("bottoms error:", error);
        },
        [defaultGarment]
      );

    // get tops
    axios
      .get("http://localhost:4000/api/get-tops/" + currentUser)
      .then(function(res) {
        console.log("tops", res.data);
        setTops(res.data.length > 0 ? res.data : [defaultGarment]);
      })
      .catch(function(error) {
        console.log("tops error:", error);
      });
  }, [defaultGarment]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Grid container>
        <Grid leftGrid sm spacing={3} style={style.paper}>
          <Img src={defaultGarment.picture} />
        </Grid>

        <TranferButtons />
        <TranferButtons />
        <Grid topRightGrid sm style={style.paper}>
          <ClosetCarousel carouselItems={tops} title={"Your Tops"} />
          <Divider />
          <Grid bottomRightGrid sm>
            <ClosetCarousel carouselItems={bottoms} title={"Your Bottoms"} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
