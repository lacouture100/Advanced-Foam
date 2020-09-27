

import React from 'react';
import Link from '@material-ui/core/Link';
import Icon from '@material-ui/core/Icon';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	'@global': {
	  ul: {
		margin: 0,
		padding: 0,
		listStyle: 'none',
	  },
  },
  main: {
		alignItems: 'center',
    display:'flex',
    flexDirection: 'column',
    height: '300px'
	},
  imageIcon: {
		display: "flex",
		width : '100%',
    height: '100%',
    alignItems: 'center',
		[theme.breakpoints.down('xs')]: {
			width : '80%'
		},
	},
	iconRoot: {
		justify: 'center',
    display:'flex',
    
	}
}));

export default function Contact () {
  const classes = useStyles();
    return (
      <div className="contact-main">
        <Container  md={4} gutter />
        <Container  md={4} className={classes.main}>
						<Link  href={ `/contact` }>	
              <Icon className={classes.iconRoot}>
                <img className={classes.imageIcon} src="/graphics/contactUs.svg"/>
              </Icon>	
						</Link>

            <Typography variant="h5" align="center" color="textPrimary" paragraph >
            Contact Us
            </Typography>
            </Container>
            <Container  md={4} gutter />
      </div>
    )
}
