// src/components/Debits.js
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'; 

class Debits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountBalance: this.props.accountBalance,
      debitsList: []
    };
  }
  async componentDidMount() {
    let linktoAPI = 'https://moj-api.herokuapp.com/debits';
    let response = await axios.get(linktoAPI);
    console.log(response);
    console.log("data", response.data)
    this.setState({debitsList: response.data})
  }




  debitView = () => {
    return(
      this.state.debitsList.map((debitList) => {
        return(
          <ul>{debitList.description}, ${debitList.amount}, {debitList.date}</ul>

        )
      })

    )
  }


  addDebit = (e) => {
    e.preventDefault()
    this.setState((prevState)=> ({
      accountBalance: prevState.accountBalance - e.target.amount.value
    }))

    console.log(e.target.amount.value)
  }

  render() {
    return (
      <div>
      <h1>Debits</h1>
      <h2>Balance: {this.state.accountBalance}</h2>
      {this.debitView()}
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