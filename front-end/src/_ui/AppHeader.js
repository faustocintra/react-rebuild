import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { BrowserRouter as Router, Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
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

export default function AppHeader(props) {
   const classes = useStyles();

   const [anchorEl, setAnchorEl] = React.useState(null);

   const handleClick = event => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <AppBar position="static">
         <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
               <MenuIcon />
            </IconButton>
            <Menu
               id="simple-menu"
               anchorEl={anchorEl}
               keepMounted
               open={Boolean(anchorEl)}
               onClose={handleClose}
            >
               <Router>
               <MenuItem component={RouterLink} to='/aluno' onClick={handleClose}>
                     Aluno
               </MenuItem>
                  <MenuItem component={RouterLink} to='/turma' onClick={handleClose}>
                     Turma
               </MenuItem>
               </Router>
            </Menu>
            <Typography variant="h6" className={classes.title}>
               {props.title}
            </Typography>
         </Toolbar>
      </AppBar>
   );
}

