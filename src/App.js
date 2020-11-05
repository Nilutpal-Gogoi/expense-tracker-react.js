import React from "react";
import {Header} from "./components/Header"
import {Balance} from "./components/Balance";
import './App.css';
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

function App() {
  return (
    <div>
      <Header></Header>
      <div className = "container">
        <Balance></Balance>
        <IncomeExpenses></IncomeExpenses>
        <TransactionList></TransactionList>
        <AddTransaction></AddTransaction>
      </div>
    </div>
  );
}

export default App;
