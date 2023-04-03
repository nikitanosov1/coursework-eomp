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
import { getFirstGraphArray, getSecondGraphArray } from "./../util/util.js";
import { Link } from "react-router-dom";
import ReturnButton from "./../assets/back-button.png";

export const Graph = () => {
  const [firstGraph, setFirstGraph] = useState([]);
  const [secondGraph, setSecondGraph] = useState([]);
  const [labelsForFirstGraph, setLabelsForFirstGraph] = useState([]);
  const [labelsForSecondGraph, setLabelsForSecondGraph] = useState([]);

  useEffect(() => {
    const newFirstGraph = getFirstGraphArray();
    const newSecondGraph = getSecondGraphArray();
    setFirstGraph((prev) => newFirstGraph);
    setSecondGraph((prev) => newSecondGraph);

    if (newFirstGraph.length < 1 || newSecondGraph.length < 1) {
      return;
    }

    const newFirstLabels = [];
    for (const key in newFirstGraph[0]) {
      if (key !== "r") {
        newFirstLabels.push(key);
      }
    }
    setLabelsForFirstGraph((prev) => newFirstLabels);

    const newSecondLabels = [];
    for (const key in newSecondGraph[0]) {
      if (key !== "t") {
        newSecondLabels.push(key);
      }
    }
    setLabelsForSecondGraph((prev) => newSecondLabels);
  }, []);

  // const getHexRandomColor = () => {
  //   return "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  // };

  const getGradientHexColorByIndex = (index, len) => {
    if (len === 0) return;
    return (
      "#FF00" + parseInt((1 - parseFloat(index / len)) * 0xff).toString(16)
    );
  };

  return (
    <div className="min-w-[1300px] min-h-screen flex flex-col gap-10 py-20 px-10 justify-center items-center bg-[#132737]">
      <Link to="/home" className="absolute left-8 top-8">
        <img src={ReturnButton} alt="Вернуться назад" className="w-6 h-6"></img>
      </Link>

      {/* FIRST GRAPH */}
      <LineChart width={1200} height={600} data={firstGraph}>
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
          width={120}
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
        {labelsForFirstGraph.map((label, index) => (
          <Line
            key={label}
            type="monotone"
            dataKey={label}
            stroke={getGradientHexColorByIndex(
              index,
              labelsForFirstGraph.length
            )}
            strokeWidth="3"
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

      {/* SECOND GRAPH */}
      <LineChart width={1200} height={600} data={secondGraph}>
        <CartesianGrid stroke="#ccc" strokeDasharray="2 2"></CartesianGrid>
        <XAxis
          dataKey="t"
          label={{
            value: "Время t",
            position: "bottom",
            offset: 3,
          }}
        ></XAxis>
        <YAxis
          width={120}
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
        {labelsForSecondGraph.map((label, index) => (
          <Line
            key={label}
            type="monotone"
            dataKey={label}
            stroke={getGradientHexColorByIndex(
              index,
              labelsForSecondGraph.length
            )}
            strokeWidth="3"
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
