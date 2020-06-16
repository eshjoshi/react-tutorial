import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { postAccount } from './VirtualBankingService';
import './VirtualBankingPage.css';
import ButtonAppBar from './Appbar';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function NewAccountPage(props) {
  const [balance, setBalance] = React.useState(0);
  const accountValue = props;
  const classes = useStyles();
  const balanceChange = (event) => {
    setBalance(event.target.value);
  };
  const addNewAccount = (newBalance) => {
    const account = {
      userid: accountValue.match.params.id,
      balance: Number(newBalance * 100),
    };
    postAccount(account);
  };

  return (
    <div>
      <ButtonAppBar />
      <div className="vbFormPage">
        <Typography variant="h5" gutterBottom>
          Add New Account
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <FormControl className="vbFormElement">
            <InputLabel htmlFor="component-simple">User Id</InputLabel>
            <Input id="component-simple" value={accountValue.match.params.id} disabled />
          </FormControl>
          <FormControl className="vbFormElement">
            <InputLabel htmlFor="component-simple">Amount</InputLabel>
            <Input id="component-simple" type="number" value={balance} onChange={balanceChange} />
          </FormControl>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/users"
            onClick={() => addNewAccount(balance)}
          >
            Save
          </Button>
          <Button variant="contained" color="primary" size="small" component={Link} to="/users">
            Back
          </Button>
        </form>
      </div>
    </div>
  );
}

NewAccountPage.propTypes = {
  accountValue: PropTypes.shape({
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }),
    }),
  }).isRequired,
};

export default NewAccountPage;
