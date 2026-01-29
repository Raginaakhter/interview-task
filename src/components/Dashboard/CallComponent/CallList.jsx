import { Phone, Clock, CheckCircle } from 'lucide-react';

function CallList() {

  const calls = [
    {
      id: 1,
      phone: '+1 (555) 345-6789',
      date: '2025-12-16 • 09:42 AM',
      duration: '6:23',
      status: 'Quote Provided',
      tag: 'Screen',
      tagColor: 'bg-[#0E3D41]',
      statusBadge: 'AI Resolved',
      badgeColor: 'bg-[#0E3D41]'
    },
    {
      id: 2,
      phone: '+1 (555) 345-6789',
      date: '2025-12-16 • 09:42 AM',
      duration: '5:23',
      status: 'Escalated to technician',
      tag: 'Software',
      tagColor: 'bg-[#0E3D41]',
      statusBadge: 'Warm Transfer',
      badgeColor: 'bg-[#05DF72]'
    },
    {
      id: 3,
      phone: '+1 (555) 345-6789',
      date: '2025-12-16 • 09:42 AM',
      duration: '5:23',
      status: 'Appointment Booked',
      tag: 'Battery',
      tagColor: 'bg-[#0E3D41]',
      statusBadge: 'Appointment',
      badgeColor: 'bg-purple-500'
    },
    {
      id: 4,
      phone: '+1 (555) 345-6789',
      date: '2025-12-16 • 09:42 AM',
      duration: '0:20',
      status: 'Call Dropped',
      tag: 'Unknown',
      tagColor: 'bg-[#0E3D41]',
      statusBadge: 'Dropped',
      badgeColor: 'bg-red-500'
    },
    {
      id: 5,
      phone: '+1 (555) 345-6789',
      date: '2025-12-16 • 09:42 AM',
      duration: '5:23',
      status: 'Quote Provided',
      tag: 'Screen',
      tagColor: 'bg-[#0E3D41]',
      statusBadge: 'AI Resolved',
      badgeColor: 'bg-emerald-500'
    }
  ];

  return (

    <div className="p-6 bg-[#111C3E] rounded-xl  ">
      <h2 className="text-white text-xl font-semibold mb-4">Call List</h2>
      <div className="space-y-3">
        {calls.map((call) => (
          <div 
            key={call.id} 
            className="bg-[#1a2942] rounded-lg p-4 hover:bg-[#1f3250] transition-colors cursor-pointer border-l-4 border-transparent hover:border-blue-500"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">{call.phone}</p>
                  <p className="text-gray-400 text-xs mt-1">{call.date}</p>
                </div>
              </div>
              
              <span className={`${call.badgeColor} text-white text-xs px-3 py-1 rounded-full`}>
                {call.statusBadge}
              </span>
            </div>

            <div className="flex items-center gap-4 text-sm mt-3">
              <div className="flex items-center gap-1 text-gray-400">
                <Clock size={14} />
                <span>{call.duration}</span>
              </div>
              
              <div className="flex items-center gap-1 text-gray-400">
                <CheckCircle size={14} />
                <span>{call.status}</span>
              </div>
              
              <span className={`${call.tagColor} text-[#51A2FF] text-xs px-2 py-1 bg-[#2B7FFF33] rounded`}>
                {call.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CallList;