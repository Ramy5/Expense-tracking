import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });

  return (
    <div>
      <div className="expense__item-date">
        <div className="month">{month}</div>
        <div className="year">{year}</div>
        <div className="day">{day}</div>
      </div>
    </div>
  );
};

export default ExpenseDate;
