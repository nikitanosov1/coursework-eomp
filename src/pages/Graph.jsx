import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  Tooltip,
  YAxis,
  Legend,
} from "recharts";
import { getGraphArray } from "./../util/util.js";
import { Link } from "react-router-dom";
import ReturnButton from "./../assets/back-button.png";

export const Graph = () => {
  const [graphArray, setGraphArray] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const newGraph = getGraphArray();
    setGraphArray((prev) => newGraph);

    if (newGraph.length < 1) {
      return;
    }

    const newLabels = [];
    for (const key in newGraph[0]) {
      if (key !== "r") {
        newLabels.push(key);
      }
    }
    setLabels((prev) => newLabels);
  }, []);

  console.log(graphArray);

  // const getHexRandomColor = () => {
  //   return "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  // };

  const getGradientHexColorByIndex = (index) => {
    if (labels.length === 0) return;
    return (
      "#FF00" +
      parseInt((1 - parseFloat(index / labels.length)) * 0xff).toString(16)
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#132737]">
      <Link to="/home" className="absolute left-8 top-8">
        <img src={ReturnButton} className="w-6 h-6"></img>
      </Link>
      <LineChart width={1200} height={600} data={graphArray}>
        <CartesianGrid stroke="#ccc" strokeDasharray="2 2"></CartesianGrid>
        <XAxis
          dataKey="r"
          label={{
            value: "Радиус r",
            position: "bottom",
            offset: 3,
          }}
        ></XAxis>
        <YAxis
          label={{
            value: "Температура U(r, t)",
            angle: -90,
          }}
        ></YAxis>
        <Tooltip></Tooltip>
        <Legend
          wrapperStyle={{
            paddingTop: "40px",
          }}
        ></Legend>
        {labels.map((label, index) => (
          <Line
            type="monotone"
            dataKey={label}
            stroke={getGradientHexColorByIndex(index)}
            strokeWidth="5"
            dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 0 }}
            activeDot={{
              fill: "#2e4355",
              stroke: "#8884d8",
              strokeWidth: 5,
              r: 2,
            }}
          />
        ))}
      </LineChart>
    </div>
  );
};
