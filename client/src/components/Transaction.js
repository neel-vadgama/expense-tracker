import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <tr
      key={transaction._id}
      className={
        transaction.amount < 0
          ? "table-danger text-secondary"
          : "table-success text-secondary"
      }
    >
      <td>{transaction.text}</td>
      <td>
        {" "}
        {sign}
        {numberWithCommas(Math.abs(transaction.amount))}
      </td>
      <td>
        <i
          className="bi bi-x-square p-2"
          onClick={() => deleteTransaction(transaction._id)}
        ></i>
      </td>
    </tr>
  );
};

export default Transaction;
