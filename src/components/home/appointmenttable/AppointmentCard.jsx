const AppointmentCard = () => {
  return (
    <div className="w-full p-4 sm:p-6">
      <div className="
        grid 
        grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-3 
        gap-4
        place-items-center
      ">

        {/* Total Booked */}
        <div className="
          w-[90%] 
          sm:w-full
          bg-gradient-to-br from-slate-800 to-slate-900 
          rounded-xl 
          p-4 sm:p-6 
          border border-slate-700 
          flex flex-col justify-between
        ">
          <div className="flex items-center gap-2 flex-wrap">
            <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="text-slate-400 text-sm">
              Total Booked
            </span>
          </div>

          <div className="text-3xl sm:text-4xl font-bold text-white mt-3">
            34
          </div>

          <div className="text-emerald-400 text-sm mt-2">
            +8 this week
          </div>
        </div>

        {/* AI Booked */}
        <div className="
          w-[90%] 
          sm:w-full
          bg-gradient-to-br from-slate-800 to-slate-900 
          rounded-xl 
          p-4 sm:p-6 
          border border-slate-700 
          flex flex-col justify-between
        ">
          <div className="flex items-center gap-2 flex-wrap">
            <svg className="w-5 h-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-slate-400 text-sm">
              AI Booked
            </span>
          </div>

          <div className="text-3xl sm:text-4xl font-bold text-white mt-3">
            28
          </div>

          <div className="text-slate-400 text-sm mt-2">
            82% of total
          </div>
        </div>

        {/* Pending */}
        <div className="
          w-[90%] 
          sm:w-full
          bg-gradient-to-br from-slate-800 to-slate-900 
          rounded-xl 
          p-4 sm:p-6 
          border border-slate-700 
          flex flex-col justify-between
        ">
          <div className="flex items-center gap-2 flex-wrap">
            <svg className="w-5 h-5 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <span className="text-slate-400 text-sm">
              Pending
            </span>
          </div>

          <div className="text-3xl sm:text-4xl font-bold text-white mt-3">
            3
          </div>

          <div className="text-slate-400 text-sm mt-2">
            Awaiting confirmation
          </div>
        </div>

      </div>
    </div>
  );
};

export default AppointmentCard;
