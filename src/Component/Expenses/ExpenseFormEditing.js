import { useState } from "react";
import ExpensesForm from "./ExpensesForm";
import "./ExpenseFormEditing.css";
import Card from "../UI/Card";

const ExpensesFormEditing = (props) => {
  const [isEdit, setIsEdit] = useState(false);

  const getData = (enteredData) => {
    const newExpenseData = {
      ...enteredData,
      id: Date.now(),
    };

    props.newData(newExpenseData);
  };

  const isEditHandler = () => setIsEdit(true);
  const cancelHandler = () => setIsEdit(false);

  return (
    <Card className="new__container">
      {!isEdit && (
        <button
          className="new__expense-btn"
          type="button"
          onClick={isEditHandler}
        >
          Add new Expense
        </button>
      )}
      {isEdit && <ExpensesForm onSave={getData} cancel={cancelHandler} />}
    </Card>
  );
};

export default ExpensesFormEditing;
