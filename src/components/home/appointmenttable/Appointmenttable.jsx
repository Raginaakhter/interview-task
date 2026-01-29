const AppointmentTable = () => {

  const appointments = [
    { id: 1, name: 'Jane D', phone: '01960688tf5765', email: 'admin@gmail.com', device: 'Apple/iphone 13pro', repair: 'Screen', date: '02/06/2026', slot: '1', time: '09:00' },
    { id: 2, name: 'Jane D', phone:  '0196068b5765', email: 'admin@gmail.com', device: 'Apple/iphone 13pro', repair: 'Screen', date: '02/06/2026', slot: '1', time: '10:00' },
    { id: 3, name: 'Jane D', phone: '0196068579985', email: 'admin@gmail.com', device: 'Apple/iphone 13pro', repair: 'Screen', date: '02/06/2026', slot: '1', time: '11:00' },
    { id: 4, name: 'Jane D', phone: '01960ggi685765', email: 'audmin@gmail.com', device: 'Apple/iphone 13pro', repair: 'Screen', date: '02/06/2026', slot: '1', time: '12:00' },
    { id: 5, name: 'Jane D',   phone: '0196b0685765', email: 'admin@gmail.com', device: 'Apple/iphone 13pro', repair: 'Screen', date: '02/06/2026', slot: '1', time: '02:00' },
    
    { id: 6, name: 'Jane D', phone: '01960685765', email: 'admin@gmail.com', device: 'Apple/iphone 13pro', repair: 'Screen', date: '02/06/2026', slot: '1', time: '03:00' },
  ];


  return (
    <div className="p-4">
      <div className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">

        {/* Table */}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>

              <tr className="border-b border-slate-700">
                <th className="text-left p-4 text-slate-400 font-medium text-sm">Client Name</th>
                <th className="text-left p-4 text-slate-400 font-medium text-sm">Client Phone</th>
                <th className="text-left p-4 text-slate-400 font-medium text-sm">Client mail</th>
                <th className="text-left p-4 text-slate-400 font-medium text-sm">Device</th>
                <th className="text-left p-4 text-slate-400 font-medium text-sm">Repair Type</th>
                <th className="text-left p-4 text-slate-400 font-medium text-sm">Date</th>
                <th className="text-left p-4 text-slate-400 font-medium text-sm">Slot no</th>
                <th className="text-left p-4 text-slate-400 font-medium text-sm">Start Time</th>

              </tr>
            </thead>
            <tbody>
              {appointments.map((apt) => (

                <tr key={apt.id} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 text-blue-400 text-sm">{apt.name}</td>
                  <td className="p-4 text-slate-300 text-sm">{apt.phone}</td>
                  <td className="p-4 text-slate-300 text-sm">{apt.email}</td>
                  <td className="p-4 text-slate-300 text-sm">{apt.device}</td>
                  <td className="p-4 text-slate-300 text-sm">{apt.repair}</td>
                  <td className="p-4 text-slate-300 text-sm">{apt.date}</td>
                  <td className="p-4 text-slate-300 text-sm">{apt.slot}</td>
                  <td className="p-4 text-slate-300 text-sm">{apt.time}</td>
                </tr>

              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 p-4 border-t border-slate-700">
          <button className="px-3 py-1 text-slate-400 hover:text-white text-sm flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>
          
          <button className="px-3 py-1 text-slate-400 hover:bg-slate-800 rounded text-sm">1</button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">2</button>
          <button className="px-3 py-1 text-slate-400 hover:bg-slate-800 rounded text-sm">3</button>
          <button className="px-3 py-1 text-slate-400 hover:bg-slate-800 rounded text-sm">4</button>
          <button className="px-3 py-1 text-slate-400 hover:bg-slate-800 rounded text-sm">5</button>
          <span className="px-2 text-slate-400 text-sm">...</span>
          <button className="px-3 py-1 text-slate-400 hover:bg-slate-800 rounded text-sm">11</button>
          
          <button className="px-3 py-1 text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1">
            Next
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentTable;