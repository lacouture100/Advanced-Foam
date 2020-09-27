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
        imgSrc: "http://www.advancedfoam.com/wp-content/uploads/2020/09/mummy_preview.jpg",
        title: "The Mummy",
        production: "Universal Studios",
        link: "/studio/mummy",
        slug: "the-mummy",
        year : "2017"
      },
      {
        _id: "americanHorrorStory",
        index: 1,
        imgSrc: "http://www.advancedfoam.com/wp-content/uploads/2020/09/americanHorror_preview.jpg",
        title: "American Horror Story: Hotel",
        production: "20th Century Fox",
        link: "/studio/american-horror-story-hotel",
        slug: "american-horror-story-hotel",
        year : "2015"
      },
      {
        _id: "starTrek",
        index: 2,
        imgSrc: "http://www.advancedfoam.com/wp-content/uploads/2020/09/starTrek_preview.png",
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
        imgSrc: "./img/construction/orsini.png",
        title: "The Orsini",
        production: "Los Angeles",
        link: "http://www.advancedfoam.com/studio/mummy",
        slug: "star-trek",
        year : "2009"
    },
    {
        _id: "appfels",
        index: 1,
        imgSrc: "./img/construction/appfels.jpg",
        title: "Apffels Coffee Building",
        production: "-",
        link: "http://www.advancedfoam.com/studio/mummy",
        year: ""
    },
    {
        _id: "hamner",
        index: 2,
        imgSrc: "./img/construction/HamnerAve.jpg",
        title: "6987-6993 Hamner Ave",
        production: "-",
        link: "http://www.advancedfoam.com/studio/mummy",
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
        _id: "theMummy",
        index: 0,
        imgSrc: "./img/packaging/foam_1.png",
        title: "Anti-Impact Foam",
        production: "Custom Fabrication",
        link: "http://www.advancedfoam.com/studio/mummy",
    },
    {
        _id: "starTrek",
        index: 1,
        imgSrc: "./img/packaging/polystyrene_1.jpg",
        title: "Polystyrene",
        production: "Custom Fabrication",
        link: "http://www.advancedfoam.com/studio/mummy",
    },
    {
        _id: "transformers",
        index: 2,
        imgSrc: "./img/packaging/polyurethane_1.jpg",
        title: "Polyurethane",
        production: "Custom Fabrication",
        year: "",
        link: "/studio/mummy",
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
    justifyContent : 'center'
  },
  sectionGrid: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(6, 10, 6),
    
    backgroundColor : '#313131' ,
    [theme.breakpoints.down('md')]: {
			padding: theme.spacing(2),
		  },
  },
  card: {
    width: '95%',
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
  const [studio,setStudioIdx] = useState(0);
  const [construction,setConstructionIdx] = useState(0);
  const [packaging,setPackagingIdx] = useState(0);

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
                  <Grid key={index} item xs={12}md={4} container >

                    {/* CARD START */}

                    <Card className={classes.card} align="center" item xs={12}md={4} >
                      <CardContent className={classes.cardContent}>

                        {/* CARD UPPER CATEGORY TITLES & BUTTON*/}

                        <Typography variant="h4" align="center" color="textPrimary" paragraph className={classes.sectionTitle}>
                          {sections[index].title}
                        </Typography>
                        
                        <Typography variant="h6" align="center" color="textSecondary" paragraph className={classes.sectionTitle}>
                        {sections[index].subtitle}
                        </Typography>
                        <Link underline='hover' color="inherit" href={`/${domains[index]}`}>

                        <Button size="large"   variant="contained" color="primary"  className={classes.sectionButton}>
                          Enter Here
                        </Button>
                        </Link>
                      </CardContent>

                      {/* CARD IMAGE */}

                      <Link underline='none' color="inherit" href={content[index].link}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.cardMedia}
                            image={content[index].imgSrc}
                            title={content[index].title}
                          />

                          {/* CARD BOTTOM TITLES */}


                          <CardContent className={classes.cardContent}>
                            <Typography gutterBottom  align="center" variant="h5" component="h2" className={classes.sectionTitle}>
                            {content[index].title}
                            </Typography>
                            <Typography variant="h6"  align="center" color="textSecondary" component="p" className={classes.sectionTitle}>
                            {content[index].production}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        </Link>

                         {/* SHARE & LEARN MORE BUTTONS */}

                        <CardActions>
                          <Container className={classes.cardButtons}>
                            <Button size="small" color="primary">
                              Share
                            </Button>
                            <Button size="small" color="primary">
                              Learn More
                            </Button>
                          </Container>
                        </CardActions>
                    </Card>
                    </Grid>
                ))
              }
           
          </Grid>
    </React.Fragment>
  );
}
