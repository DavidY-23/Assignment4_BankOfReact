// src/components/Debits.js
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'; 

class Debits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountBalance: this.props.accountBalance,
      debitsArray: this.props.debitsArray,
    };
  }

  //Parsing API
  async componentDidMount() {
    let linktoAPI = 'https://moj-api.herokuapp.com/debits';
    let response = await axios.get(linktoAPI);
    this.setState({debitsArray: response.data})
  }

  debitView = () => {
    const listofDebits = this.state.debitsArray.map((eachDebit) => 
    
      <li key={eachDebit.description}>{eachDebit.description}, ${eachDebit.amount}, {eachDebit.date}</li>
    ) 
    return (
      <ul>{listofDebits}</ul>
    )
  }


  addDebit = (e) => {
    e.preventDefault()
    var currentDate = new Date();
    var currentMonth = currentDate.getUTCMonth() + 1
    var currentDay = currentDate.getUTCDate()
    var currentYear = currentDate.getUTCFullYear()
    var currentTime = currentYear + '-' + currentMonth + '-' + currentDay
    if (e.target.description.value === "" || e.target.amount.value === "")
      return;
    this.setState((prevState)=> ({
      accountBalance: prevState.accountBalance - e.target.amount.value,
      debitsArray: [...prevState.debitsArray, {description: e.target.description.value, amount: e.target.amount.value, date: currentTime}]
    }))
  }

  render() {
    return (
      <div>
      <h1>Debits</h1>
      {this.debitView()}
      <h2>Balance: {this.state.accountBalance}</h2>
      <form onSubmit={this.addDebit}>
        <input type="text" name="description" />
        <input type="number" name="amount" />
        <button type="submit">Add Debit</button>
      </form>
      <Link to="/">Return to Home</Link>
    </div>
    );
  }
}


export default Debits;