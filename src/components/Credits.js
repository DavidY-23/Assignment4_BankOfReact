// src/components/Credits.js
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Credits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountBalance: 0,
      creditsArray: [],
    };
  }

  //Creating the list of debits. 
  creditView = () => {
    const listofCredits = this.props.creditsArray.map((eachCredit) => 
    
      <li style={{listStylePosition: "inside"}}key={eachCredit.description}>{eachCredit.description}, ${eachCredit.amount}, {eachCredit.date.slice(0,10)}</li>
    ) 
    return (
      <ul>{listofCredits}</ul>
    )
  }

  //Function to add a new credit including the description, cost, and time.
  addCredit = (e) => {
    e.preventDefault()
    this.props.addingCredits(e)
    var currentDate = new Date();
    var currentMonth = currentDate.getUTCMonth() + 1
    var currentDay = currentDate.getUTCDate()
    var currentYear = currentDate.getUTCFullYear()
    var currentTime = currentYear + '-' + currentMonth + '-' + currentDay
    if (e.target.description.value === "" || e.target.amount.value === "")
      return;
    this.setState((prevState)=> ({
      accountBalance: (prevState.accountBalance -  -(e.target.amount.value)).toFixed(2),
      creditsArray: [...prevState.creditsArray, {description: e.target.description.value, amount: e.target.amount.value, date: currentTime}]
    }))
  }

  render() {
    return (
      <div>
      <h1>Credit</h1>
      {this.creditView()}
      <h2>Balance: {this.props.accountBalance}</h2>
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
      <br></br>
      <Link to="/debit">Debits</Link>
    </div>
    );
  }
}


export default Credits;