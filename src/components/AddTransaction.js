import React, {useState} from 'react'

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <React.Fragment>
      <h3>Add new Transaction</h3>
      <form id="form">
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
