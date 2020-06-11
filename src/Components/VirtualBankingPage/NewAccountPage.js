import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { postAccount } from './VirtualBankingService';
import './VirtualBankingPage.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function NewAccountPage() {
  const [userId, setUserId] = React.useState('E');
  const [balance, setBalance] = React.useState(0);

  const classes = useStyles();

  const userIdChange = (event) => {
    setUserId(event.target.value);
  };
  const balanceChange = (event) => {
    setBalance(event.target.value);
  };
  const addNewAccount = (newId, newBalance) => {
    const account = {
      userid: newId,
      balance: Number(newBalance * 100),
    };
    postAccount(account);
  };

  return (
    <div className="vbFormPage">
      <Typography variant="h5" gutterBottom>
        Add New Account
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <FormControl className="vbFormElement">
          <InputLabel htmlFor="component-simple">User Id</InputLabel>
          <Input id="component-simple" value={userId} onChange={userIdChange} />
        </FormControl>
        <FormControl className="vbFormElement">
          <InputLabel htmlFor="component-simple">Amount</InputLabel>
          <Input id="component-simple" type="number" value={balance} onChange={balanceChange} />
        </FormControl>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to="/banking"
          onClick={() => addNewAccount(userId, balance)}
        >
          Save
        </Button>
        <Button variant="contained" color="primary" size="small" component={Link} to="/banking">
          Back
        </Button>
      </form>
    </div>
  );
}

export default NewAccountPage;
