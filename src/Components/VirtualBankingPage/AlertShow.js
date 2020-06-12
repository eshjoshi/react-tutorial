import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AlertShow = (error) => {
  return (
    <Snackbar autoHideDuration={10000}>
      <Alert severity="success">{error}</Alert>
    </Snackbar>
  );
};
export default AlertShow;
