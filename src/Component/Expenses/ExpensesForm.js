import { useState } from "react";
import "./ExpensesForm.css";

const ExpensesForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleValue = (e) => setTitle(e.target.value);
  const amountValue = (e) => setAmount(e.target.value);
  const dateValue = (e) => setDate(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();

    const newExpenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    props.onSave(newExpenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form className="expense__form" onSubmit={submitHandler}>
      <div>
        <div className="form__inputs">
          <div className="title__form">
            <label>Title</label>
            <input type="text" value={title} onChange={titleValue} />
          </div>
          <div className="amount__form">
            <label>Amount</label>
            <input
              type="number"
              min="0.1"
              step="0.1"
              value={amount}
              onChange={amountValue}
            />
          </div>
          <div className="date__form">
            <label>Date</label>
            <input
              type="date"
              min="2022-01-01"
              max="2024-12-30"
              value={date}
              onChange={dateValue}
            />
          </div>
        </div>
        <div className="btn__form">
          <button type="button" onClick={props.cancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpensesForm;
