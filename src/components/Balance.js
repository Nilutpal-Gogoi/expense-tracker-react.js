import React, {useContext} from 'react';
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount)
  console.log(amounts);
  const total = amounts.reduce((acc,item) => (acc += item), 0).toFixed(2); // toFixed converts a number into a string, rounding the number to keep only two decimals. 

  return (
    <React.Fragment>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </React.Fragment>
  )
}
