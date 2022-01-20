import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <div className="col-sm border p-3 m-2 text-secondary bg-light">
      <p className="h4 border-bottom pb-2">Add new Transaction</p>
      <form onSubmit={onSubmit}>
        <div className="my-3 row">
          <label htmlFor="text" className="h5">
            Text
          </label>
          <input
            className="input-box"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="my-3 row">
          <label htmlFor="amount" className="h5">
            Amount
            <br /> (negative - expense, positive - income)
          </label>
          <input
            className="input-box"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn bg-primary text-light">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
