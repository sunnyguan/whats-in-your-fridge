import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(0, 0, 2),
    },
}));



// function deleteFood (value) {
//   const filteredItems = foods.filter(x => x.value !== value);

//   React.setState({
//        foods: filteredItems
//   });
// };

export default function InteractiveList() {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    const [foods, setFoods] = React.useState(['milk', 'apple', 'bread']);

    const addFood = (value) => {
      const items = foods.push(value);
      setFoods(items);
    }
    const deleteFood = (value) => {
      const filteredItems = foods.filter(x => x !== value);
      setFoods(filteredItems);
    };  

    return (
        <div className={classes.root}>
            <br />
            <Typography variant="h6" className={classes.title}>
                What's in your fridge:
          </Typography>

            <div className={classes.demo}>
                <List dense={dense}>
                    {foods.map((val) => ( 
                     
                      //  <IconButton onClick={() => addFood(val)}>
                      //  <Icon>add_circle</Icon>
     
                      //  </IconButton>
                    
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <FolderIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={val}  
                            //secondary={secondary ? 'Secondary text' : null}
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={() => deleteFood(val)} >

                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                       
                    ))}
                </List>
                
            </div>

        </div>
    );
                    

                    }
