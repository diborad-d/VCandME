import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, IconButton, Grid, Paper, Tab, Tabs } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import ArticleCarouselItem from "../components/ArticleCarouselItem";
import ClosetCarousel from "../components/ClosetCarousel";
import closetItemCard from "../components/closetItemCard";
import Divider from "@material-ui/core/Divider";

// const tops = [
//   {
//     label: "Bali, Indonesia",
//     imgPath: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"
//   },
//   {
//     label: "NeONBRAND Digital Marketing, Las Vegas, United States",
//     imgPath: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"
//   },
//   {
//     label: "Goč, Serbia",
//     imgPath: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
//   }
// ];

// const bottoms = [
//   {
//     label: "Bali, Indonesia",
//     imgPath: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"
//   },
//   {
//     label: "NeONBRAND Digital Marketing, Las Vegas, United States",
//     imgPath: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"
//   },
//   {
//     label: "Goč, Serbia",
//     imgPath: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
//   }
// ];
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
// An array of all the garments in the database. Mock this data
const garments = [
  {
    _id: 0,
    brand: "American Eagle",
    picture: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    dateWorn: Date(),
    topOrBottom: "top"
  },
  {
    _id: 1,
    brand: "American Eagle",
    picture: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    dateWorn: Date(),
    topOrBottom: "top"
  },
  {
    _id: 2,
    brand: "American Eagle",
    picture: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    dateWorn: Date(),
    topOrBottom: "bottom"
  },
  {
    _id: 3,
    brand: "American Eagle",
    picture: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    dateWorn: Date(),
    topOrBottom: "bottom"
  }
];

function getTops() {
  // return db.garments.find({topOrBottom: "top"});
  return garments.filter(garment => garment.topOrBottom === "top");
}

// get the bottoms from that array
function getBottoms() {
  return garments.filter(garment => garment.topOrBottom === "bottom");
}

const getGarments = () => {
  return garments; // later will be return db.garments.find();
};

const getGarment = id => {
  return garments.filter(x => x._id == id); // later will be return db.garments.find(id);
};

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
            <ClosetCarousel carouselItems={getTops()} title={"Your Tops"} />
          </Tabs>
          <Divider/>
          <Grid bottomRightGrid sm>
            <Tabs>
              <ClosetCarousel carouselItems={getBottoms()} title={"Your Bottoms"} />
            </Tabs>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
