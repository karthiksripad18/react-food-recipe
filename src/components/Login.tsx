import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Snackbar from '@material-ui/core/Snackbar';
import {Redirect, useLocation} from 'react-router-dom';

import backgroundImage from '../assets/login-page.jpg';
import googleImage from '../assets/google.png';
import faceBookImage from '../assets/facebook.png';
import gitHubImage from '../assets/github.png';

import {auth, provider} from '../firebase';
import {
    setActiveUser,
} from '../redux/userSlice';

import Alert from './Alert';

const useStyles = makeStyles({
    root: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    form: {
        height: "300px",
        width: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "column"
    },
    loginMethodImg: {
        maxHeight: "40px",
        maxWidth: "40px",
        cursor: "pointer"
    }
});

const Login = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const {state: {from: fromLocation} } : any = useLocation();
    const [redirectToreferrer, setRedirectToreferrer] = useState(false);

    const [open, setOpen] = useState<boolean>(false);
    const [message, setMessage] = useState<string | null>(null);
    const [messageType, setMessageType] = useState<string | null>(null);

    const handleSnackBarOpen = (messageType: string, message: string) => {
        setMessageType(messageType);
        setMessage(message);
        setOpen(true);
    };

    const handleSnackBarClose = () => {
        setOpen(false);
    };

    const handleSignIn = (authType: string) => {
        if (authType === "google") {
            auth.signInWithPopup(provider).then(
                (result) => {
                    dispatch(setActiveUser({
                        userName: result.user?.displayName,
                        userEmail: result.user?.email
                    }));
                    // handleSnackBarOpen("success", "Login Successful");
                    setRedirectToreferrer(true);
                }
            ).catch(
                (error) => {
                    handleSnackBarOpen("error", `Login failed: ${error.message}`);
                }
            )
        } else if (authType === "facebook") {
            handleSnackBarOpen("error", "Oops!! This Authentication method is currently unavailable");
        } else if (authType === "github") {
            handleSnackBarOpen("error", "Oops!! This Authentication method is currently unavailable");
        }
    };

    if (redirectToreferrer) return <Redirect to={fromLocation} />

    return (
    <div className={classes.root}>
        <Paper className={classes.form} elevation={2}>
            <Tooltip title="Login with Google">
                <img onClick={() => handleSignIn("google")} className={classes.loginMethodImg} src={googleImage} alt="Google Icon" />
            </Tooltip>
            <Tooltip title="Login with Facebook">
                <img onClick={() => handleSignIn("facebook")} className={classes.loginMethodImg} src={faceBookImage} alt="Facebook Icon" />
            </Tooltip>
            <Tooltip title="Login with Github">
                <img onClick={() => handleSignIn("github")} className={classes.loginMethodImg} src={gitHubImage} alt="Github Icon" />
            </Tooltip>
        </Paper>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleSnackBarClose}>
            <Alert message={message} onClose={handleSnackBarClose} severity={messageType} elevation={6} variant={"filled"}></Alert>
        </Snackbar>
    </div>
    );
};

export default Login;