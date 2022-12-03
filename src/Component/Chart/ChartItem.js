import "./ChartItem.css";

const ChartItem = (props) => {
  let heightValue = "0%";

  if (props.maxValue > 0)
    heightValue = `${Math.round((props.value / props.maxValue) * 100)}%`;

  return (
    <div className="chart__item">
      <div className="item">
        <div className="main__item">
          <div
            className="chart__item-fill"
            style={{ height: heightValue }}
          ></div>
        </div>
        <label className="chart__item-label">{props.label}</label>
      </div>
    </div>
  );
};

export default ChartItem;
