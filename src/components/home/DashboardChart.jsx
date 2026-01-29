import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", calls: 55 },
  { day: "Tue", calls: 65 },
  { day: "Wed", calls: 60 },
  { day: "Thu", calls: 70 },
  { day: "Fri", calls: 90 },
  { day: "Sat", calls: 100 },
  { day: "Sun", calls: 60 },
];

export default function DashboardChart() {
  return (
   <div className="bg-[#0c1627] m-6">
     <div className="  p-4 rounded-lg text-white max-w-full">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-lg font-semibold">Call Trends - This Week</h2>
          <p className="text-sm text-gray-400">Total: 472 calls</p>
        </div>
        <select
          className="bg-[#1e293b] text-white px-3 py-1 rounded"
          defaultValue="this-week"
        >
          <option value="this-week">This Week</option>
          <option value="last-week">Last Week</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={150}>
        <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="day"
            stroke="#64748b"
            tickLine={false}
            axisLine={false}
            padding={{ left: 10, right: 10 }}
          />
          <YAxis
            stroke="#64748b"
            tickCount={6}
            domain={[0, 100]}
            tickLine={false}
            axisLine={false}
          />
          <CartesianGrid vertical={false} stroke="#334155" strokeDasharray="3 3" />
          <Tooltip
            contentStyle={{ backgroundColor: "#1e293b", borderRadius: 4 }}
            labelStyle={{ color: "#94a3b8" }}
            itemStyle={{ color: "#3b82f6" }}
          />
          <Area
            type="monotone"
            dataKey="calls"
            stroke="#3b82f6"
            strokeWidth={2}
            fill="url(#colorCalls)"
            fillOpacity={0.3}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
   </div>
  );
}
