import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((total_val, item) => (total_val += item), 0);

  return (
    <div className="col-sm border p-3 m-2 bg-light">
      <p className="text-primary f-s h4">Your Account Balance</p>
      <p className="f-s text-primary h4">{numberWithCommas(total)}</p>
    </div>
  );
};

export default Balance;
