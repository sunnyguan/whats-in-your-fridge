import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import FolderIcon from '@material-ui/icons/Folder';
import React, { useEffect } from 'react';
import { addToList, getUserList, removeFromList, scanReceipt } from '../services/UserInfo';
import LinearProgress from '@material-ui/core/LinearProgress';
import Input from '@material-ui/core/Input';


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
    addItem: {
        marginBottom: "10px",

    }
}));

export default function InteractiveList(props) {
    const classes = useStyles();
    const [foods, setFoods] = React.useState([]);
    const [foodItem, setFoodItem] = React.useState("");
    const [selectedFile, setSelectedFile] = React.useState(null);
    const [amount, setAmount] = React.useState("");
    const [unit, setUnit] = React.useState("");

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        addFood(foodItem,amount,unit);
        setOpen(false);
    }

    const retrieve = () => {
        getUserList(props.user.googleId).then(data => {
            console.log(data);
            if(data.length !== 0)
                setFoods(data["food"]);
        })
    }

    useEffect(() => retrieve(), []);

    const addFood = (value,amount,unit) => {
        addToList(props.user.googleId, value,amount,unit).then(data => setFoods(data["food"]));
    }
    const deleteFood = (value) => {
        removeFromList(props.user.googleId, value).then(data => setFoods(data["food"]));
    };

    const onFileChange = event => { 
        var reader = new FileReader();
        reader.onloadend = function () {
            console.log(reader.result);
            var b64 = {"image": reader.result.split(",")[1], 
                       "name": props.user.googleId};
            scanReceipt(b64).then(data => console.log(data));
        }
        reader.readAsDataURL(event.target.files[0]);
    }; 

    return (
        <div className={classes.root}>
            <Typography variant="h6" className={classes.title}>
                What's in {props.user.givenName}'s fridge:
          </Typography>
            <Button variant="contained" component="label">
                Upload File
                <input type="file" onChange={onFileChange} accept="image/*" hidden/>
            </Button>

            <div className={classes.demo}>
                <List dense={false}>
                    <Button className={classes.addItem} variant="outlined" color="primary" onClick={handleClickOpen}>
                        Add new item
                    </Button>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">New Item</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Please enter your food item
                       </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="item"
                                label="Food Item"
                                type="text"
                                value={foodItem}
                                onInput={e => setFoodItem(e.target.value)}
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                id="amount"
                                label="amount"
                                type="text"
                                value={amount}
                                onInput={e => setAmount(e.target.value)}
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                id="unit"
                                label="unit"
                                type="text"
                                value={unit}
                                onInput={e => setUnit(e.target.value)}
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                       </Button>
                            <Button onClick={handleSubmit} color="primary">
                                Add
                       </Button>
                        </DialogActions>
                    </Dialog>

                    {Object.keys(foods).map((key) => (

                        <>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={key}
                                    secondary={'Quantity: '+foods[key]['amount']+' Units: '+foods[key]['unit']}
                                />
                                {/* <LinearProgress variant="determinate" value='50' /> */}

                                <ListItemSecondaryAction>
                                    
                                    <IconButton edge="end" aria-label="delete" onClick={() => deleteFood(key)} >
                                        
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </>
                    ))}
                </List>

            </div>

        </div>
    );


}