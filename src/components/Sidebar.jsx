import { NavLink } from "react-router-dom";
import HomeIcon from "../assets/icons/homeIcon.png";
import { LogOut } from "lucide-react";
import logo from "../assets/icons/logo.png";
import PhoneIcon from "../assets/icons/PhoneIcon.png";
import CalendarIcon from "../assets/icons/CalendarIcon.png";
import SettingsIcon from "../assets/icons/SettingsIcon.png";

function Sidebar({ currentRoute, onNavigate, menuOpen }) {

  const links = [
    { path: "/", icon: HomeIcon, label: "Dashboard Overview" },
    { path: "/calls", icon: PhoneIcon, label: "Call Logs" },
    { path: "/appointments", icon: CalendarIcon, label: "Appointments" },
    { path: "/settings", icon: SettingsIcon, label: "Settings" }
  ];

  return (
   <aside
  className={`
    fixed lg:sticky
    top-0 left-0
    w-64 h-screen
    z-40
    transition-transform duration-300
    bg-[#0d1f37]
    ${menuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
  `}
>


      {/* Logo */}
      <div className="h-20 flex items-center justify-center">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-xl">
          <img src={logo} alt="Logo" />
        </div>
      </div>



      {/* Menu */}
      <nav className="flex-1 p-3">
        {links.map((link) => (



          <NavLink
            key={link.path}
            to={link.path}
            end
            onClick={() => onNavigate?.(link.path)}
            className={({ isActive }) =>
              `relative whitespace-nowrap w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300
              ${
                isActive || currentRoute === link.path
                  ? "bg-[#1a2942] text-white border p-4 rounded-2xl border-cyan-500/30 shadow-[0_12px_30px_-6px_rgba(34,211,238,0.45)]"
                  : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {(isActive || currentRoute === link.path) && (
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-700/20 to-transparent rounded-lg pointer-events-none" />
                )}

                <img src={link.icon} alt={link.label} className="relative z-10" />
                <span className="text-sm font-medium relative z-10">
                  {link.label}
                </span>
              </>
            )}
          </NavLink>



        ))}
      </nav>

      {/* Logout */}
      <div className="p-3 pb-10 border-t border-cyan-500/10 bg-transparent">
        <button className="relative w-full flex items-center gap-3 px-4 py-3 rounded-lg">
          <LogOut className="text-[#000000]" size={34} />
          <span className="text-lg font-medium text-red-400 hover:text-red-300">
            Log Out
          </span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;








// import HomeIcon from "../assets/icons/homeIcon.png"
// import { LogOut } from 'lucide-react';
// import logo from "../assets/icons/Container.png";
// import PhoneIcon from "../assets/icons/PhoneIcon.png";
// import CalendarIcon from "../assets/icons/CalendarIcon.png";
// import SettingsIcon from "../assets/icons/SettingsIcon.png";


// function Sidebar({ currentRoute, onNavigate, menuOpen }) {
//     const links = [
//         { path: '/', icon: HomeIcon, label: 'Dashboard Overview' },
//         { path: '/calls', icon: PhoneIcon, label: 'Call Logs' },
//         { path: '/appointments', icon: CalendarIcon, label: 'Appointments' },
//         { path: '/settings', icon: SettingsIcon, label: 'Settings' }
//     ];



//     return (
//         <aside className={`fixed lg:static top-0 left-0 z-40 h-screen w-56 bg-[#0d1f37] border-r border-cyan-500/20 transition-transform duration-300 flex flex-col
//          ${menuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>

//             {/* Logo section */}
//             <div className="h-20 flex items-center justify-center">
//                 <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-xl">
//                     <img src={logo} alt="Logo" />
//                 </div>
//             </div>

//             {/* menu item */}
//             <nav className="flex-1 p-3">
//                 {links.map((link) => {
//                     const Icon = link.icon;
//                     const isActive = currentRoute === link.path;

//                     return (
//                         // <button
//                         //     key={link.path}
//                         //     onClick={() => onNavigate(link.path)}
//                         //     className={`relative whitespace-nowrap w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
//                         //      ${isActive
//                         //         ? 'bg-[#1a2942] text-white border border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.2)]'
//                         //         : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'}`}
//                         // >
//                         <button
//                             key={link.path}
//                             onClick={() => onNavigate(link.path)}
//                             className={`relative whitespace-nowrap w-full flex items-center gap-3 px-4 py-3  rounded-lg transition-all duration-300 ${isActive
//                                     ? 'bg-[#1a2942] text-white border p-4 rounded-2xl border-cyan-500/30 shadow-[0_12px_30px_-6px_rgba(34,211,238,0.45)]'
//                                     : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'}`}
//                         >

//                             {isActive && (
//                                 <>

//                                     {/* <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8  rounded-r shadow-[0_0_12px_rgba(34,211,238,1)]" /> */}
//                                     <span className="absolute inset-0 bg-gradient-to-r from-cyan-700/20 to-transparent rounded-lg pointer-events-none" />
//                                 </>
//                             )}
//                             <img src={link.icon} alt={link.label} size={18} className="relative z-10" />
//                             <span className="text-sm font-medium relative z-10">{link.label}</span>
//                         </button>
//                     );
//                 })}
//             </nav>

//             {/* Logout button */}
//             <div className="p-3 pb-6 border-t border-cyan-500/10">
//                 <button
//                     onClick={() => console.log('Logout clicked')}
//                     className="relative w-full flex items-center gap-3 px-4 py-3 rounded-lg"
//                 >
//                     <LogOut className="text-[#000000]" size={34} />
//                     <span className="text-lg font-medium  text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-200">Log Out</span>
//                 </button>
//             </div>
//         </aside>
//     );
// }

// export default Sidebar;
