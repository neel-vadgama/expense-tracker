import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((total, amount) => (total += amount), 0);

  const expense =
    amounts
      .filter((amount) => amount < 0)
      .reduce((total, amount) => (total += amount), 0) * -1;

  return (
    <>
      <div className="col-sm text-success border p-3 m-2 bg-light">
        <p className="h4">Income</p>
        <p className="h4">{numberWithCommas(income)}</p>
      </div>
      <div className="col-sm text-danger border p-3 m-2 bg-light">
        <p className="h4">Expense</p>
        <p className="h4">{numberWithCommas(expense)}</p>
      </div>
    </>
  );
};

export default IncomeExpense;
