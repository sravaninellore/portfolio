// src/BMICalculator.js
import React, { useState } from 'react';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const validWeight = parseFloat(weight);
    const validHeight = parseFloat(height);

    if (isNaN(validWeight) || isNaN(validHeight) || validWeight < 1.0 || validWeight > 300.0 || validHeight < 0.1 || validHeight > 3.0) {
      alert('Invalid input values. Please enter valid values.');
    } else {
      const calculatedBMI = (validWeight / Math.pow(validHeight, 2)).toFixed(1);
      setBMI(calculatedBMI);
    }
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <label>
        Weight (kg):
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </label>
      <br />
      <label>
        Height (m):
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </label>
      <br />
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi !== null && <p>Your BMI: {bmi}</p>}
    </div>
  );
}

export default BMICalculator;
