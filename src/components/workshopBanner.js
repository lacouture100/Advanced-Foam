import React, { useState } from 'react';
import { Fragment } from 'react';
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
import Fade from '@material-ui/core/Fade';


// Define the style for each of the components

const useStyles = makeStyles((theme) => ({
  // Styles the main section titles. Cosntruction, Studio, and Packaging.
  sectionTitles : {
    display: 'flex',
    flexDirection : 'column',
    justifyContent : 'center'
  },
  workshopTitle : {
    display: 'flex',
    color : 'white',
    flexWrap:'wrap',
    justifyContent : 'center',
    alignSelf:'center',
    padding:theme.spacing(2)
  },
  workshopButton : {
    display: 'flex',
    color : 'white',
    width: '100%',
    alignItems: "center"

    
  },
  sectionGrid: {
    display: 'flex',
    padding: theme.spacing(2),
    justifyContent:'center',
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


export default function WorkshopBanner(props) {
  const {data} = props;
  const classes = useStyles();


  if (!data){return <div>Loading…</div>}

  return (
    <Fragment>
      <Fade in={true} timeout={100}>

                    
          <Grid  className={classes.sectionGrid} container >
          
              {/* START Studio Section */}

              {/*TODO Bring them in from categories and save them in arrays */}
              <Button variant="contained" color="primary" className={classes.workshopButton}>
              Our Workshop

</Button>
              {data.map((post, index) => (
                <Fade key={index} in={true} timeout={200*index}>

                  <Grid  item xs={12} sm={6} md={3} lg={2} container >

                    {/* CARD START */}

                    <Card className={classes.card} align="center" xs={12}  sm={6}  md={3} lg={2} id={`card-${post.id}`}>
                      <CardContent className={classes.cardContent}>

                        {/* CARD UPPER CATEGORY TITLES & BUTTON*/}

                        <Typography variant="h5" align="center" color="textPrimary" paragraph className={classes.sectionTitle}>
                        {post.title.rendered}
                        </Typography>
                    
                      </CardContent>

                      {/* CARD IMAGE */}

                      <Link underline='hover' color="inherit" href={`/studio/${ post.slug }`}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.cardMedia}
                            image={post.better_featured_image.media_details.sizes.thumbnail.source_url}
                            title={post.title.rendered}
                          />


                        </CardActionArea>
                        </Link>

                         {/* SHARE & LEARN MORE BUTTONS */}

                        <CardActions>
                          <Container className={classes.cardButtons}>
                            <Button size="small" color="primary" href={`/studio/${ post.slug }`}>
                              {`Show me more`}
                            </Button>
                          </Container>
                        </CardActions>
                    </Card>
                    </Grid>
                    </Fade>
                ))
              }


              
           
          </Grid>
          </Fade>
    </Fragment>
  );
}

