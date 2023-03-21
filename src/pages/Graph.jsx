import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  Tooltip,
  YAxis,
  Legend,
} from "recharts";

const data = [
  {
    u: 4000,
    r: 2400,
  },
  {
    u: 3000,
    r: 1398,
  },
  {
    u: 2000,
    r: 9800,
  },
  {
    u: 2780,
    r: 3908,
  },
  {
    u: 1890,
    r: 4800,
  },
  {
    u: 2390,
    r: 3800,
  },
  {
    u: 3490,
    r: 4300,
  },
];

export const Graph = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="r" label={{ value: "r", offset: 0 }} scale="band" />
        <YAxis
          label={{
            value: "Temrerature U(r, t)",
            angle: -90,
          }}
        />

        <Line type="monotone" dataKey="u" stroke="#8884d8" />

        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};
