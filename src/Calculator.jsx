import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isNewCalculation, setIsNewCalculation] = useState(true);

  const handleClick = (value) => {
    if (isNewCalculation) {
      if (result && ['+', '-', '*', '/'].includes(value)) {
        setInput(result + value);
      } else {
        setInput(value);
      }
      setIsNewCalculation(false);
    } else {
      setInput(input + value);
    }
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult.toString());
      setIsNewCalculation(true);
    } catch {
      setResult('Error');
    }
  };

  const handleClearInput = () => {
    setInput('');
    setIsNewCalculation(true);
  };

  const handleClearResult = () => {
    setResult('');
    setIsNewCalculation(true);
  };

  return (
    <div className="calculator">
      <input
        type="text"
        value={input}
        readOnly
        placeholder="Calculation"
      />
      <div className="result">
        <span>Result: </span>
        <span>{result}</span>
      </div>
      <div className="buttons">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
          <button key={num} onClick={() => handleClick(num.toString())}>{num}</button>
        ))}
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button className="operator" onClick={() => handleClick('+')}>+</button>
        <button className="operator" onClick={() => handleClick('-')}>-</button>
        <button className="operator" onClick={() => handleClick('*')}>*</button>
        <button className="operator" onClick={() => handleClick('/')}>/</button>
        <button className="equal" onClick={handleCalculate}>=</button>
        <button className="clear-input" onClick={handleClearInput}>Clear Input</button>
        <button className="clear-result" onClick={handleClearResult}>Clear Result</button>
      </div>
    </div>
  );
}

export default Calculator;
