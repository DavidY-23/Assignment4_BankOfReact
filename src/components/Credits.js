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

  //Parsing API
  async componentDidMount() {
    let linktoAPI = 'https://moj-api.herokuapp.com/credits';
    let response = await axios.get(linktoAPI);
    this.setState({creditsArray: response.data})
  }

  creditView = () => {
    const listofDebits = this.state.creditsArray.map((eachCredit) => 
    
      <li key={eachCredit.description}>{eachCredit.description}, ${eachCredit.amount}, {eachCredit.date}</li>
    ) 
    return (
      <ul>{listofDebits}</ul>
    )
  }


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
      accountBalance: prevState.accountBalance -  -Math.abs(e.target.amount.value),
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
        <input type="text" name="description" />
        <input type="number" name="amount" />
        <button type="submit">Add Credit</button>
      </form>
      <Link to="/">Return to Home</Link>
    </div>
    );
  }
}


export default Credits;