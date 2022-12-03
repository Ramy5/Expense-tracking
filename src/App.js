import { useState } from "react";
import Expenses from "./Component/Expenses/Expenses";
import "./App.css";

const DUMMY__EXPENSES = Object.freeze([]);

function App() {
  const [data, setData] = useState(DUMMY__EXPENSES);

  const newExpenseItem = (data) => {
    setData((prevData) => {
      return [data, ...prevData];
    });
  };

  return (
    <div>
      <Expenses expenseData={data} newData={newExpenseItem} />
    </div>
  );
}

export default App;
