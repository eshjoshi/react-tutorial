import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { postRegister } from './VirtualBankingService';
import './VirtualBankingPage.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function VirtualBankingNewRegister() {
  const classes = useStyles();

  const [fullName, setFullName] = React.useState();
  const [userName, setUserName] = React.useState();
  const [password, setPassword] = React.useState();

  const userNameChange = (event) => {
    setUserName(event.target.value);
  };
  const fullNameChange = (event) => {
    setFullName(event.target.value);
  };
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };
  const resisterAccount = (registerFullname, registerUsername, registerPassword) => {
    const registerAccountData = {
      fullname: registerFullname,
      username: registerUsername,
      password: registerPassword,
    };
    postRegister(registerAccountData);
  };

  return (
    <div className="vbFormPage">
      <Typography variant="h5" gutterBottom>
        Create New Account
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <FormControl className="vbFormElement">
          <InputLabel htmlFor="component-simple">Full Name</InputLabel>
          <Input id="component-simple" value={fullName} onChange={fullNameChange} />
        </FormControl>
        <FormControl className="vbFormElement">
          <InputLabel htmlFor="component-simple">User Name</InputLabel>
          <Input id="component-simple" value={userName} onChange={userNameChange} />
        </FormControl>
        <FormControl className="vbFormElement">
          <InputLabel htmlFor="component-simple">Password</InputLabel>
          <Input id="component-simple" type="password" value={password} onChange={passwordChange} />
        </FormControl>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to="/loginPage"
          onClick={() => resisterAccount(fullName, userName, password)}
        >
          Register
        </Button>
        <Button variant="contained" color="primary" size="small" component={Link} to="/home">
          Back
        </Button>
        <Typography variant="h6" gutterBottom>
          If you have already Account
          <Link to="/loginPage"> Login here </Link>
        </Typography>
      </form>
    </div>
  );
}

export default VirtualBankingNewRegister;
