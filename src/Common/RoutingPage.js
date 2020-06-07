import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from '../Components/LandingPage/LandingPage';
import HomePage from '../Components/HomePage/HomePage';
import SlideShowPage from '../Components/SlideShowPage/SlideShowPage';
import StepperPage from '../Components/StepperPage/StepperPage';
import CalculatorPage from '../Components/CalculatorPage/CalculatorPage';

function RoutingPage() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/slides/:id" component={SlideShowPage} />
        <Route exact path="/stepper/:id" component={StepperPage} />
        <Route exact path="/calculator" component={CalculatorPage} />
      </div>
    </BrowserRouter>
  );
}

export default RoutingPage;
