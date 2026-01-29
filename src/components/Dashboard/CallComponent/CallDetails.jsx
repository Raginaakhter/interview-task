import iconss from "../../../assets/icons/Icon (1).png"

function CallDetails() {

  return (
    <div className="bg-[#0d1929] rounded-xl h-full">
      <h2 className="text-white text-xl font-semibold mb-6">Call Details</h2>


      {/* phone  */}

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-gray-400 text-sm mb-1">Phone Number</p>
          <p className="text-white font-medium">+1 (555) 123-4567</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm mb-1">Duration</p>
          <p className="text-white font-medium">4:32</p>
        </div>
      </div>


      {/* Date  */}

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-gray-400 text-sm mb-1">Date & Time</p>
          <p className="text-white font-medium">2025-12-16 10:45 AM</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm mb-1">Issue Type</p>
          <p className="text-white font-medium">Screen</p>
        </div>
      </div>

      {/* Call Type */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-gray-400 text-sm mb-1">Call Type</p>
          <span className="bg-emerald-500 text-white text-xs px-3 py-1 rounded-full inline-block">
            AI Resolved
          </span>
        </div>
        <div>
          <p className="text-gray-400 text-sm mb-1">Outcome</p>
          <p className="text-white font-medium">Quote provided</p>
        </div>
      </div>

      {/* Play  button */}
      <button className="w-full bg-[#AD46FF4D] hover:to-purple-800 text-[#C27AFF] py-3 rounded-lg flex items-center justify-center gap-2 mb-6 transition-all">
        <img src={iconss} alt="" className="w-5 h-5" />
        <span>Play Audio Recording</span>
      </button>



      {/*  Transcript */}
      <div className="bg-[#1a2942] rounded-lg p-4">
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <h3 className="text-white font-medium">Conversation Transcript</h3>
        </div>

        <div className="space-y-4 max-h-96 overflow-y-auto">

          {/* AI Message */}
          <div>
            <p className="text-emerald-400 text-sm font-medium mb-1">AI Assistant:</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Thank you for calling @BestFix! How can I help you today?
            </p>
          </div>


          {/* Customer  */}
          <div>
            <p className="text-blue-400 text-sm font-medium mb-1">Customer:</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Hi, my iPhone 13 screen is cracked. How much would it cost to repair?
            </p>
          </div>


          {/* AI Response */}
          <div>
            <p className="text-emerald-400 text-sm font-medium mb-1">AI Assistant:</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              I can help you with that! For an iPhone 13 screen repair, our price is $195. This includes parts, labor, and even comes with a 90-day warranty. Would you like to book an appointment?
            </p>
          </div>


          {/* Customer response */}
          <div>
            <p className="text-blue-400 text-sm font-medium mb-1">Customer:</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Yes, please! When are you available?
            </p>
          </div>


          {/* rinal response */}
          <div>
            <p className="text-emerald-400 text-sm font-medium mb-1">AI Assistant:</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallDetails;