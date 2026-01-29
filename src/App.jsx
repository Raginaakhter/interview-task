import { Outlet } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Navbar from './components/Dashboard/Navber';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
   
    <div className="min-h-screen flex bg-[#172556] overflow-hidden">
      
      {/* Sidebar */}
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Main  */}
     
      <div className="flex-1 min-w-0 flex flex-col h-screen">
        
        {/* Navbar */}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* namic  */}
       
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6">
          <div className="max-w-full mx-auto">
             <Outlet />
          </div>
        </main>

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





// import { Outlet } from "react-router-dom";
// import Sidebar from './components/Sidebar';
// import Navbar from './components/Dashboard/Navber';
// import { useState } from 'react';

// function App() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen flex bg-[#172556] ">
      
//       {/* Sidebar */}
//       <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

//       {/* Main Content */}
//       <div className="flex-1 ">
//         <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

//         {/*  Child routes render here */}
//         <div className="">
//           <Outlet />
//         </div>
//       </div>

//       {/* Mobile overlay */}
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






