import React from "react";
import {
    CartesianGrid,
    LabelList,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

import {
    HiArrowUp,
    HiOutlineShoppingBag,
    HiQuestionMarkCircle,
} from "react-icons/hi";
import { Cell, Pie, PieChart } from "recharts";
const data = [
    {
        name: "January",
        sales: 80,
        orders: 50,
    },
    {
        name: "February",
        sales: 72,
        orders: 42,
    },
    {
        name: "March",
        sales: 54,
        orders: 30,
    },
    {
        name: "April",
        sales: 100,
        orders: 20,
    },
    {
        name: "May",
        sales: 50,
        orders: 50,
    },
    {
        name: "June",
        sales: 50,
        orders: 26,
    },
    {
        name: "July",
        sales: 90,
        orders: 70,
    },

    {
        name: "August",
        sales: 40,
        orders: 26,
    },
    {
        name: "September",
        sales: 90,
        orders: 26,
    },
    {
        name: "October",
        sales: 50,
        orders: 2,
    },
    {
        name: "November",
        sales: 75,
        orders: 36,
    },
    {
        name: "December",
        sales: 90,
        orders: 50,
    },
];

const data2 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};
export default function Dashboard() {
    let demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

    return (
        <div className="grid grid-cols-2 gap-8 mx-16">
            <div className="col-span-1 my-5 ">
                <h2 className="flex items-center text-2xl mb-6">
                    Sales Chart{" "}
                    <HiQuestionMarkCircle className="ml-4 text-yellow-500" />
                </h2>
                <div className="bg-gray-900 p-4 shadow-xl">
                    <div className="flex gap-8 items-center">
                        <h2 className="flex gap-2 items-center text-3xl">
                            <HiOutlineShoppingBag className="text-green-500" />{" "}
                            $10.552,40
                        </h2>
                        <h2 className="flex gap-2 items-center text-green-500 font-thin">
                            <HiArrowUp /> 8.30%
                        </h2>
                    </div>
                    <div className="my-8">
                        <ResponsiveContainer width="100%" aspect="2">
                            <LineChart
                                width={400}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid
                                    strokeDasharray="1"
                                    horizontal="true"
                                    vertical=""
                                />
                                <XAxis dataKey="name" axisLine="false" />
                                <YAxis stroke="#ff0ff0" />
                                <Tooltip />
                                <Legend iconType="circle" />
                                <Line
                                    type="monotone"
                                    dataKey="sales"
                                    stroke="#8884d8"
                                    activeDot={{ r: 8 }}
                                    strokeWidth="3"
                                    dot={{ stroke: "#8884d8", strokeWidth: 5 }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="orders"
                                    stroke="#82ca9d"
                                    strokeWidth="3"
                                    dot={{ stroke: "#82ca9d", strokeWidth: 5 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className="col-span-1 bg-gray-900 my-20 shadow-xl">
                <div className="w-full p-4 mx-auto block">
                    <PieChart width={400} height={400} className="mx-auto">
                        <Pie
                            dataKey="value"
                            data={data2}
                            fill="#8884d8"
                            label={renderCustomizedLabel}
                            labelLine={false}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Legend iconType="circle" />
                        <LabelList dataKey="value" position="bottom" />
                    </PieChart>
                </div>
            </div>
            <div></div>
        </div>
    );
}
