import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import EventListItem from './EventListItem';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList(props) {
  const attendees = props.attendees;
  // console.log(attendees);
  const classes = useStyles();

  return (
    <List className={classes.root}>

      {attendees.map((attendee, i) => {
        return(
          <div key={i}>
            <EventListItem>{attendee}</EventListItem>
            <Divider variant="fullWidth" component="li" />

          </div>
        
        )
      })}
      
    </List>
  );
}