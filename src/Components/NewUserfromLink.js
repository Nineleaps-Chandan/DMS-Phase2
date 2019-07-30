import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClippedDrawer from "./ResponsiveDrawer"
import SimpleCard from "./Cards2"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

const myStyle = {
    width: '200px',
    height: '250px'

}

export default function DenseAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        EMP AFTER LINK
            </Typography>
                </Toolbar>
            </AppBar>


            <div><SimpleCard style={myStyle} /></div>
        </div>
    );
}
