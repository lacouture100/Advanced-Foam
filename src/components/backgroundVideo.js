
import ReactPlayer from 'react-player'
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Fade from '@material-ui/core/Fade';


const videoURL = "https://youtu.be/RU6XBc08vkk";

// Define the style for each of the components

const useStyles = makeStyles((theme) => ({
  // Styles the main section titles. Cosntruction, Studio, and Packaging.
  Container :{
    margin: theme.spacing(2),

    justifyContent: 'center',
    
},
/* Style the video: 100% width and height to cover the entire window */
Video: {
    margin: theme.spacing(2),

    display: "flex",
    width: "max-width",
    height: "100%"
},
[theme.breakpoints.down('md')]: {
    Video: {
        margin: theme.spacing(2),

        display: "flex",
        minWidth: "300px",
        height: "100%"
    },
}
}));


export default function Banner(props) {

  const [data,setData] = useState(props.data);
  const domain = props.domain;
  const classes = useStyles();const checked = true;

  return (
    <React.Fragment>
      <Fade in={true} timeout={100}>
      <Grid container className={classes.Container}>

          <Grid item >
          <ReactPlayer url={videoURL} playing loop muted className={classes.Video} />

          </Grid>
        </Grid>


          </Fade>
    </React.Fragment>
  );
}

