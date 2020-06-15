import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { postLogin } from './VirtualBankingService';
import './VirtualBankingPage.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function VirtualBankingLogin() {
  const [userName, setUserName] = React.useState();
  const [password, setPassword] = React.useState();

  const classes = useStyles();
  const history = useHistory();

  const userNameChange = (event) => {
    setUserName(event.target.value);
  };
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };
  const loginAccount = (loginUsername, loginPassword) => {
    const loginAccountData = {
      username: loginUsername,
      password: loginPassword,
    };
    postLogin(loginAccountData).then((response) => {
      if (response !== undefined) {
        localStorage.setItem('token', response.token);
        history.push('/users');
      }
    });
  };

  return (
    <div className="vbFormPage">
      <Typography variant="h5" gutterBottom>
        Bank Login
      </Typography>
      <form className={classes.root} noValidate autoComplete="on">
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
          onClick={() => loginAccount(userName, password)}
        >
          Login
        </Button>
        <Button variant="contained" color="primary" size="small" component={Link} to="/home">
          Back
        </Button>
        <Typography variant="h6" gutterBottom>
          If you have not bank Account
          <Link to="/createNewAccount"> Register here </Link>
        </Typography>
      </form>
    </div>
  );
}

export default VirtualBankingLogin;
