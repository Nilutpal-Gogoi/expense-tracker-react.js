import React, {useState, useContext} from 'react'
import {GlobalContext} from "../context/GlobalState"; 


export const AddTransaction = () => {
  // in form we need some component level state.
  const [text, setText] = useState();
  const [amount, setAmount] = useState(0);

  const {addTransaction} = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction);
  }

  return (
    <React.Fragment>
      <h3>Add new Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value = {text} onChange={(e) => setText(e.target.value)}placeholder="Enter text ..."></input>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br></br>
            (negative - expense, positive - income)
          </label>
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)}placeholder="Enter amount ..."></input>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </React.Fragment>
  )
}
