import ExpenseContainer from "./ExpenseContainer";
import ExpensesFormEditing from "./ExpenseFormEditing";

const Expenses = (props) => {
  return (
    <div>
      <ExpensesFormEditing newData={props.newData} />
      <ExpenseContainer data={props.expenseData} />
    </div>
  );
};

export default Expenses;
