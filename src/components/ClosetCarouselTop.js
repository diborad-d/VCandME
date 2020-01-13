import React, { Component } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Tabs from "@material-ui/core/Tabs";
import Dialog from "./Dialog/Dialog";
import axios from "axios";

let tutorialSteps1 = [
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

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 600,
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  img: {
    overflow: "hidden",
    display: "block",
    width: "100%"
  },
  title: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  }
}));

export default function TextMobileStepper() {


  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  let maxSteps = tutorialSteps1.length;

  const [ dateWorn, setDateWorn ] = React.useState();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  let currentUser = localStorage.getItem("currentUser");
  let userTops = [];
  let garmentData;
  

  const pullTops = () => {
    axios.get("http://localhost:4000/api/get-tops/" + currentUser).then(function (res) {
        userTops = res;
        console.log(userTops);
        tutorialSteps1 = [];

        for( let i=0; i<userTops.data.length; i++) {
          let label = userTops.data[i].brand + "_" + userTops.data[i].color + "_" + userTops.data[i].type;
          let imgPath = userTops.data[i].picture;
          let oneTop = {
            label: label,
            imgPath: imgPath
          };
          tutorialSteps1.push(oneTop);
        }
        console.log(tutorialSteps1);
        maxSteps = tutorialSteps1.length;
        
      }).catch(function (error) {
          console.log(error);
      })    
  }


  const getGarmentData = () => {
    axios.get("http://localhost:4000/api/get-tops/" + currentUser).then(function (res) {
      userTops = res;
      let id = userTops.data[activeStep]._id;
      console.log(id);
      
      axios.get("http://localhost:4000/api/getGarmentData/" + id).then(function (result){
        console.log(result);
        let peopleSeen = result.data[0].peopleSeen;
        let dateWorn = result.data[0].dateWorn;
        let events = result.data[0].events;
        garmentData = { peopleSeen, dateWorn, events };
        console.log(garmentData);
      })
    }).catch(function (error){
      console.log(error);
    })
    
  }


  return (
    <div className={classes.root}>
      <Paper square>
        <Tabs>
          {/* <Typography className={classes.title}>Your Tops</Typography> */}
          <Dialog></Dialog>
          <button className="btn btn-primary" color="inherit" onClick={pullTops}>Get Your Tops</button>
          <button className="btn btn-primary" color="inherit" onClick={getGarmentData}>Get Current Top's Info</button>
        </Tabs>
      </Paper>
      <img className={classes.img} src={tutorialSteps1[activeStep].imgPath} alt={tutorialSteps1[activeStep].label} />
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
  
}

