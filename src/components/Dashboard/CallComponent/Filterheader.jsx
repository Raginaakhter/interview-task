import  { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

function FilterHeader() {


  const [selectedType, setSelectedType] = useState("All Type");
  const [selectedIssue, setSelectedIssue] = useState("All Issues");

  const [selectedDate, setSelectedDate] = useState("Today");

  const [openType, setOpenType] = useState(false);
  const [openIssue, setOpenIssue] = useState(false);
  const [openDate, setOpenDate] = useState(false);

  const typeOptions = ["All Type", "Incoming", "Outgoing", "Missed"];
  const issueOptions = ["All Issues", "Network", "Billing", "Service"];
  const dateOptions = ["Today", "Yesterday", "Last 7 Days"];




  return (




    <div className=" rounded-xl p-4 mb-6">
      <div className="flex flex-col md:flex-row gap-4 items-center">


        {/* Search */}
        <div className="relative flex-1 w-full md:w-auto">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by phone number, issue type..."
            className="w-full bg-[#1a2942] text-white pl-10 pr-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* type  */}
        <div className="relative w-full md:w-auto">
          <button
            onClick={() => setOpenType(!openType)}
            className="w-full bg-[#1a2942] text-white px-4 py-2.5 rounded-lg flex items-center justify-between gap-8"
          >
            <span>{selectedType}</span>
            <ChevronDown size={18} />
          </button>

          {openType && (
            <ul className="absolute z-10 mt-2 w-full bg-[#1a2942] rounded-lg overflow-hidden">
              {typeOptions.map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    setSelectedType(item);
                    setOpenType(false);
                  }}
                  className="px-4 py-2 text-white hover:bg-[#1f3250] cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>





        {/* issue  */}
        <div className="relative w-full md:w-auto">
          <button
            onClick={() => setOpenIssue(!openIssue)}
            className="w-full bg-[#1a2942] text-white px-4 py-2.5 rounded-lg flex items-center justify-between gap-8"
          >
            <span>{selectedIssue}</span>
            <ChevronDown size={18} />
          </button>

          {openIssue && (
            <ul className="absolute z-10 mt-2 w-full bg-[#1a2942] rounded-lg overflow-hidden">
              {issueOptions.map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    setSelectedIssue(item);
                    setOpenIssue(false);
                  }}
                  className="px-4 py-2 text-white hover:bg-[#1f3250] cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>



        {/* Date */}
        <div className="relative w-full md:w-auto">
          <button
            onClick={() => setOpenDate(!openDate)}
            className="w-full bg-[#1a2942] text-white px-4 py-2.5 rounded-lg flex items-center justify-between gap-8"
          >
            <span>{selectedDate}</span>
            <ChevronDown size={18} />
          </button>

          {openDate && (
            <ul className="absolute z-10 mt-2 w-full bg-[#1a2942] rounded-lg overflow-hidden">
              {dateOptions.map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    setSelectedDate(item);
                    setOpenDate(false);
                  }}
                  className="px-4 py-2 text-white hover:bg-[#1f3250] cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilterHeader;
