import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  Tooltip,
  YAxis,
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
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="u" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis
          dataKey="r"
          label={{ value: "r", position: "ins", offset: 0 }}
          scale="band"
        />
        <YAxis
          dataKey="u"
          label={{
            value: "Temrerature U(r, t)",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <Tooltip />
      </LineChart>
    </div>
  );
};
