// src/App.js
import React from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import BMICalculator from './components/BMICalculator'; // Adjust the path
import CandidateDetails from './components/CandidateDetails'; // Adjust the path

function App() {
  return (
    <Router>
      <div>
        <h1>Landing Page</h1>
        <section>
          <CandidateDetails />
        </section>
        <section>
          <a href="/resume.pdf" download>
            Download Resume
          </a>
        </section>
        <section>
          <Link to="/bmi">BMI Calculation page</Link>
        </section>

        <Route path="/bmi" component={BMICalculator} />
      </div>
    </Router>
  );
}

export default App;
