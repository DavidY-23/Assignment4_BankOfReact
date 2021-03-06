// src/App.js

import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Debit from './components/Debits';
import Credit from './components/Credits';
import axios from 'axios'; 

class App extends Component {
  constructor() {  // Create and initialize state
    super(); 
    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '07/23/96',
      },
      debitsArray: [],
      creditsArray: [],
    }
  }


  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  //Parses API for debits
  async componentDidMount() {
    let linktoAPI = 'https://moj-api.herokuapp.com/debits';
    let linktoAPICredit = 'https://moj-api.herokuapp.com/credits'
    let response = await axios.get(linktoAPI);
    let responseCredit = await axios.get(linktoAPICredit)
    this.setState({debitsArray: response.data})
    this.setState({creditsArray: responseCredit.data})
  }

  //Change value of accountBalance and debitArray props when adding a new debit. 
  addingDebits = (e) => {
    if (e.target.description.value === "" || e.target.amount.value === "")
    return;
    var currentDate = new Date();
    var currentMonth = currentDate.getUTCMonth() + 1
    var currentDay = currentDate.getUTCDate()
    var currentYear = currentDate.getUTCFullYear()
    var currentTime = currentYear + '-' + currentMonth + '-' + currentDay
    this.setState((prevState)=> ({
      accountBalance: (this.state.accountBalance - e.target.amount.value).toFixed(2),
      debitsArray: [...prevState.debitsArray, {description: e.target.description.value, amount: e.target.amount.value, date: currentTime}],
    }))
  }
  //Change value of accountBalance and creditArray props when adding a new debit.  
  addingCredits = (e) => {
    if (e.target.description.value === "" || e.target.amount.value === "")
    return;
    var currentDate = new Date();
    var currentMonth = currentDate.getUTCMonth() + 1
    var currentDay = currentDate.getUTCDate()
    var currentYear = currentDate.getUTCFullYear()
    var currentTime = currentYear + '-' + currentMonth + '-' + currentDay
    this.setState((prevState)=> ({
      accountBalance: (this.state.accountBalance -  -(e.target.amount.value)).toFixed(2),
      creditsArray: [...prevState.creditsArray, {description: e.target.description.value, amount: e.target.amount.value, date: currentTime}],
    }))
  }

  // Create Routes and React elements to be rendered using React components
  render() {  
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)  // Pass props to "LogIn" component
    const DebitComponent = () => (<Debit accountBalance={this.state.accountBalance} debitsArray={this.state.debitsArray} addingDebits={this.addingDebits}/>);
    const CreditComponent = () => (<Credit accountBalance={this.state.accountBalance} creditsArray={this.state.creditsArray} addingCredits={this.addingCredits}/>);

    return (
      <Router basename="/Assignment4_BankOfReact">
        <div>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/debit" render={DebitComponent}/>
          <Route exact path="/credit" render={CreditComponent}/>
        </div>
      </Router>
    );
  }
}

export default App