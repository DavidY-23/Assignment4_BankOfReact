// src/components/Credits.js
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'; 

class Credits extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      accountBalance: this.props.accountBalance,
      creditsArray: this.props.creditsArray,
    };
  }

  //Parsing API for credits
  async componentDidMount() {
    document.title = "Credits"
    let linktoAPI = 'https://moj-api.herokuapp.com/credits';
    let response = await axios.get(linktoAPI);
    this.setState({creditsArray: response.data})
  }
  //Creating the list of debits. 
  creditView = () => {
    const listofCredits = this.state.creditsArray.map((eachCredit) => 
    
      <li style={{listStylePosition: "inside"}}key={eachCredit.description}>{eachCredit.description}, ${eachCredit.amount}, {eachCredit.date}</li>
    ) 
    return (
      <ul>{listofCredits}</ul>
    )
  }

  //Function to add a new credit including the description, cost, and time.
  addCredit = (e) => {
    e.preventDefault()
    var currentDate = new Date();
    var currentMonth = currentDate.getUTCMonth() + 1
    var currentDay = currentDate.getUTCDate()
    var currentYear = currentDate.getUTCFullYear()
    var currentTime = currentYear + '-' + currentMonth + '-' + currentDay
    if (e.target.description.value === "" || e.target.amount.value === "")
      return;
    this.setState((prevState)=> ({
      accountBalance: (prevState.accountBalance -  -Math.abs(e.target.amount.value)).toFixed(2),
      creditsArray: [...prevState.creditsArray, {description: e.target.description.value, amount: e.target.amount.value, date: currentTime}]
    }))
  }

  render() {
    return (
      <div>
      <h1>Credit</h1>
      {this.creditView()}
      <h2>Balance: {this.state.accountBalance}</h2>
      <form onSubmit={this.addCredit}>
        <label>Description: 
        <input type="text" name="description" />
        </label>
        <label> Amount:
        <input type="number" step="0.01" name="amount" />
        </label>
        <button type="submit">Add Credit</button>
      </form>
      <Link to="/">Return to Home</Link>
    </div>
    );
  }
}


export default Credits;