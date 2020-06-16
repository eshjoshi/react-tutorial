import React from 'react';

function HigherOrderPage() {
  // without Map function
  const squareArray = (square, value) => {
    const result = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < value.length; i++) {
      result.push(square(value[i]));
    }
    return result;
  };

  const input = [1, 2, 3, 4];
  const square = (x) => x * x;

  const output = squareArray(square, input);

  // with Map function
  // eslint-disable-next-line no-restricted-properties
  const withMapOutput = input.map((sq) => Math.pow(sq, 2));

  const inverseOutput = input.map((inv) => 1 / inv);

  return (
    <div>
      <div>Higher Order function</div>
      <div>without map function</div>
      <div> input {JSON.stringify(input)}</div>
      <div> Output {JSON.stringify(output)}</div>
      <div>with map function</div>
      <div> input {JSON.stringify(input)}</div>
      <div> Output {JSON.stringify(withMapOutput)}</div>
      <div>with map function Inverse</div>
      <div> input {JSON.stringify(input)}</div>
      <div> Output {JSON.stringify(inverseOutput)}</div>
    </div>
  );
}

export default HigherOrderPage;
