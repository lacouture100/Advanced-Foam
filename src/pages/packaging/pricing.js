import Layout from '../../components/layout'
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
	'@global': {
	  ul: {
		margin: 0,
		padding: 0,
        listStyle: 'none',
        
	  },
    },
    postTitle : {
        margin: theme.spacing(5),
    },
    postContent : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing(5),
        '& h3': {
          margin: theme.spacing(2, 40,2,40),
          textAlign: 'center',
        },
        '& p': {
            margin: theme.spacing(2, 40,2,40),
            textAlign: 'justify',
            textJustify: 'inter-word'
        },'& iframe': {
            width: '700px',
            height: 'auto'
        },
        '& img': {
        width: '700px',
        height: 'auto'
        },
        [theme.breakpoints.down('sm')]: {
            '& p': {
                margin: theme.spacing(2, 5,2,5),
                textAlign: 'justify',
            },
            '& iframe': {
              width: '500px',
          },
            '& img': {
                width: '500px',
            }
        },
        [theme.breakpoints.down('xs')]: {
            '& p': {
                margin: theme.spacing(2),
                textAlign: 'justify',
            },
            '& img': {
              alignItems: 'center',
              align: 'center',
              width: '250px',
          },
            '& iframe': {
                alignItems: 'center',
                align: 'center',
                width: '250px',
            }
          
    }

}}));


export default function Contact({ data }){
  const classes = useStyles();

    return (
          <Layout >
          <Grid >
      {/*We can access the domain with {router.query.domain} abd the query, or blog post, with {router.query.post}*/}
              <Typography variant="h3" align="center" color="textPrimary"className={classes.postTitle} >{data.title.rendered}</Typography>
              <Grid
                  className={classes.postContent}
                  dangerouslySetInnerHTML={{
                  __html: data.content.rendered
              }}/>
          </Grid>
      </Layout>
    )
  }



  Contact.getInitialProps = async () => {
    const LINK = `http://www.advancedfoam.com/wp-json/wp/v2/pages?slug=packaging-pricing`;
    const response = await axios.get(LINK);
            const data = await response.data[0];
    return {data : data}
}
