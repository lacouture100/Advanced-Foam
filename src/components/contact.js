

import React from 'react';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((theme) => ({
	'@global': {
	  ul: {
		margin: 0,
		padding: 0,
		listStyle: 'none',
	  },
  },
  main : {
    display: 'flex',
    flexDirection: 'column',
    padding:theme.spacing(10),
    [theme.breakpoints.up('md')]: {
      padding:theme.spacing(10,45),
    }
  },
  button: {
		alignItems: 'center',

	}
}));

export default function Contact () {
  const classes = useStyles();
    return (
      <Grid className={classes.main} >
          <Fade in={true} timeout={500}>

            <Button className={classes.button} variant="contained" color="primary">
							<Link underline='hover' color="inherit" href="/contact">
							Contact us today
							</Link>
						</Button>
        </Fade>
      </Grid>
    )
}
