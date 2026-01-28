
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Dashboard/Navber';


function App() {
  const [currentRoute, setCurrentRoute] = useState('/');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[] flex">
      <Sidebar 
        currentRoute={currentRoute}
        onNavigate={setCurrentRoute}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <div className="flex-1">
        <Navbar
          currentRoute={currentRoute}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      </div>

      {menuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default App;













// import Navber from "./components/Dashboard/Navber";
// import Sidebar from "./components/Sidebar";

// export default function App() {
//   return (
//     <div className="flex">
   
// <Sidebar></Sidebar>
//       <div className="flex-1">
//        <Navber></Navber>

//         <div className="p-6">
//           {/* Main Content */}
//         </div>
//       </div>
//     </div>
//   );
// }


















// import React, { useState } from 'react';
// import { Home, Phone, Calendar, Settings, Bell, Menu, X } from 'lucide-react';

// export default function App() {
//   const [currentPath, setCurrentPath] = useState('/');
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleNavigation = (path) => {
//     setCurrentPath(path);
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <div className="min-h-screen bg-[#0a1628] flex">
//       {/* Mobile Menu Button */}
//       <button
//         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         className="lg:hidden fixed top-4 left-4 z-50 bg-[#1a2942] text-white p-3 rounded-lg shadow-lg border border-cyan-500/30"
//       >
//         {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>

//       {/* Sidebar */}
//       <Sidebar 
//         currentPath={currentPath} 
//         onNavigate={handleNavigation}
//         isMobileMenuOpen={isMobileMenuOpen}
//         setIsMobileMenuOpen={setIsMobileMenuOpen}
//       />

//       {/* Main Content */}
//       <div className="flex-1 lg:ml-0">
//         <Header />
//         <Dashboard />
//       </div>

//       {/* Mobile Overlay */}
//       {isMobileMenuOpen && (
//         <div
//           className="lg:hidden fixed inset-0 bg-black/50 z-30"
//           onClick={() => setIsMobileMenuOpen(false)}
//         />
//       )}
//     </div>
//   );
// }

// function Sidebar({ currentPath, onNavigate, isMobileMenuOpen }) {
//   const menuItems = [
//     { path: '/', icon: <Home size={20} />, text: 'Dashboard Overview' },
//     { path: '/calls', icon: <Phone size={20} />, text: 'Call Logs' },
//     { path: '/appointments', icon: <Calendar size={20} />, text: 'Appointments' },
//     { path: '/settings', icon: <Settings size={20} />, text: 'Settings' },
//   ];

//   return (
//     <div
//       className={`
//         fixed lg:static inset-y-0 left-0 z-40
//         w-64 lg:w-52
//         h-screen
//         bg-[#0d1f37]
//         border-r border-cyan-500/30
//         flex flex-col
//         transform transition-transform duration-300 ease-in-out
//         ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
//       `}
//     >
//       {/* Logo */}
//       <div className="flex items-center justify-center h-20 border-b border-cyan-500/20">
//         <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 p-3 rounded-xl shadow-lg">
//           <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
//             <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
//           </svg>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 px-3 py-6 space-y-1">
//         {menuItems.map((item) => (
//           <MenuItem
//             key={item.path}
//             icon={item.icon}
//             text={item.text}
//             active={currentPath === item.path}
//             onClick={() => onNavigate(item.path)}
//           />
//         ))}
//       </nav>
//     </div>
//   );
// }

// function MenuItem({ icon, text, active, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`
//         relative flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer text-sm w-full text-left
//         transition-all duration-200
//         ${
//           active
//             ? 'bg-[#1a2942] border border-cyan-500/40 text-white shadow-lg'
//             : 'text-gray-400 hover:bg-[#1a2942]/50 hover:text-white border border-transparent'
//         }
//       `}
//     >
//       {/* Glowing left indicator */}
//       {active && (
//         <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-cyan-400 rounded-r shadow-[0_0_10px_rgba(34,211,238,0.6)]"></span>
//       )}
      
//       <span className="relative z-10">{icon}</span>
//       <span className="relative z-10 font-medium">{text}</span>
//     </button>
//   );
// }

// function Header() {
//   return (
//     <div className="h-20 bg-[#0d1f37] border-b border-cyan-500/20 px-6 lg:px-8 flex items-center justify-between">
//       <h1 className="text-white text-xl lg:text-2xl font-semibold ml-12 lg:ml-0">Dashboard Overview</h1>
//       <div className="flex items-center gap-4">
//         <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
//           <Bell size={22} />
//           <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
//         </button>
//         <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold shadow-lg">
//           <img 
//             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
//             alt="Profile" 
//             className="w-full h-full rounded-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// function Dashboard() {
//   const stats = [
//     {
//       title: 'Total Calls Today',
//       value: '127',
//       change: '+12%',
//       positive: true,
//       icon: '📞',
//       iconBg: 'from-blue-400 to-blue-600',
//       highlight: '1199 x 96'
//     },
//     {
//       title: 'AI-Handled Calls',
//       value: '98',
//       change: '+77%',
//       positive: true,
//       icon: '🤖',
//       iconBg: 'from-blue-500 to-blue-700'
//     },
//     {
//       title: 'Warm Transfer',
//       value: '23',
//       change: '+18%',
//       positive: true,
//       icon: '📤',
//       iconBg: 'from-orange-400 to-orange-600'
//     },
//     {
//       title: 'Appointments Booked',
//       value: '34',
//       change: '+9%',
//       positive: true,
//       icon: '📅',
//       iconBg: 'from-green-400 to-green-600'
//     },
//     {
//       title: 'Missed/Failed Calls',
//       value: '6',
//       change: '-5%',
//       positive: false,
//       icon: '❌',
//       iconBg: 'from-red-400 to-red-600'
//     },
//     {
//       title: 'Avg Call Duration',
//       value: '3:42',
//       change: '+15%',
//       positive: true,
//       icon: '⏱️',
//       iconBg: 'from-indigo-400 to-indigo-600'
//     }
//   ];

//   return (
//     <div className="p-6 lg:p-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
//         {stats.map((stat, index) => (
//           <StatCard key={index} {...stat} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function StatCard({ title, value, change, positive, icon, iconBg, highlight }) {
//   return (
//     <div className="relative bg-[#0d1f37] border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 group overflow-hidden">
//       {/* Background glow effect */}
//       <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
//       <div className="relative z-10">
//         {/* Header */}
//         <div className="flex items-start justify-between mb-4">
//           <div>
//             <p className="text-gray-400 text-sm mb-2">{title}</p>
//             {highlight && (
//               <div className="inline-block px-3 py-1 mb-2 bg-cyan-500/20 text-cyan-300 text-xs font-semibold rounded-full border border-cyan-500/30">
//                 {highlight}
//               </div>
//             )}
//             <h3 className="text-white text-3xl lg:text-4xl font-bold">{value}</h3>
//           </div>
//           <div className={`p-3 rounded-xl bg-gradient-to-br ${iconBg} shadow-lg`}>
//             <span className="text-xl">{icon}</span>
//           </div>
//         </div>

//         {/* Change indicator */}
//         <div className="flex items-center gap-1">
//           <span className={`text-sm font-semibold ${positive ? 'text-green-400' : 'text-red-400'}`}>
//             {change}
//           </span>
//           <svg 
//             className={`w-4 h-4 ${positive ? 'text-green-400 rotate-0' : 'text-red-400 rotate-180'}`}
//             fill="currentColor" 
//             viewBox="0 0 20 20"
//           >
//             <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }