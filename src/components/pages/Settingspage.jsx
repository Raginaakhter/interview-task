import { useState } from 'react';
import user from "../../assets/images/user.png"
import { Link } from 'react-router-dom';
const Settings = () => {
    const [activeTab, setActiveTab] = useState('profile');

    return (


        <div>
            <div className="min-h-screen  p-4 md:p-8">
                <div className="max-w-4xl mx-auto">

                    {/* Tabs */}
                    <div className="flex gap-8 mb-12 border-b border-white/10">
                        <button
                            onClick={() => setActiveTab('profile')}
                            className={`pb-4 text-lg ${activeTab === 'profile' ? 'text-white border-b-2 border-white' : 'text-white/60'}`}
                        >
                            Profile
                        </button>
                        <button
                            onClick={() => setActiveTab('password')}
                            className={`pb-4 text-lg ${activeTab === 'password' ? 'text-white border-b-2 border-white' : 'text-white/60'}`}
                        >
                            Password Settings
                        </button>
                    </div>


                    {/* Profile Content */}
                    {activeTab === 'profile' && (
                        <div>
                            {/* Profile Image */}
                            <div className="mb-10">
                                <h2 className="text-white text-lg mb-6">Profile Image</h2>
                                <div className="flex items-center gap-6">
                                    <img src={user} alt="User Profile" className="w-24 h-24 rounded-full object-cover" />
                                    <Link to="/edit-profile"><button className="px-6 py-2 bg-white/10 text-white rounded-full border border-white/30">
                                        Edit Profile
                                    </button></Link>
                                </div>
                            </div>
                            {/* Profile Info */}
                            <div className="space-y-8">
                                <div className="flex flex-col md:flex-row md:items-center gap-3">
                                    <label className="text-white text-lg w-40">Full Name:</label>
                                    <span className="text-white/90 text-lg">Jane D.</span>
                                </div>

                                <div className="flex flex-col md:flex-row md:items-center gap-3">
                                    <label className="text-white text-lg w-40">Email:</label>
                                    <span className="text-white/90 text-lg">jane@gmail.com</span>
                                </div>

                                <div className="flex flex-col md:flex-row md:items-center gap-3">
                                    <label className="text-white text-lg w-40">Store Name:</label>
                                    <span className="text-white/90 text-lg">Ubreakfix Store</span>
                                </div>

                                <div className="flex flex-col md:flex-row md:items-center gap-3">
                                    <label className="text-white text-lg w-40">Store Address:</label>
                                    <span className="text-white/90 text-lg">123 Main Street, New York, NY 10001</span>
                                </div>
                            </div>
                        </div>
                    )}


                    {/* Password Content */}
                    {activeTab === 'password' && (
                        <div>
                            <p className="text-white text-lg">The Password Settings page is missing from the Figma design..Thank you</p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Settings;