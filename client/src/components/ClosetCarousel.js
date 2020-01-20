import React, { Component } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Tabs from "@material-ui/core/Tabs";
import Dialog from "./Dialog/DialogInput";
import axios from "axios";
// import Dialog from "./Dialog/DialogInput";
import DialogOutput from "./Dialog/DialogOutput";
import DialogAddDate from "./Dialog/DialogAddDate";
import DialogAddEvent from "./Dialog/DialogAddEvent";
import DialogAddPeople from "./Dialog/DialogAddPeople";
import { FormControlLabel, FormGroup } from "@material-ui/core/";
import Checkbox from "@material-ui/core/Checkbox";
import { Input } from "../components/Form";

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

export default function ClosetCarousel(props) {
  const [checked, setChecked] = React.useState(true);
  const [colorSearch, setColorSearch] = React.useState("Color");
  const handleChange = event => {
    setChecked(event.target.checked);
  };
  const pullTops = () => {};
  // props is an object that wraps all propeties that gets passed in to this component.
  const title = props.title;
  const carouselItems = props.carouselItems;
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = carouselItems.length;
  console.log(carouselItems);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Paper square>
        <Tabs>
          <Typography className={classes.title}>{title}</Typography>
        </Tabs>
      </Paper>
      <FormGroup row>
        <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange} value="primary" color="purple" />} label="Filter by Color (Enter Color Below)" />
      </FormGroup>
      <Input name="colorSearch" value={colorSearch} onChange={e => setColorSearch(e.target.value)} />
      <Tabs>
        {/* <Typography className={classes.title}>Your Tops</Typography> */}
        <Dialog></Dialog>
        <button className="btn btn-primary purple" color="inherit" onClick={pullTops}>
          Pull Your Tops
        </button>
        <DialogOutput></DialogOutput>
      </Tabs>
      <img className={classes.img} src={carouselItems[activeStep].picture} alt={carouselItems[activeStep].brand} />
      <Tabs>
        <DialogAddDate></DialogAddDate>
        <DialogAddEvent></DialogAddEvent>
        <DialogAddPeople></DialogAddPeople>
      </Tabs>
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
