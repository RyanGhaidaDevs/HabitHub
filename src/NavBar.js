import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Login from './auth/Login';
import Registration from './auth/Registration';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 3,
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: 'white',
    border: 5,
    borderRadius: 5,
    boxShadow: '0 3px 20px 2px rgb(192,192,192)',
  },
  NavBarButtons: {
    marginRight: 12,
    marginLeft: 12,
    fontSize: '14px',
    padding: '10px',
  },
  AddBugLog:{
    marginRight: 12,
    marginLeft: 12,
    fontSize: '14px',
    padding: '10px',
    color: "white"
  },
  loginCloseButton: {
    fontSize: '24px',
    color: 'orange'
  },
  navbar:{
    backgroundColor: '#637299'
  },
  bugButton: {
    color: 'orange'
  },
  allLogs: {
    marginRight: 12,
    marginLeft: 12,
    fontSize: '14px',
    padding: '10px',
    color: 'orange'
  },
  userEmail: {
    color: 'orange'
  }
}));

const NavBar = (props) => {
   const classes = useStyles();

  const logOut = () => {
    props.handleLogout();
    props.history.push("/login");
  }

  return(
    <div className={classes.root}>
    <AppBar className={classes.navbar} position="static">
      <Toolbar >
        <IconButton onClick={()=> props.history.push("/home")} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          Home
        </IconButton>
        <Typography variant="h7" className={classes.title}>
          Habit Hub
        </Typography>
        <span className={classes.NavBarButtons}>

        </span>
        <Typography variant="h4" >
          | 
        </Typography>

        {props.user.email ? 
        <div> 
          <Button style={ {fontSize: '14px'} } color="inherit" onClick={logOut}>
          Logout
          </Button> 
          <Button  className={classes.userEmail} style={ {fontSize: '14px'} } color="inherit" onClick={()=> props.history.push("/home")}>
            { props.user.email }
          </Button> 
        </div>  
        : 
        <div> 
            <Button  onClick={()=> props.history.push("/login")} style={ {fontSize: '14px'} } color="inherit">
              Login
            </Button> 
            <Button onClick={()=> props.history.push("/registration")} style={ {fontSize: '14px'} } color="inherit">
              Register
            </Button> 
        </div> 
        }
      </Toolbar>
    </AppBar>
  </div>
  );
}

export default NavBar; 