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
          "name" : "Netflix",
          "imgSrc" : "https://backend.advancedfoam.com/wp-content/uploads/2021/01/netflix_logo.png",
          "imgAlt" : "Netflix logo",
          "link" : "https://www.netflix.com"
      },{
          "name" : "Disney",
          "imgSrc" : "https://backend.advancedfoam.com/wp-content/uploads/2021/01/disney_logo.png",
          "imgAlt" : "Disney logo",
          "link" : "https://www.disney.com"
      },{
          "name" : "Warner Brothers",
          "imgSrc" : "https://backend.advancedfoam.com/wp-content/uploads/2021/01/warner_bros_logo-2.png",
          "imgAlt" : "Warner Brothers logo",
          "link" : "https://www.warnerbros.com/"
      },{
          "name" : "Google",
          "imgSrc" : "https://backend.advancedfoam.com/wp-content/uploads/2021/01/google-logo.png",
          "imgAlt" : "Google logo",
          "link" : "https://www.google.com/"
      },{
          "name" : "CBS",
          "imgSrc" : "https://backend.advancedfoam.com/wp-content/uploads/2021/01/cbs_logo.png",
          "imgAlt" : "CBS logo",
          "link" : "https://www.cbs.com"
      },{
          "name" : "ABC",
          "imgSrc" : "https://backend.advancedfoam.com/wp-content/uploads/2021/01/abc_logo.png",
          "imgAlt" : "ABC Studios logo",
          "link" : "https://www.abc.com"
      },{
          "name" : "20th Century Studios",
          "imgSrc" : "https://backend.advancedfoam.com/wp-content/uploads/2021/01/20th_century_fox.png",
          "imgAlt" : "20th Century Studios logo",
          "link" : "https://www.20thcenturystudios.com/"
      },{
          "name" : "DWP Productions",
          "imgSrc" : "https://backend.advancedfoam.com/wp-content/uploads/2021/01/dwp_logo.png",
          "imgAlt" : "DWP Productions logo",
          "link" : "https://dannywimmerpresents.com/"
      },{
          "name" : "Paramount Pictures",
          "imgSrc" : "https://backend.advancedfoam.com/wp-content/uploads/2021/01/paramount_pictures_logo-1.png",
          "imgAlt" : "Paramount Pictures logo",
          "link" : "https://www.paramount.com/"
      },
      {
          "name" : "Universal Studios",
          "imgSrc" : "https://backend.advancedfoam.com/wp-content/uploads/2021/01/universal_studios_logo_color-1.png",
          "imgAlt" : "Universal Studios logo",
          "link" : "https://www.universalstudios.com"
      },
      {
          "name" : "Dreamworks",
          "imgSrc" : "https://backend.advancedfoam.com/wp-content/uploads/2021/01/dreamworks_logo_color-1.png",
          "imgAlt" : "Dreamworks logo",
          "link" : "https://www.dreamworks.com"
      },
      {
          "name" : "Hasbro",
          "imgSrc" : "https://backend.advancedfoam.com/wp-content/uploads/2021/01/hasbro_logo_color.png",
          "imgAlt" : "Hasbro logo",
          "link" : "https://www.hasbro.com"
      },
      {
          "name" : "Honda",
          "imgSrc" : "https://backend.advancedfoam.com/wp-content/uploads/2021/01/honda_logo_color-1.png",
          "imgAlt" : "Honda logo",
          "link" : "https://www.honda.com"
      },
      {
          "name" : "Nissan",
          "imgSrc" : "https://www.backend.advancedfoam.com/wp-content/uploads/2020/09/nissan_logo.png",
          "imgAlt" : "Nissan logo",
          "link" : "https://www.nissanusa.com/"
      },
      {
          "name" : "The Zanuck Company",
          "imgSrc" : "https://www.backend.advancedfoam.com/wp-content/uploads/2020/09/theZanuckCompany_logo_BW.png",
          "imgAlt" : "The Zanuck Company logo",
          "link" : "http://www.zanuckco.com/"
      },
      {
          "name" : "Fremantle Media North America",
          "imgSrc" : "https://backend.advancedfoam.com/wp-content/uploads/2021/01/fremantleMediaNorthAmerica_logo.png",
          "imgAlt" : "Fremantle Media logo",
          "link" : "https://www.fremantle.com"
      },
      {
          "name" : "McDonalds",
          "imgSrc" : "https://backend.advancedfoam.com/wp-content/uploads/2021/01/mcdonalds_logo.png",
          "imgAlt" : "McDonald's logo",
          "link" : "https://www.mcdonalds.com"
      },
      {
          "name" : "Dannon",
          "imgSrc" : "https://backend.advancedfoam.com/wp-content/uploads/2021/01/dannon_logo_color-1.png",
          "imgAlt" : "Dannon logo",
          "link" : "https://www.dannon.com"
      },
      {
          "name" : "56th Grammy Awards",
          "imgSrc" : "https://backend.advancedfoam.com/wp-content/uploads/2021/01/grammy_awards_color.png",
          "imgAlt" : "56th Grammy Awards logo",
          "link" : "https://www.grammy.com"
      },
      {
          "name" : "Infected Mushroom",
          "imgSrc" : "https://www.backend.advancedfoam.com/wp-content/uploads/2020/09/infectedMushroom_logo.png",
          "imgAlt" : "Infected Mushroom logo",
          "link" : "https://www.infected-mushroom.com"
      },
      {
        "name" : "Omega Products",
        "imgSrc" : "https://advfoam.com/wp-content/uploads/2020/11/omega-oval.png",
        "imgAlt" : "Omega Products logo",
        "link" : "https://omega-products.com/"
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
    
    paddingTop: '70%', // 16:9,
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
                  <Grid item="true" xs={6} sm={3} md={2} container >
                    <Card className={classes.card} align="center" item="true" xs={6} sm={3} md={2} >
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


