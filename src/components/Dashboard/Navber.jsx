import { Bell, Menu, X } from 'lucide-react';
import user from "../../assets/images/user.png"
import bell from "../../assets/icons/bell.png"
function Navbar({ currentRoute, menuOpen, setMenuOpen }) {

  const getTitle = () => {

    switch(currentRoute) {
      case '/': return 'Dashboard Overview';
      case '/calls': return 'Call Logs';
      case '/appointments': return 'Appointments';
      case '/settings': return 'Settings';
      default: return 'Dashboard Overview';
    }
  };

  return (

    <header className="h-20 bg-[#111B3C]  px-6 flex items-center justify-between">

      <div className="flex items-center gap-4">
        <button  onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg" >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h1 className="text-white text-xl font-semibold">{getTitle()}</h1>
      </div>

      <div className="flex items-center gap-8">
          <img src={bell} alt="" />
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-500/30">
       <img className="w-full h-full object-cover" src={user} alt="" />
        </div>
      </div>
      
    </header>
  );
}

export default Navbar;




// import user from "../../assets/images/user.png"
// import icon from "../../assets/icons/bell.png"
// const Navber = () => {
//     return (

//         <div className="h-16 bg-gradient-to-r from-[#0b1d3a] to-[#08152d] text-white flex items-center justify-between px-6">
//             <h1 className="text-lg font-medium">Dashboard Overview</h1>

//             <div className="flex items-center gap-4">
//                 <img src={icon} alt="" />
//               <img className='w-9 h-9 rounded-full border' src={user} alt="" />
//             </div>
//         </div>

//     );
// };

// export default Navber