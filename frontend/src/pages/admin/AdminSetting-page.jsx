import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, LogOut, Home, ShoppingBag, Users, BarChart3, 
  Settings, Package, Save, Camera, Eye, EyeOff
} from 'lucide-react';

function AdminSetting() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('settings');
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const [profileData, setProfileData] = useState({
    name: 'Admin User',
    email: 'admin@solusikopi.com',
    phone: '+62 812 3456 7890',
    role: 'Administrator'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [storeData, setStoreData] = useState({
    storeName: 'Solusi Kopi',
    storeEmail: 'info@solusikopi.com',
    storePhone: '+62 812 3456 7890',
    address: 'Jl. Raya Kopi No. 123, Surabaya, East Java',
    defaultShippingCost: '15000',
    freeShippingThreshold: '200000'
  });

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, path:'/admin-dashboard' },
    { id: 'products', label: 'Products', icon: Package, path:'/admin-product' },
    { id: 'orders', label: 'Orders', icon: ShoppingBag, path:'/admin-order' },
    { id: 'customers', label: 'Customers', icon: Users, path:'/admin-customer' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, path:'/admin-analytic' },
    { id: 'settings', label: 'Settings', icon: Settings, path:'/admin-setting' }
  ];

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handlePasswordChange = () => {
    if (passwordData.newPassword === passwordData.confirmPassword) {
      setSaveSuccess(true);
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      setTimeout(() => setSaveSuccess(false), 3000);
    } else {
      alert('New passwords do not match!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`bg-white border-r border-gray-200 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'} flex flex-col`}>
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          {sidebarOpen ? (
            <>
              <div>
                <h1 className="text-xl font-bold text-[#79C000]">SOLŪSI KOPI</h1>
                <p className="text-xs text-gray-500">Admin Panel</p>
              </div>
              <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
                <X className="w-5 h-5" />
              </button>
            </>
          ) : (
            <button onClick={() => setSidebarOpen(true)} className="mx-auto">
              <Menu className="w-5 h-5" />
            </button>
          )}
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map(item => {
            const Icon = item.icon;
            return (
              <Link
                to={item.path}
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  activeMenu === item.id 
                    ? 'bg-[#79C000] text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && <span className="font-medium">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer">
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {sidebarOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden">
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-bold text-gray-900">Settings</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">Admin User</p>
              <p className="text-xs text-gray-500">admin@solusikopi.com</p>
            </div>
            <div className="w-10 h-10 bg-[#79C000] rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Success Message */}
          {saveSuccess && (
            <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center gap-2">
              <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-medium">Settings saved successfully!</span>
            </div>
          )}

          <div className="space-y-6">
            {/* Profile Settings */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-bold mb-6">Profile Settings</h3>
              
              {/* Profile Picture */}
              <div className="flex items-center gap-6 mb-8 pb-6 border-b border-gray-200">
                <div className="w-24 h-24 bg-[#79C000] rounded-full flex items-center justify-center text-white font-bold text-4xl">
                  A
                </div>
                <div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#79C000] text-white rounded-lg hover:bg-[#6AB000] transition">
                    <Camera className="w-4 h-4" />
                    Change Photo
                  </button>
                  <p className="text-xs text-gray-500 mt-2">JPG, PNG or GIF (max. 2MB)</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                  <input
                    type="text"
                    value={profileData.role}
                    disabled
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                  />
                </div>
              </div>

              <div className="pt-6">
                <button 
                  onClick={handleSave}
                  className="flex items-center gap-2 px-6 py-3 bg-[#79C000] text-white rounded-lg hover:bg-[#6AB000] transition font-medium"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>

            {/* Security Settings */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-bold mb-6">Change Password</h3>
              
              <div className="grid md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={passwordData.currentPassword}
                      onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000]"
                      placeholder="Enter current password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? 'text' : 'password'}
                      value={passwordData.newPassword}
                      onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000]"
                      placeholder="Enter new password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000]"
                    placeholder="Confirm new password"
                  />
                </div>
              </div>

              <div className="pt-6">
                <button 
                  onClick={handlePasswordChange}
                  className="flex items-center gap-2 px-6 py-3 bg-[#79C000] text-white rounded-lg hover:bg-[#6AB000] transition font-medium"
                >
                  <Save className="w-4 h-4" />
                  Update Password
                </button>
              </div>
            </div>

            {/* Store Settings */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-bold mb-6">Store Information</h3>
              
              <div className="grid md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Store Name</label>
                  <input
                    type="text"
                    value={storeData.storeName}
                    onChange={(e) => setStoreData({...storeData, storeName: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Store Email</label>
                  <input
                    type="email"
                    value={storeData.storeEmail}
                    onChange={(e) => setStoreData({...storeData, storeEmail: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Store Phone</label>
                  <input
                    type="tel"
                    value={storeData.storePhone}
                    onChange={(e) => setStoreData({...storeData, storePhone: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Store Address</label>
                  <textarea
                    value={storeData.address}
                    onChange={(e) => setStoreData({...storeData, address: e.target.value})}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Default Shipping Cost (IDR)</label>
                  <input
                    type="number"
                    value={storeData.defaultShippingCost}
                    onChange={(e) => setStoreData({...storeData, defaultShippingCost: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Free Shipping Threshold (IDR)</label>
                  <input
                    type="number"
                    value={storeData.freeShippingThreshold}
                    onChange={(e) => setStoreData({...storeData, freeShippingThreshold: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000]"
                  />
                </div>
              </div>

              <div className="pt-6">
                <button 
                  onClick={handleSave}
                  className="flex items-center gap-2 px-6 py-3 bg-[#79C000] text-white rounded-lg hover:bg-[#6AB000] transition font-medium"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminSetting;