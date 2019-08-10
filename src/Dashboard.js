import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// import FaceIcon from '@material-ui/icons/Face';
// import DoneIcon from '@material-ui/icons/Done';

// https://www.youtube.com/watch?v=hiiaHyhhwBU

const useStyles = makeStyles(theme => ({
    root: {
        width: '50%',
        backgroundImage: 'linear-gradient(-180deg,#fcfdff 3%,#edeef0 100%)',
        margin: '0 auto',
        marginTop: '100px',
        padding: theme.spacing(3, 2),
    },
    flex: {
        display: 'flex',
        alignItems: 'center'
    },
    topicsWindow: {
        width: '30%',
        height: '400px',
        borderRight: '1px solid black',
    },
    chatWindow: {
        width: '70%',
        height: '400px',
        padding: '20px',
    },
    chatBox: {
        width: '85%'
    },
    button: {
        width: '15%'
    },
  }));

export default function Dashboard() {
    const classes = useStyles();
    const [textValue, changeTextValue] = React.useState('');

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h3" component="h3">
                    Chat App
                </Typography>
                <Typography variant="h5" component="h5">
                    Topic Placeholder.
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicsWindow}>
                        <List>
                            {
                                ['topic'].map(topic => (
                                    <ListItem key={topic} button>
                                        <ListItemText primary={topic} />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </div>
                    <div className={classes.chatWindow}>
                            {
                                [{from: 'user', avat: 'UN', msg: 'hello'}].map((chat, i) => (
                                   <div className={classes.flex} key={i}>
                                        <Chip label={chat.from} className={classes.chip} 
                                            avatar={<Avatar>{chat.avat}</Avatar>}
                                            label="Clickable Chip"
                                            // onClick={handleClick}
                                            className={classes.chip}
                                        />
                                        <Typography variant="p">
                                            {chat.msg}
                                        </Typography>
                                   </div>
                                ))
                            }
                    </div>
                </div>
                <div className={classes.flex}>
                    <TextField
                        label="Send a Message!"
                        className={classes.chatBox}
                        value={textValue}
                        onChange={e => changeTextValue(e.target.value)}
                    />
                    <Button variant="contained" color="secondary" className={classes.button}>
                        Send
                    </Button>
                </div>
            </Paper>
        </div>
    )
}