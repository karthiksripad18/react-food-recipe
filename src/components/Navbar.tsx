import React from 'react';

import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    navlinkContainer: {
        display: "flex",
        justifyContent: "flex-end"
    },
    navlink: {
        fontWeight: "bold",
        textDecoration: "none",
        paddingLeft: 10,
        paddingRight: 10,
        color: "white"
    },
});

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.navlinkContainer}>
                <Link to="/" className={classes.navlink}><Typography variant="h5">Home</Typography></Link>
                <Link to="/" className={classes.navlink}><Typography variant="h5">Recipes</Typography></Link>
                <Link to="/" className={classes.navlink}><Typography variant="h5">Logout</Typography></Link>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;