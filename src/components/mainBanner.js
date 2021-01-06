import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';


// Set the data for each of the categories. These include the info presented in each of the cards.

const sections = [
	{ 
    title: 'Studio', 
    subtitle : 'TV and Movie Sets',
    url : '/studio',
    content : [
      {
        _id: "theMummy",
        index: 0,
        imgSrc: "https://www.backend.advancedfoam.com/wp-content/uploads/2020/09/mummy_preview.jpg",
        title: "The Mummy",
        production: "Universal Studios",
        link: "/studio/mummy",
        slug: "the-mummy",
        year : "2017"
      },
      {
        _id: "americanHorrorStory",
        index: 1,
        imgSrc: "https://www.backend.advancedfoam.com/wp-content/uploads/2020/09/americanHorror_preview.jpg",
        title: "AHS: Hotel",
        production: "20th Century Fox",
        link: "/studio/american-horror-story-hotel",
        slug: "american-horror-story-hotel",
        year : "2015"
      },
      {
        _id: "starTrek",
        index: 2,
        imgSrc: "https://www.backend.advancedfoam.com/wp-content/uploads/2020/09/starTrek_preview.png",
        title: "Star Trek",
        production: "Paramount Pictures",
        link: "/studio/star-trek",
        slug: "star-trek",
        year : "2009"
      }
    ]
  },
  
  { 
    title: 'Construction', 
    subtitle : 'Architectural Decorations',
    url : '/construction',
    content : [
      {
        _id: "orsini",
        index: 0,
        imgSrc: "https://www.backend.advancedfoam.com/wp-content/uploads/2020/10/orsini.png",
        title: "The Orsini",
        production: "Los Angeles",
        link: "/construction",
        slug: "orsini",
        year : "2009"
    },
    {
        _id: "appfels",
        index: 1,
        imgSrc: "https://www.backend.advancedfoam.com/wp-content/uploads/2020/10/appfels.jpg",
        title: "Apffels Coffee Building",
        production: "Apffels Coffee",
        slug: "appfels",
        link: "/construction",
        year: ""
    },
    {
        _id: "hamner",
        index: 2,
        imgSrc: "https://www.backend.advancedfoam.com/wp-content/uploads/2020/10/HamnerAve.jpg",
        title: "6987-6993 Hamner Ave",
        slug: "hamner",
        production: "Strip Center",
        link: "/construction",
        year: ""
    }
    ]
  },

	 { 
    title: 'Packaging', 
    subtitle : 'Design and Fabrication',
    url : '/packaging',
    content : [
      {
        _id: "polystyrene",
        index: 0,
        imgSrc: "https://www.backend.advancedfoam.com/wp-content/uploads/2020/10/polystyrene_72_shopped.jpg",
        title: "Anti-Impact Foam",
        production: "Custom Fabrication",
        link: "/packaging",
    },
    {
        _id: "polyethylene",
        index: 1,
        imgSrc: "https://www.backend.advancedfoam.com/wp-content/uploads/2020/10/polyethylene_72_shopped.jpg",
        title: "Polystyrene",
        production: "Custom Fabrication",
        link: "/packaging",
    },
    {
        _id: "polyurethane",
        index: 2,
        imgSrc: "https://www.backend.advancedfoam.com/wp-content/uploads/2020/10/polyurethane_72_shopped.jpg",
        title: "Polyurethane",
        production: "Custom Fabrication",
        year: "",
        link: "/packaging",
    }
    ]
  }

]; 

// Define the style for each of the components

const useStyles = makeStyles((theme) => ({
  // Styles the main section titles. Cosntruction, Studio, and Packaging.
  sectionTitles : {
    display: 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    padding : theme.spacing(0)
  },
  sectionGrid: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2, 6, 6),
    
    backgroundColor : '#313131' ,
    [theme.breakpoints.down('md')]: {
			padding: theme.spacing(2),
		  },
  },
  card: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '10px'
  },

  // Styles the main content inside each card, including images and titles
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent:"center"
  },

  // Styles the image inside each card
  cardMedia: {
    paddingTop: '90%', // 16:9
  },

  cardButtons:{
    display: 'flex',
    justifyContent : 'space-evenly'
  }
}));


export default function Banner() {
  const classes = useStyles();

  // Set the initial index for the image in each section. It will change.
  let index = 0;
  
  // Set the words that will change in the hero dynamic word space
  const [studio,setStudioIdx] = useState(sections[0].content[index]);
  const [construction,setConstructionIdx] = useState(sections[1].content[index]);
  const [packaging,setPackagingIdx] = useState(sections[2].content[index]);

  // We set the interval in which we loop through the words
  useEffect(() =>{
     // We need to declare the interval in order to clean up the effect later
      const interval = setInterval(() => {
          // Cycle through words available
          if(index >= 2){
              index=0;
          }
          else {
              index++;
          }
          // Set the word every 2000 milliseconds
              setStudioIdx(studio =>sections[0].content[index])
              setConstructionIdx(construction =>sections[1].content[index])
              setPackagingIdx(packaging =>sections[2].content[index])
      }, 5000);
      // Clear the interval to prevent a memory leak
     return () => clearInterval(interval);
  }, []);

  // Construct the content array

  const content =[studio,construction,packaging];

  // Used to set the link in each of the sections

  const domains = ['studio','construction','packaging']
  return (
    <React.Fragment>
          <Grid  className={classes.sectionGrid} container >

              {/* START Studio Section */}
              {
                sections.map((section, index) => (
                  <Fade key={index} in={true} timeout={300*index}>
                  <Grid  item xs={12}md={4} container >

                    {/* CARD START */}

                    <Card className={classes.card} align="center" item="true" xs={12}md={4} >
                      <CardContent className={classes.cardContent}>

                        {/* CARD UPPER CATEGORY TITLES & BUTTON*/}

                        <Typography variant="h4" component="h3" align="center" color="textPrimary" paragraph className={classes.sectionTitle}>
                          {sections[index].title}
                        </Typography>
                        
                        <Typography variant="h6" component="h4" align="center" color="textSecondary" paragraph className={classes.sectionTitle}>
                        {sections[index].subtitle}
                        </Typography>
                        <Link underline='hover' color="inherit" href={`/${domains[index]}`}>

                        <Button size="large"   variant="contained" color="primary"  className={classes.sectionButton}>
                          Enter Here
                        </Button>
                        </Link>
                      </CardContent>

                      {/* CARD IMAGE */}

                      <Link underline='none' color="inherit" href={`/${domains[index]}`}>
                        <CardActionArea>
                          
                            <Fade key={index} in={true} timeout={500}>   
                          <CardMedia
                            className={classes.cardMedia}
                            image={content[index].imgSrc}
                            title={content[index].title}
                           
                          />
                          </Fade>
                          
                          {/* CARD BOTTOM TITLES */}
                          <CardContent className={classes.cardContent}>
                            <Typography gutterBottom  align="center" variant="h5" component="h5" className={classes.sectionTitle}>
                            {content[index].title}
                            </Typography>
                            <Typography variant="h6" component="h6" align="center" color="textSecondary" component="p" className={classes.sectionTitle}>
                            {content[index].production}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        </Link>
                    </Card>
                    </Grid>
                    </Fade>
                ))
              }
           
          </Grid>
    </React.Fragment>
  );
}

