
import { Phone, Bot, ArrowRightLeft, Calendar, PhoneOff, Clock } from "lucide-react"

const statsData = [
  {
    title: "Total Calls Today",
    value: "127",
    change: "+12%",
    icon: <Phone size={20} strokeWidth={2} />,
    iconBg: "#0ea5e9",
  },
  {
    title: "AI-Handled Calls",
    value: "98",
    change: "+77%",
    icon: <Bot size={20} strokeWidth={2} />,
    iconBg: "#f97316",
  },
  {
    title: "Warm Transfer",
    value: "23",
    change: "+18%",
    icon: <ArrowRightLeft size={20} strokeWidth={2} />,
    iconBg: "#0ea5e9",
  },
  {
    title: "Appointments Booked",
    value: "34",
    change: "+8%",
    icon: <Calendar size={20} strokeWidth={2} />,
    iconBg: "#f97316",
  },
  {
    title: "Missed/Failed Calls",
    value: "6",
    change: "-3%",
    isNegative: true,
    icon: <PhoneOff size={20} strokeWidth={2} />,
    iconBg: "#ef4444",
  },
  {
    title: "Avg Call Duration",
    value: "3:42",
    change: "+15%",
    icon: <Clock size={20} strokeWidth={2} />,
    iconBg: "#0ea5e9",
  },
]

export function DashboardCard() {
  return (
    <div>
      <div className=" w-full  p-6">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="relative bg-[#0c1627] rounded-xl p-5 flex flex-col justify-between min-h-[140px]"
            style={{
              boxShadow: `
                0 0 0 1px rgba(56, 189, 248, 0.15),
                0 0 20px rgba(56, 189, 248, 0.05),
                inset 0 0 30px rgba(56, 189, 248, 0.02)
              `
            }}
          >
            {/* Top row: Title and Icon */}
            <div className="flex items-start justify-between">
              <span className="text-[#6b7a90] text-sm font-medium">{stat.title}</span>
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                style={{ backgroundColor: stat.iconBg }}
              >
                {stat.icon}
              </div>
            </div>

            {/* Bottom: Value and Change */}
            <div className="mt-4">
              <h2 className="text-white text-3xl font-semibold tracking-tight">
                {stat.value}
              </h2>
              <span
                className={`text-sm font-medium ${
                  stat.isNegative ? "text-red-500" : "text-emerald-400"
                }`}
              >
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

