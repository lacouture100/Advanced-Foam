import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Fade from '@material-ui/core/Fade';


let animatedHeroLink = "https://www.advfoam.com/wp-content/uploads/2020/09/Logo-min.gif" 
//let animatedHeroLink = 'http://advancedfoam.com/wp-content/uploads/2020/10/onlyLogo.webm';

const words = {
    "studio" : 
    [
        {
            "word": "MOVIE SETS",
            "index": 0
        },
        {
            "word": "TV SETS",
            "index": 1
        },
        {
            "word": "ARCHITECTURAL SHAPES",
            "index": 2
        }
    ],
    "construction" : 
    [
        {
            "word": "MOVIE SETS",
            "index": 0
        },
        {
            "word": "TV SETS",
            "index": 1
        },
        {
            "word": "ARCHITECTURAL DECORATIONS",
            "index": 2
        } 
    ]
}




const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroDynamic: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: theme.spacing(2),
  },
  heroDynamicText: {
    backgroundColor: 'black',
    color: '#FFFFFF',
    align:"center",
    padding: theme.spacing(1)
},
  heroTitles: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse'
      }
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  gif :{
    width : '50%',
    height: 'auto'
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Hero( props ) {

  const classes = useStyles();
  
  //defines which domain the hero is in
  const domain = props.site;
  // sets the initial woed index.
    let index = 0;
    // Set the words that will change in the hero dynamic word space
    const [word,setWord] = useState(words.studio[index].word);
    
    // We set the interval in which we loop through the words
    useEffect(() =>{
       // We need to declare the interval in order to clean up the effect later
        const interval = setInterval(() => {
            // Cycle through words available
            if(index >= words.studio.length-1){
                index=0;
            }
            else {
                index++;
            }
            // Set the word every 2000 milliseconds
                setWord(word =>words.studio[index].word)
        }, 2000);
        // Clear the interval to prevent a memory leak
       return () => clearInterval(interval);
    }, []);

    

  return (
    <React.Fragment>
      <div className={classes.heroContent}>
        {/* Start Hero Titles (Left Side) */}
        
          <Container  md={7} className={classes.heroTitles}>
            <Fade in={true} timeout={500}>
              <Typography variant="h5" component="h3"align="center" color="textPrimary" paragraph >
              We have over 35 years of experience in foam fabrication.
              </Typography>
            </Fade>

            <Fade in={true} timeout={1000}>
              <Typography variant="h5" component="h3"align="center" color="textSecondary" paragraph>
              We bring precision, innovation, creativity, and economy to your project.
              </Typography>
            </Fade>
            <div className={classes.heroButtons}>


              <Grid container spacing={2} justify="center">

              <Fade in={true} timeout={200}>
              <Grid item>
                  <Button variant="contained" color="primary" href="/construction/redicoat">
                    In Stock Today
                  </Button>
                 </Grid>
                </Fade>

                <Fade in={true} timeout={200}>
                  <Grid item>
                    <Button variant="" color="primary" href="/contact">
                      Call us Today
                    </Button>
                  </Grid>
                </Fade>

                <Fade in={true} timeout={400}>
                  <Grid item>
                    <Button variant="outlined" color="primary" href="/about">
                      About
                    </Button>
                  </Grid>
                </Fade>
              </Grid>
            </div>
          </Container>
         {/* End Hero Titles */}

         {/* Start Hero Dynamic Media and Titles (Right Side) */}
          <Container  md={5}>
            <Container className={classes.heroDynamic}>
              <Fade in={true} timeout={600}>

                <img  src={animatedHeroLink}
                          alt =" Advanced Foam main logo"
                          className={classes.gif}>

                </img>
                </Fade>

                <Fade in={true} timeout={1000}>
                <div >
                <Typography variant='h6' component="h3" className={classes.heroDynamicText} >
                 {word}
                </Typography>
                </div>
                </Fade>
            </Container>
          </Container>
        
          {/* End Hero Dynamic Media and Titles (Right Side) */}
      </div>     
    </React.Fragment>
  );
}