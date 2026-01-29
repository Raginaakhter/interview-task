import  { useState } from 'react';
import user from "../../../assets/images/user.png"
import icon from "../../../assets/icons/Frame 2147228245 (1).png"
function EditProfile() {

  const [formData, setFormData] = useState({
    fullName: 'Jane D.',
    email: 'jane@gmail.com',
    storeName: 'Ubreakfix Store',
    storeAddress: '123 Main Street, New York'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    console.log('Form data:', formData);
  };

  return (


    <div className="min-h-screen  p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        

        <div className="mb-8 md:mb-12">
          <h2 className="text-white text-base md:text-lg mb-4 md:mb-6">Profile Image</h2>
          <div className="relative inline-block">
            <img src={user} alt="" className="w-24 h-24 rounded-full object-cover" />
            {/* Edit Icon */}
            <div className="absolute bottom-0 right-0 w-8 h-8 md:w-9 md:h-9 bg-blue-500 rounded-full flex items-center justify-center border-2 border-[#1a237e] cursor-pointer hover:bg-blue-600 transition-colors">
              <img src={icon} alt="Edit Icon" className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Form  */}
        <div className="space-y-6 md:space-y-8">
          
          {/*  Name  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-white text-sm md:text-base mb-2 md:mb-3">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 md:px-5 py-3 md:py-3.5 bg-black/20 text-white rounded-lg border border-white/10 focus:outline-none focus:border-blue-400 transition-colors placeholder-white/30"
                placeholder="Enter full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-white text-sm md:text-base mb-2 md:mb-3">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 md:px-5 py-3 md:py-3.5 bg-black/20 text-white rounded-lg border border-white/10 focus:outline-none focus:border-blue-400 transition-colors placeholder-white/30"
                placeholder="Enter email"
              />
            </div>
          </div>

          {/* Store Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Store Name */}
            <div>
              <label className="block text-white text-sm md:text-base mb-2 md:mb-3">
                Store Name
              </label>
              <input
                type="text"
                name="storeName"
                value={formData.storeName}
                onChange={handleChange}
                className="w-full px-4 md:px-5 py-3 md:py-3.5 bg-black/20 text-white rounded-lg border border-white/10 focus:outline-none focus:border-blue-400 transition-colors placeholder-white/30"
                placeholder="Enter store name"
              />
            </div>

            {/* store address */}
            <div>
              <label className="block text-white text-sm md:text-base mb-2 md:mb-3">
                Store Address
              </label>
              <input
                type="text"
                name="storeAddress"
                value={formData.storeAddress}
                onChange={handleChange}
                className="w-full px-4 md:px-5 py-3 md:py-3.5 bg-black/20 text-white rounded-lg border border-white/10 focus:outline-none focus:border-blue-400 transition-colors placeholder-white/30"
                placeholder="Enter store address"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-center pt-4 md:pt-8">
            <button
              onClick={handleSave}
              className="w-full md:w-auto min-w-[280px] px-16 py-2 bg-[#00C950] hover:to-green-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Save
            </button>
          </div>

        </div>
        
      </div>
    </div>
  );
}

export default EditProfile;