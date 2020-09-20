import React from 'react';
//import Link from 'next/link'
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image'
import Grid from '@material-ui/core/Grid'

const inStockLink = '/Construction/redicoat'
//const logo = require('/img/logos/advancedFoam_main.png');
const logo = '/img/logos/advancedFoam_main.png'

const sections = [
	{ title: 'Main', url: '/' },
	{ title: 'Studio', url: '/studio' },
	{ title: 'Construction', url: '/construction' },
	{ title: 'Packaging', url: '/packaging' },
	{ title: 'About', url: 'about' },
	{ title: 'Contact us', url: 'contact' }
];

const useStyles = makeStyles((theme) => ({
	'@global': {
	  ul: {
		margin: 0,
		padding: 0,
		listStyle: 'none',
	  },
	},
	appBar: {
	  borderBottom: `1px solid ${theme.palette.divider}`,
	},
	toolbar: {
	  flexWrap: 'no-wrap',
	},
	toolbarTitle: {
	  flexGrow: 1,
	},
	toolbarImage: {
		
		width : '100%',
		height: 'auto'
		
	},
	link: {
	  margin: theme.spacing(1, 1.5),
	  flexShrink: 0
	},
	stockButton : {
		backgroundColor: "red"
		
	}
}));

export default function Header (props){
	const classes = useStyles();
		return(
				<AppBar position ="static" color="default" elevation={0} className={classes.appBar}>
					<Toolbar className={classes.toolbar}>
						<Grid container>
							<Grid item xs={3}>
							<Link  href={ `/${props.site ? props.site : '' }` }>
									<img 
									src={`http://www.advancedfoam.com/wp-content/uploads/2020/09/advancedFoam_${props.site ? props.site : 'main' }.png`}  
									className={classes.toolbarImage}>
									</img>
							</Link>
							</Grid>

							<Grid item xs={0} md={3}>

							</Grid>
							<Grid item xs={9} md={6} container>

								<Button className={classes.stockButton}>
									<Link color="inherit" href="/construction/redicoat">
									IN STOCK NOW
									</Link>
								</Button>
							
								{
									sections.map(section=>(
										<Link 
										variant="button"
										color="inherit" 
										href={section.url} 
										key={section.title}
										noWrap
										className={classes.link}>
										{section.title}
										</Link>
									))
								}
								
								
							</Grid>
						</Grid>
					</Toolbar>
				</AppBar>
		)

}