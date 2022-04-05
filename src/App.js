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
    //console.log(response);
    console.log("data in App", response.data)
    this.setState({debitsArray: response.data})
    console.log("debitsArray", this.state.debitsArray)
    this.setState({creditsArray: responseCredit.data})
  }



  // Create Routes and React elements to be rendered using React components
  render() {  
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)  // Pass props to "LogIn" component
    const DebitComponent = () => (<Debit accountBalance={this.state.accountBalance} debitsArray={this.state.debitsArray}/>);
    const CreditComponent = () => (<Credit accountBalance={this.state.accountBalance} creditsArray={this.state.creditsArray}/>);

    return (
      <Router>
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

export default App;