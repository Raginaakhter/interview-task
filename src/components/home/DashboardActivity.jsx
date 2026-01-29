

function DashboardActivity() {
  
  const activities = [
    { text: "AI booked appointment for iPhone 13 screen repair", time: "2 min ago", status: "#10b981" },
    { text: "Warm transfer to technician - Software issue", time: "5 min ago", status: "#f97316" },
    { text: "Quote provided for iPad battery replacement", time: "8 min ago", status: "#10b981" },
    { text: "Call dropped after 12 seconds", time: "15 min ago", status: "#f97316" }
  ];

  const repairs = [
    { 
      name: "Screen Repair", 
      count: 156, 
      width: "100%", 
      gradient: "linear-gradient(90deg, #2B7FFF 0%, #00B8DB 100%)" 
    },
    { 
      name: "Battery Replacement", 
      count: 89, 
      width: "57%", 
      gradient: "linear-gradient(90deg, #2B7FFF 0%, #00B8DB 100%)" 
    },
    { 
      name: "Back Glass Repair", 
      count: 67, 
      width: "43%", 
      gradient: "linear-gradient(90deg, #2B7FFF 0%, #1e5dd8 100%)" 
    },
    { 
      name: "Software Issues", 
      count: 45, 
      width: "29%", 
      gradient: "linear-gradient(90deg, #1e5dd8 0%, #1a4bb8 100%)" 
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
      
      {/* Recent Activity */}
      <div className="bg-[#0f1f3a] rounded-2xl p-8">
        <h2 className="text-white text-2xl font-semibold mb-6">
          Recent Activity
        </h2>
        
        <div className="space-y-5">
          {activities.map((activity, index) => (
            <div key={index} className="flex gap-4">
              <div 
                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: activity.status }}
              ></div>
              <div>
                <p className="text-white text-base leading-relaxed">{activity.text}</p>
                <p className="text-gray-400 text-sm mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Repair Requests */}
      <div className="bg-[#0f1f3a] rounded-2xl p-8">
        <h2 className="text-white text-2xl font-semibold mb-6">
          Top Repair Requests
        </h2>
        
        <div className="space-y-6">
          {repairs.map((repair, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-white text-base">{repair.name}</span>
                <span className="text-gray-400 text-sm">{repair.count} requests</span>
              </div>
              <div className="w-full bg-[#1a2942] rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: repair.width,
                    background: repair.gradient
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default DashboardActivity;