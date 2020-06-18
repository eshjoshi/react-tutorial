import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';
import { postManageAccount } from './VirtualBankingService';
import './VirtualBankingPage.css';
import ButtonAppBar from './Appbar';

function Alert(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function ManageAccountPage(props) {
  const accountValue = props;
  const [amount, setAmount] = React.useState(0);
  const classes = useStyles();
  const amountChange = (event) => {
    setAmount(event.target.value);
  };
  const [operation, setOperation] = React.useState('credit');
  const oprationChange = (event) => {
    setOperation(event.target.value);
  };
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const manageAccounts = (enterId, enterAmount, selectedOperation) => {
    const operationData = {
      accountid: enterId,
      amount: Number(enterAmount * 100),
    };
    postManageAccount(operationData, selectedOperation);
    setOpen(true);
  };

  return (
    <div>
      <ButtonAppBar />
      <div className="vbFormPage">
        <Typography variant="h5" gutterBottom>
          Manage Account
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <FormControl component="fieldset" className="vbFormRadio">
            <FormLabel component="legend">Select Operation</FormLabel>
            <RadioGroup
              row
              aria-label="operation"
              name="operation"
              value={operation}
              onChange={oprationChange}
            >
              <FormControlLabel value="credit" control={<Radio />} label="Credit" />
              <FormControlLabel value="debit" control={<Radio />} label="Debit" />
            </RadioGroup>
          </FormControl>
          <FormControl className="vbFormElement">
            <InputLabel htmlFor="component-simple">Account Id</InputLabel>
            <Input id="component-simple" value={accountValue.match.params.aId} disabled />
          </FormControl>
          <FormControl className="vbFormElement">
            <InputLabel htmlFor="component-simple">Amount</InputLabel>
            <Input id="component-simple" type="number" value={amount} onChange={amountChange} />
          </FormControl>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to={`/userAccount/${accountValue.match.params.uId}`}
            onClick={() => manageAccounts(accountValue.match.params.aId, amount, operation)}
          >
            Save
          </Button>
          <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              you have sucessfully done
            </Alert>
          </Snackbar>
          <Button
            variant="contained"
            color="primary"
            size="small"
            component={Link}
            to={`/userAccount/${accountValue.match.params.uId}`}
          >
            Back
          </Button>
        </form>
      </div>
    </div>
  );
}
ManageAccountPage.propTypes = {
  accountValue: PropTypes.shape({
    match: PropTypes.shape({
      params: PropTypes.shape({
        aId: PropTypes.number.isRequired,
        uId: PropTypes.number.isRequired,
      }),
    }),
  }).isRequired,
};

export default ManageAccountPage;
