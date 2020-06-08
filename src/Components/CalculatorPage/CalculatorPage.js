import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './CalculatorPage.css';
import { Link } from 'react-router-dom';

function CalculatorPage() {
  const buttonValue = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/'];
  const [enterValue, setEnterValue] = useState('');
  const keyPress = (value) => {
    let a = enterValue;
    a += value;
    setEnterValue(a);
  };
  const equal = (calValue) => {
    // eslint-disable-next-line no-eval
    const equalValue = eval(calValue);
    setEnterValue(equalValue);
  };
  const reset = () => {
    setEnterValue('');
  };
  return (
    <div>
      <TextField disabled id="standard-disabled" label="calculator" value={enterValue} />
      <div className="calculatorButton">
        <Button variant="outlined" onClick={() => reset()}>
          C
        </Button>
        {buttonValue.map((value) => {
          return (
            <Button variant="outlined" name={value} onClick={() => keyPress(value)}>
              {value}
            </Button>
          );
        })}
        <Button variant="outlined" onClick={() => equal(enterValue)}>
          =
        </Button>
      </div>
      <Button variant="contained" color="primary" size="small" component={Link} to="/home">
        Back
      </Button>
    </div>
  );
}

export default CalculatorPage;
