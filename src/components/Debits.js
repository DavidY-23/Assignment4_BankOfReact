// src/components/Debits.js
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'; 
import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';

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
    //console.log(response);
    console.log("data in App", response.data)
    this.setState({debitsArray: response.data})
    console.log("debitsArray", this.state.debitsArray)
  }

  debitView = () => {
    const listofDebits = this.state.debitsArray.map((eachDebit) => 
      <li key={eachDebit.description}>{eachDebit.description}, ${eachDebit.amount}, {eachDebit.date}</li>
    ) 
    console.log("listofDebit: ", listofDebits)
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
    console.log("month", currentMonth, "day", currentDay, "year", currentYear)
    var currentTime = currentYear + '-' + currentMonth + '-' + currentDay
    console.log("the time is", currentTime)
    this.setState((prevState)=> ({
      accountBalance: prevState.accountBalance - e.target.amount.value,
      debitsArray: [...prevState.debitsArray, {description: e.target.description.value, amount: e.target.amount.value, date: currentTime}]
    }))
    return (
      <li>Apple</li>
      //console.log(e.target.description.value)
    )
    //console.log(e.target.amount.value)
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
    </div>
    );
  }
}


const Debit = (props) => {
	let debitsView = () => {
    const { debits } = props;
    return debits.map((debit) => {
      let date = debit.date.slice(0,10);
      return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
    }) 
  }
  return (
    <div>
      <h1>Debits</h1>
      {debitsView()}
      <form onSubmit={props.addDebit}>
        <input type="text" name="description" />
        <input type="number" name="amount" />
        <button type="submit">Add Debit</button>
      </form>
    </div>
  )
}

export default Debits;