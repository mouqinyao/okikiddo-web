import * as React from "react";
import * as d3 from "d3";

const data = [146, 20, 25, 4];

export const SimplePieChart = () => {
  const height = 100;
  const width = 100;

  let pie = d3.pie()(data);

  return (
    <svg height={height} width={width}>
      <g transform={`translate(${width / 2},${height / 2})`}>
        <Slice pie={pie} />
      </g>
    </svg>
  );
};

const Slice = props => {
  let { pie } = props;

  let arc = d3
    .arc()
    .innerRadius(30)
    .outerRadius(50);

  let colors = ['#15a7f7', '#add8ed', '#ffb626', '#666666'];

  return pie.map((slice, index) => {
    let sliceColor = colors[index];

    return <path key={index} d={arc(slice)} fill={sliceColor} />;
  });
};
