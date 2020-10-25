import React from 'react';
//import Link from 'next/link'
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image'
import Grid from '@material-ui/core/Grid'
import { useMediaQuery, useMediaQueries } from '@react-hook/media-query';

const inStockLink = '/construction/redicoat'
//const logo = require('/img/logos/advancedFoam_main.png');
const logo = '/img/logo512.png'

const sections = [
	{ title: 'Main', url: '/' },
	{ title: 'Studio', url: '/studio' },
	{ title: 'Construction', url: '/construction' },
	{ title: 'Packaging', url: '/packaging' },
	{ title: 'About', url: '/about' },
	{ title: 'Contact us', url: '/contact' }
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
	  flexShrink: 0,
	  flexGrow: 1,
	},
	stockButton : {
		color:"white",
		backgroundColor: "red",
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		  },
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
		  display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	imageIcon: {
		display: "flex",
		width : '60%',
		height: 'auto',
		[theme.breakpoints.down('xs')]: {
			width : '80%'
		},
	},
	iconRoot: {
		width: "100%",
		height: "auto"
	}
}));

export default function Header (props){
	const classes = useStyles();
	const [ anchorEl, setAnchorEl ] = React.useState(null);
	const open = Boolean(anchorEl);

	  //Sets the drop-down position to wherever we have the mouse at
	const handleMenu = (event) => {
	  setAnchorEl(event.currentTarget);
	};
  
	// Whenever we choose something or click elsewhere it dissapears
	const handleClose = () => {
	  setAnchorEl(null);
	};



	return(
		<AppBar position ="static" color="default" elevation={0} className={classes.appBar}>
			<Toolbar className={classes.toolbar}>
				<Grid   container
						direction="row"
						justify="space-between"
						alignItems="center">

					{/* Advanced Foam Logo*/}		
					<Grid item xs={6} md={3}>
						<Link  href={ `/` } aria-label={"Advanced Foam Home"}>	
							
							{
								/*<img 
								src={`http://www.advancedfoam.com/wp-content/uploads/2020/09/advancedFoam_${props.site ? props.site : 'main' }.png`}  
								className={classes.toolbarImage}>
								</img>*/
								<Icon className={classes.iconRoot}>
									<img className={classes.imageIcon} src="/graphics/mainLogo.svg"/>
							  	</Icon>
								  
							}
							
						</Link>
					</Grid>

					<Grid item xs={6} md={9} justify="flex-end" container className={classes.navSection}>

						{/* In Stock button*/}
						<Button className={classes.stockButton}>
							<Link underline='hover' color="textPrimary" href="/construction/redicoat" aria-label="In stock button">
							IN STOCK NOW
							</Link>
						</Button>

						{/* Navigation Sections*/}
						<div className={classes.sectionDesktop}>
						{sections.map(section=>(
								<Link 
									
									variant="button"
									color="inherit" 
									href={section.url} 
									key={section.title}
									noWrap
									className={classes.link}>
									{section.title}
								</Link>
							))}
						</div>

						{/* Mobile Menu button*/}
						<div>
							<IconButton
								className={classes.sectionMobile}
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleMenu}
								color="inherit"
								>
								<MenuIcon />
							</IconButton>

								
							<Menu
								className={classes.sectionMobile}
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
								}}
								open={open}
								onClose={handleClose}
								>
								{sections.map(section=>(
									<Link 
									variant="button"
									color="inherit" 
									href={section.url} 
									key={section.title}
									noWrap
									className={classes.link}
									aria-label="Advanced Foam Home">
										<MenuItem onClick={handleClose}>
									{section.title}
									</MenuItem>
									</Link>
								))}		
								</Menu>
							</div>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	)
}