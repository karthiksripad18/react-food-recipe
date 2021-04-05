import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props: any) => {
    return <MuiAlert onClose={props.onClose} elevation={props.elevation} variant={props.variant} severity={props.severity}>
        {props.message}
    </MuiAlert>;
};

export default Alert;