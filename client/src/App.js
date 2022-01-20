import React from "react";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import GlobalProvider from "./context/GlobalState";
import "./App.css";

const App = () => {
  return (
    <div className="container-fluid main-content">
      <GlobalProvider>
        <div className="container">
          <Header />
        </div>
        <div className="container">
          <div className="container-fluid d-flex">
            <Balance />
            <IncomeExpense />
          </div>
        </div>
        <div className="container d-flex">
          <div className="container-fluid">
            <AddTransaction />
          </div>
          <div className="container-fluid">
            <TransactionList />
          </div>
        </div>
      </GlobalProvider>
    </div>
  );
};

export default App;
