import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Link from '@material-ui/core/Link';


const sections = [
	{ title: 'Main', url: '/' },
	{ title: 'Studio', url: '/studio' },
	{ title: 'Construction', url: '/construction' },
	{ title: 'Packaging', url: '/packaging' },
	{ title: 'About', url: 'about' },
	{ title: 'Contact us', url: 'contact' }
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

	//Sets the drop-down position to wherever we have the mouse at
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Whenever we choose something or click elsewhere it dissapears
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
     
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            Advanced Foam
          </Typography>
         
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
			
			
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
				
              <Menu
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}