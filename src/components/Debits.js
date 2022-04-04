// src/components/Debits.js
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Debits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountBalance: this.props.accountBalance
    };
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
      <p>Balance: {this.state.accountBalance}</p>
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