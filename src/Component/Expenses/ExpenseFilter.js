import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const changeExpenseHandler = (e) => props.selecting(e.target.value);

  return (
    <div>
      <div className="expense__filter">
        <label className="expense__filter-label">Filter by year</label>
        <select
          value={props.select}
          className="expense__filter-select"
          onChange={changeExpenseHandler}
        >
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
