import { Bell, Menu, X } from 'lucide-react';
import user from "../../assets/images/user.png"
import bell from "../../assets/icons/bell.png"
import { useLocation } from "react-router-dom";

function Navbar({ menuOpen, setMenuOpen }) {
  const location = useLocation();

  const title = {
    "/": "Dashboard Overview",
    "/calls": "Call Logs",
    "/appointments": "Appointments",
    "/settings": "Settings",
  }[location.pathname] || "Dashboard Overview";


  return (

    <header className="h-20 bg-[#111B3C]  px-6 flex items-center justify-between">

      <div className="flex items-center gap-4">
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg" >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h1 className="text-white text-xl font-semibold">{title}</h1>

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
