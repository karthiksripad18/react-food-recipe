import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    rootContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
        minHeight: 500,
        marginTop: 5
    },
    leftContainer: {
        width: "24%",
    },
    rightContainer: {
        width: "74%"
    }
});

const SearchRecipes = () => {
    const classes = useStyles();
    return (
        <div className={classes.rootContainer}>
            <Paper className={classes.leftContainer} elevation={3}>Left</Paper>
            <Paper className={classes.rightContainer} elevation={3}>Right</Paper>
        </div>
    );
};

export default SearchRecipes;