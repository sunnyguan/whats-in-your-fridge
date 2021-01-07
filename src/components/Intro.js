import Login from './auth/Login';
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://c1.staticflickr.com/3/2535/32835771681_fc8eb977d7_c.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(7, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

// function Intro(props) {
//   const classes = useStyles();

//   return (

//     <div> 
//       <br></br>
//       <h1>Welcome to What's In Your Fridge?</h1>


//     <Login onSuccess={props.onLogin} />
        
    
//     </div>
   

//   );
// }

//export default Intro;
export default function Intro(props) {
  const classes = useStyles();

  var divStyle = {
    font: "Times New Roman",
};
  return (
    < Grid container component="main" className={classes.root}>
    <CssBaseline />

    <Grid item xs={false} sm={4} md={7} className={classes.image} />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>

    <div className={classes.paper}>
            <br></br>
      <h1 style = {divStyle}>  What's In Your Fridge?</h1>

      <br></br>
    <Login onSuccess={props.onLogin} />
     
    
    </div>
    </Grid>
</Grid>
      
   
   

  );
}





