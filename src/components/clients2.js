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

const data ={
  "Clients":[
      {
          "name" : "Universal Studios",
          "imgSrc" : "http://www.advancedfoam.com/wp-content/uploads/2020/09/universalStudios_logo.png",
          "imgAlt" : "Universal Studios logo",
          "link" : "https://www.universalstudios.com"
      },
      {
          "name" : "Dreamworks",
          "imgSrc" : "http://www.advancedfoam.com/wp-content/uploads/2020/09/dreamworks_logo.png",
          "imgAlt" : "Dreamworks logo",
          "link" : "https://www.dreamworks.com"
      },
      {
          "name" : "Hasbro",
          "imgSrc" : "http://www.advancedfoam.com/wp-content/uploads/2020/09/hasbro_logo.png",
          "imgAlt" : "Hasbro logo",
          "link" : "https://www.hasbro.com"
      },
      {
          "name" : "Honda",
          "imgSrc" : "http://www.advancedfoam.com/wp-content/uploads/2020/09/honda_logo.png",
          "imgAlt" : "Honda logo",
          "link" : "https://www.honda.com"
      },
      {
          "name" : "Nissan",
          "imgSrc" : "http://www.advancedfoam.com/wp-content/uploads/2020/09/nissan_logo.png",
          "imgAlt" : "Nissan logo",
          "link" : "https://www.nissan.com"
      },
      {
          "name" : "The Zanuck Company",
          "imgSrc" : "http://www.advancedfoam.com/wp-content/uploads/2020/09/theZanuckCompany_logo_BW.png",
          "imgAlt" : "The Zanuck Company logo",
          "link" : "http://www.zanuckco.com/"
      },
      {
          "name" : "Fremantle Media North America",
          "imgSrc" : "http://www.advancedfoam.com/wp-content/uploads/2020/09/fremantleMediaNorthAmerica_logo.png",
          "imgAlt" : "Fremantle Media logo",
          "link" : "https://www.fremantle.com"
      },
      {
          "name" : "Dannon",
          "imgSrc" : "http://www.advancedfoam.com/wp-content/uploads/2020/09/dannon_logo.png",
          "imgAlt" : "Dannon logo",
          "link" : "https://www.dannon.com"
      },
      {
          "name" : "56th Grammy Awards",
          "imgSrc" : "http://www.advancedfoam.com/wp-content/uploads/2020/09/grammyAwards_logo.png",
          "imgAlt" : "56th Grammy Awards logo",
          "link" : "https://www.grammy.com"
      },
      {
          "name" : "Infected Mushroom",
          "imgSrc" : "http://www.advancedfoam.com/wp-content/uploads/2020/09/infectedMushroom_logo.png",
          "imgAlt" : "Infected Mushroom logo",
          "link" : "https://www.infected-mushroom.com"
      },
  ]

}
 


const useStyles = makeStyles((theme) => ({

  sectionTitles : {
    display: 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    color: 'black'
  },
  sectionGrid: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(6, 10, 6),
   
  },
  card: {
    width: '95%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '90%', // 16:9
     
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


          <Grid  className={classes.sectionGrid} container >

              {/* START CARD IMAGE Section */}
              {
                data.Clients.map((client, index) => (
                  <Grid key={index} item xs={12}md={4} container >
                    <Card className={classes.card} align="center" item xs={12}md={4} >
                    <Link underline='none' color="inherit" href={client.link}>
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
                            <Typography gutterBottom  align="center" variant="h5" component="h2" className={classes.sectionTitle}>
                            {client.title}
                            </Typography>
                          </CardContent>
                        </CardActionArea>     
                        </Link>
                        {/* SHARE AND LEARN MORE BUTTONS */}

                
                    </Card>
                    </Grid>
                ))
              }
           
          </Grid>
    </React.Fragment>
  );
}


