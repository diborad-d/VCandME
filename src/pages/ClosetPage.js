import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, IconButton, Grid, Paper, Tab, Tabs } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import ArticleCarouselItem from "../components/ArticleCarouselItem";
import ClosetCarousel from "../components/ClosetCarousel";
import closetItemCard from "../components/closetItemCard";
import Divider from "@material-ui/core/Divider";
import TranferButton from "../components/TranferButton";

const tops = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    label: "Bird",
    imgPath: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    label: "Bali, Indonesia",
    imgPath: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    imgPath: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    label: "Goč, Serbia",
    imgPath: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
  }
];
const bottoms = [
  {
    label: "Bali, Indonesia",
    imgPath: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    imgPath: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    label: "Goč, Serbia",
    imgPath: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
  }
];
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
  const topBtnStyles = {
    display: "flex",
    flexDirection: "row",
    height: "50px",
    width: "50px",
    marginTop: "20%"
  };
  const bottomBtnStyles = {
    display: "flex",
    flexDirection: "row",
    height: "50px",
    width: "50px",
    marginTop: "100%"
  };

  return (
    <div>
      <Grid container>
        <Grid item leftGrid sm spacing={3} style={style.paper}>
          <Paper square>
            <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange} aria-label="disabled tabs example">
              <Tab label="Article Deatials" />
              <Tab label="Last Worn" />
              <Tab label="Goes With" />
            </Tabs>
          </Paper>
          <closetItemCard />
        </Grid>
        <Grid container style={topBtnStyles}>
          <Grid item>
            <TranferButton />
          </Grid>

          <Grid item style={bottomBtnStyles}>
            <TranferButton />
          </Grid>
        </Grid>
        <Grid item topRightGrid sm spacing={3} style={style.paper}>
          <Tabs>
            <ClosetCarousel carouselItems={tops} title={"Your Tops"} />
          </Tabs>
          <Divider />
          <Grid bottomRightGrid sm spacing={3}>
            <Tabs>
              <ClosetCarousel carouselItems={bottoms} title={"Your Bottoms"} />
            </Tabs>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
