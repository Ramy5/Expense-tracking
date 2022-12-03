import ChartItem from "./ChartItem";
import "./Chart.css";

const Chart = (props) => {
  const value = props.data.map((el) => el.value);
  const maxValue = Math.max(...value);

  return (
    <div>
      <div className="chart">
        {props.data.map((data) => {
          return (
            <ChartItem
              maxValue={maxValue}
              label={data.label}
              value={data.value}
              key={data.label}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Chart;
