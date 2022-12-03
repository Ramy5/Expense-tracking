import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div className="expense__item">
      <div className="date__title">
        <ExpenseDate date={props.date} />
        <h2 className="expense__item-title">{props.title}</h2>
      </div>
      <span className="expense__item-amount">${props.amount}</span>
    </div>
  );
};

export default ExpenseItem;
