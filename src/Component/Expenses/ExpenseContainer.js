import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import "./ExpenseContainer.css";

const ExpenseContainer = (props) => {
  const [select, setSelect] = useState("2022");
  const selectFilter = (select) => setSelect(select);

  const filteringItems = props.data.filter(
    (data) => data.date.getFullYear() === +select
  );

  let itemResults = <h2 className="no__expense">Found no expenses.</h2>;
  if (filteringItems.length > 0)
    itemResults = filteringItems.map((data) => (
      <ExpenseItem
        key={data.id}
        title={data.title}
        amount={data.amount}
        date={data.date}
      />
    ));

  return (
    <Card className="expense__container">
      <ExpenseFilter select={select} selecting={selectFilter} />
      <ExpenseChart data={filteringItems} />
      {itemResults}
    </Card>
  );
};

export default ExpenseContainer;
