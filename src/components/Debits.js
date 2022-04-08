// src/components/Debits.js
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Debits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountBalance: 0,
      debitsArray: [],
    };
  }

  //Creating the list of debits. 
  debitView = () => {
    const listofDebits = this.props.debitsArray.map((eachDebit) => 
      <li style={{listStylePosition: "inside"}} key={eachDebit.description}>{eachDebit.description}, ${eachDebit.amount}, {eachDebit.date}</li>
    ) 
    return (
      <ul>{listofDebits}</ul>
    )
  }

  //Function to add a new debit including the description, cost, and time.
  addDebit = (e) => {
    e.preventDefault()
    this.props.addingDebits(e)
    var currentDate = new Date();
    var currentMonth = currentDate.getUTCMonth() + 1
    var currentDay = currentDate.getUTCDate()
    var currentYear = currentDate.getUTCFullYear()
    var currentTime = currentYear + '-' + currentMonth + '-' + currentDay
    if (e.target.description.value === "" || e.target.amount.value === "")
      return;
    this.setState((prevState)=> ({
      accountBalance: (prevState.accountBalance - e.target.amount.value).toFixed(2),
      debitsArray: [...prevState.debitsArray, {description: e.target.description.value, amount: e.target.amount.value, date: currentTime}]
    }))
  }


  render() {
    return (
      <div>
      <h1>Debits</h1>
      {this.debitView()}

      <h2>Balance: {this.props.accountBalance}</h2>
      <form onSubmit={this.addDebit}>
      <label>Description: 
        <input type="text" name="description" />
        </label>
        <label> Amount:
        <input type="number" step="0.01" name="amount" />
        </label>
        <button type="submit">Add Debit</button>
      </form>
      <Link to="/">Return to Home</Link>
      <br></br>

    </div>
    );
  }
}

export default Debits