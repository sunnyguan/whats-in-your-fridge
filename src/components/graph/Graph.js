import React, { useEffect } from 'react';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import { getUserList, addToSpending, removeFromSpending } from '../../services/UserInfo';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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

export default function Graph(props) {
    const classes = useStyles();
    const [spendings, setSpendings] = React.useState([]);
    const [spendingItem, setSpendingItem] = React.useState("");

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        addSpending(spendingItem);
        setOpen(false);
    }

    const retrieve = () => {
        getUserList(props.user.googleId).then(data => {
            console.log(data);
            setSpendings(data["spending"]);
        })
    }

    useEffect(() => retrieve(), []);

    const addSpending = (value) => {
        addToSpending(props.user.googleId, value).then(data => setSpendings(data["spending"]));
    }
    const deleteSpending = (value) => {
        removeFromSpending(props.user.googleId, value).then(data => setSpendings(data["spending"]));
    };

    const arrayMax = (arr) => {
        if (!arr || arr.length === 0) return 100;
        return arr.reduce(function (a, b) {
            let p = parseInt(a);
            let v = parseInt(b);
            return p > v ? p : v;
        });
    }

    return (
        <div className={classes.root}>
            <VictoryChart
                theme={VictoryTheme.material}
                domain={{ y: [0, arrayMax(spendings)] }}
            >
                <VictoryLine
                    style={{
                        data: { stroke: "#c43a31" },
                        parent: { border: "1px solid #ccc" }
                    }}
                    data={
                        spendings.map((item, index) => { return { "x": index + 1, "y": parseInt(item) } })
                    }
                />
            </VictoryChart>
            <Typography variant="h6" className={classes.title}>
                {props.user.givenName}'s Spending:
          </Typography>

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
                                label="Spending Item"
                                type="text"
                                value={spendingItem}
                                onInput={e => setSpendingItem(e.target.value)}
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
                    {spendings && spendings.map((val) => (
                        <>
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
                                    <IconButton edge="end" aria-label="delete" onClick={() => deleteSpending(val)} >

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
