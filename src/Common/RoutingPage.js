import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from '../Components/LandingPage/LandingPage';
import HomePage from '../Components/HomePage/HomePage';
import SlideShowPage from '../Components/SlideShowPage/SlideShowPage';
import StepperPage from '../Components/StepperPage/StepperPage';
import CalculatorPage from '../Components/CalculatorPage/CalculatorPage';
import PuzzaleGamePage from '../Components/PuzzaleGamePage/PuzzaleGamePage';
import VirtualBankingPage from '../Components/VirtualBankingPage/VirtualBankingPage';
import NewAccountPage from '../Components/VirtualBankingPage/NewAccountPage';
import ManageAccountPage from '../Components/VirtualBankingPage/ManageAccountPage';
import VirtualBankingLogin from '../Components/VirtualBankingPage/VirtualBankingLogin';
import VirtualBankingNewRegister from '../Components/VirtualBankingPage/VirtualBankingNewRegister';
import UsersAccountPage from '../Components/VirtualBankingPage/UsersAccountPage';
import VirtualAccountActivity from '../Components/VirtualBankingPage/VirtualAccountActivity';
import UserActivityPage from '../Components/VirtualBankingPage/UserActivityPage';
import HigherOrderPage from '../Components/HigherOrderFunctionPage/HigherOrderPage';

function RoutingPage() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/slides/:id" component={SlideShowPage} />
        <Route exact path="/stepper/:id" component={StepperPage} />
        <Route exact path="/calculator" component={CalculatorPage} />
        <Route exact path="/puzzale" component={PuzzaleGamePage} />
        <Route exact path="/userAccount/:id" component={VirtualBankingPage} />
        <Route exact path="/newAccount/:id" component={NewAccountPage} />
        <Route exact path="/manageAccount/:uId/:aId" component={ManageAccountPage} />
        <Route exact path="/loginPage" component={VirtualBankingLogin} />
        <Route exact path="/createNewAccount" component={VirtualBankingNewRegister} />
        <Route exact path="/users" component={UsersAccountPage} />
        <Route exact path="/accountActivity/:uId/:aId" component={VirtualAccountActivity} />
        <Route exact path="/userActivity/:id" component={UserActivityPage} />
        <Route exact path="/higherOrderFunction" component={HigherOrderPage} />
      </div>
    </BrowserRouter>
  );
}

export default RoutingPage;
