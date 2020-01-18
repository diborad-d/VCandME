import React, { Component } from "react";
import HomeBtn from "../components/HomeBtn";
import EventListItem from "../components/EventListItem";
import OutfitViewer from "../components/OutfitViewer.component";
import OutfitDetails from "../components/OutfitDetails.component";

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import outfits  from "../outfits.json.js";



// maybe fs to read files



export default  class OutfitPage extends Component {
  constructor(props) {
    super(props)

    this.handleOutfitChange = this.handleOutfitChange.bind(this);

    this.state = {
      currentOutfitIndex: 0,
    }
  }

  componentDidMount(){
    console.log("Axios outfit/articles and push to oufit array")
  }


  handleOutfitChange(outfitIndex) {
    console.log(outfitIndex)
    console.log("changed")
    //pull from data base and change state.

    this.setState({
      currentOutfitIndex: outfitIndex,
    })

    //axios with index
    //Top_Id Bottom_Id
    //set set state
  }

  render() {
    let index = this.state.currentOutfitIndex
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">           
          <div> 
            <Grid container spacing={1}>
              <Grid item xs>
             <OutfitViewer 
              outfits={outfits}
              onChange={this.handleOutfitChange}/>
              </Grid>

              <Grid item xs container direction="column" alignItems="flex-end" justify="flex-start">
                <Grid item>
                  <OutfitDetails 
                    currentOutfit={outfits[index]["name"]} //data from state
                    events={outfits[index]["events"]}
                    attendees={outfits[index]["attendees"]}
                    dates={outfits[index]["dates"]}>
                  </OutfitDetails>
                </Grid>
                
              </Grid>
            </Grid>
          </div>
        </Container>
      </React.Fragment>
    )
  }

  

  

 
}
  
