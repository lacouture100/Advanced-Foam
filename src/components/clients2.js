import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';


const data ={
  "Clients":[
      {
          "name" : "Universal Studios",
          "imgSrc" : "https://advfoam.com/wp-content/uploads/2020/10/universalStudios_logo.png",
          "imgAlt" : "Universal Studios logo",
          "link" : "https://www.universalstudios.com"
      },
      {
          "name" : "Dreamworks",
          "imgSrc" : "https://www.advfoam.com/wp-content/uploads/2020/09/dreamworks_logo.png",
          "imgAlt" : "Dreamworks logo",
          "link" : "https://www.dreamworks.com"
      },
      {
          "name" : "Hasbro",
          "imgSrc" : "https://www.advfoam.com/wp-content/uploads/2020/09/hasbro_logo.png",
          "imgAlt" : "Hasbro logo",
          "link" : "https://www.hasbro.com"
      },
      {
          "name" : "Honda",
          "imgSrc" : "https://www.advfoam.com/wp-content/uploads/2020/09/honda_logo.png",
          "imgAlt" : "Honda logo",
          "link" : "https://www.honda.com"
      },
      {
          "name" : "Nissan",
          "imgSrc" : "https://www.advfoam.com/wp-content/uploads/2020/09/nissan_logo.png",
          "imgAlt" : "Nissan logo",
          "link" : "https://www.nissan.com"
      },
      {
          "name" : "The Zanuck Company",
          "imgSrc" : "https://www.advfoam.com/wp-content/uploads/2020/09/theZanuckCompany_logo_BW.png",
          "imgAlt" : "The Zanuck Company logo",
          "link" : "http://www.zanuckco.com/"
      },
      {
          "name" : "Fremantle Media North America",
          "imgSrc" : "https://www.advfoam.com/wp-content/uploads/2020/09/fremantleMediaNorthAmerica_logo.png",
          "imgAlt" : "Fremantle Media logo",
          "link" : "https://www.fremantle.com"
      },
      {
          "name" : "Dannon",
          "imgSrc" : "https://www.advfoam.com/wp-content/uploads/2020/09/dannon_logo.png",
          "imgAlt" : "Dannon logo",
          "link" : "https://www.dannon.com"
      },
      {
          "name" : "56th Grammy Awards",
          "imgSrc" : "https://www.advfoam.com/wp-content/uploads/2020/09/grammyAwards_logo.png",
          "imgAlt" : "56th Grammy Awards logo",
          "link" : "https://www.grammy.com"
      },
      {
          "name" : "Infected Mushroom",
          "imgSrc" : "https://www.advfoam.com/wp-content/uploads/2020/09/infectedMushroom_logo.png",
          "imgAlt" : "Infected Mushroom logo",
          "link" : "https://www.infected-mushroom.com"
      },
  ]

}
 


const useStyles = makeStyles((theme) => ({

  sectionTitle : {
    
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    justifyContent : 'center',
    color: 'black'
  },
  sectionGrid: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(6, 10, 6),
    [theme.breakpoints.down('md')]: {
			padding: theme.spacing(2),
		  },
  },
  clientButton : {
    display: 'flex',
    padding: theme.spacing(2),
    margin : theme.spacing(2),
    width: '98%',
    alignSelf: 'center',
    [theme.breakpoints.down('md')]: {
      width: '97%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '95%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '93%',
    },
  },
  card: {
    width: '95%',
    display: 'flex',
    flexDirection: 'column',
    margin : theme.spacing(2)
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    margin : theme.spacing(2)
     
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent:"center"
  },
  cardButtons:{
    display: 'flex',
    justifyContent : 'space-evenly'
  }
}));

const cards = [1, 2, 3];

export default function Banner() {
  const classes = useStyles();


  return (
    <React.Fragment>

<Button variant="contained" size="large" align="center"  color="primary" className={classes.clientButton}>
              OUR CLIENTS

</Button>
          <Grid  className={classes.sectionGrid} container >

              {/* START CARD IMAGE Section */}
              {
                data.Clients.map((client, index) => (
                  <Fade key={index} in={true} timeout={200 * index}>
                  <Grid item xs={12} sm={6} md={3} container >
                    <Card className={classes.card} align="center" item xs={12} sm={6} md={3} >
                    <Link underline='none' color="inherit" href={client.link} aria-label={client.imgAlt}>
                        <CardActionArea>

                          {/* IMAGE */}

                          <CardMedia width="75%"
                            className={classes.cardMedia}
                            image={client.imgSrc}
                            title={client.title}
                            alt={client.imgAlt}
                          />

                        {/* BOTTOM TITLE */}


                          <CardContent className={classes.cardContent}>
                            <Typography align="center" variant="h5" component="h5" className={classes.cardTitle}>
                            {client.title}
                            </Typography>
                          </CardContent>
                        </CardActionArea>     
                        </Link>
                        {/* SHARE AND LEARN MORE BUTTONS */}

                
                    </Card>
                    </Grid>
                    </Fade>
                ))
              }
           
          </Grid>
    </React.Fragment>
  );
}


