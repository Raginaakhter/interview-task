import { Outlet } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Navbar from './components/Dashboard/Navber';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#172556] ">
      
      {/* Sidebar */}
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Main Content */}
      <div className="flex-1 ">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/*  Child routes render here */}
        <div className="">
          <Outlet />
        </div>
      </div>

      {/* Mobile overlay */}
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








// import React, { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import Navbar from './components/Dashboard/Navber';


// function App() {
//   const [currentRoute, setCurrentRoute] = useState('/');
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-[] flex">
//       <Sidebar 
//         currentRoute={currentRoute}
//         onNavigate={setCurrentRoute}
//         menuOpen={menuOpen}
//         setMenuOpen={setMenuOpen}
//       />

//       <div className="flex-1">
//         <Navbar
//           currentRoute={currentRoute}
//           menuOpen={menuOpen}
//           setMenuOpen={setMenuOpen}
//         />
//       </div>

//       {menuOpen && (
//         <div 
//           className="lg:hidden fixed inset-0 bg-black/60 z-30"
//           onClick={() => setMenuOpen(false)}
//         />
//       )}
//     </div>
//   );
// }

// export default App;


