import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const footer =[
    {   
        'title':'Speak to us',
        'subtitle1': 'Phone: (310) 515-0728',
        'subtitle2': 'Fax: (310) 515-3548'
    },
    {   
        'title':'Email us',
        'subtitle1': 'info@advancedfoam.com',
    },
    {   
        'title':'Headquarters',        
        'subtitle1': '1745 W. 134th St.',
        'subtitle2': 'Gardena, CA 90249',
    }
]
     
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.advancedfoam.com/">
        Advanced Foam
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),

  },
  section : {
    display: 'flex',
    justifyContent:"space-evenly",
    [theme.breakpoints.down('sm')]: {
      flexDirection : 'column',
      margin : '3rem'
		},
  },
  item : {

    [theme.breakpoints.down('sm')]: {
      flexDirection : 'column',
      margin : theme.spacing(2)
		},
  }

}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer} >
    <grid  direction='row' className={classes.section}>
      <grid item className={classes.item}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {footer[0].title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {footer[0].subtitle1}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {footer[0].subtitle2}
        </Typography>
        <Copyright />
      </Container>
      </grid>

      <grid item  className={classes.item}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {footer[1].title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {footer[1].subtitle1}
        </Typography>
        </Container>
      </grid>

      <grid item className={classes.item}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {footer[2].title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {footer[2].subtitle1}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {footer[2].subtitle2}
        </Typography>
        <Copyright />
      </Container>
      </grid>
      </grid>
    </footer>
  );
}
