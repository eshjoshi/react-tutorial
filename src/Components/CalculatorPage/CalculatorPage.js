import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './CalculatorPage.css';

function CalculatorPage() {
  const buttonValue = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/'];
  const [enterValue, setEnterValue] = useState('');
  const keyPress = (value) => {
    let a = enterValue;
    a += value;
    setEnterValue(a);
  };
  const equal = (calValue) => {
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
    </div>
  );
}

export default CalculatorPage;
