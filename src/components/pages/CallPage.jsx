
import CallList from '../Dashboard/CallComponent/CallList';
import FilterHeader from '../Dashboard/CallComponent/Filterheader';
import CallDetails from '../Dashboard/CallComponent/CallDetails';



function CallLogsPage() {
  return (
    <div className="min-h-screen bg-[#0a1526] p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        
      
        <FilterHeader></FilterHeader>

        {/* main */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
   
          <div className="w-full">
            <CallList />
          </div>

          {/* right side */}
          <div className="w-full">
            <CallDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallLogsPage;








// import React from 'react';
// import CallList from '../Dashboard/CallComponent/CallList';
// import CallDetails from '../Dashboard/CallComponent/CallDetails';

// const CallPage = () => {
//     return (
//         <div>
//            <CallList></CallList>
//            <CallDetails></CallDetails>
//         </div>
//     );
// };

// export default CallPage;