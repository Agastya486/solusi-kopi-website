import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, LogOut, Home, ShoppingBag, Users, BarChart3, 
  Settings, Package, Search, Filter, Eye, Download,
  Mail, Phone, MapPin, Calendar, ShoppingCart, DollarSign,
  TrendingUp, Star, MoreVertical, Edit, Trash2
} from 'lucide-react';

function AdminCustomer() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('customers');
  const [searchQuery, setSearchQuery] = useState('');
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'Budi Santoso',
      email: 'budi@email.com',
      phone: '+62 812 3456 7890',
      address: 'Jl. Raya No. 123, Surabaya',
      joinDate: '2025-11-15',
      totalOrders: 12,
      totalSpent: 1450000,
      status: 'active',
      lastOrder: '2026-01-06',
      avgOrderValue: 120833,
      favoriteProduct: 'Arabica Premium'
    },
    {
      id: 2,
      name: 'Siti Aminah',
      email: 'siti@email.com',
      phone: '+62 821 9876 5432',
      address: 'Jl. Merdeka No. 45, Surabaya',
      joinDate: '2025-12-01',
      totalOrders: 8,
      totalSpent: 980000,
      status: 'active',
      lastOrder: '2026-01-06',
      avgOrderValue: 122500,
      favoriteProduct: 'Special Blend'
    },
    {
      id: 3,
      name: 'Ahmad Rizki',
      email: 'ahmad@email.com',
      phone: '+62 813 2468 1357',
      address: 'Jl. Pahlawan No. 78, Malang',
      joinDate: '2025-10-20',
      totalOrders: 15,
      totalSpent: 1875000,
      status: 'vip',
      lastOrder: '2026-01-05',
      avgOrderValue: 125000,
      favoriteProduct: 'Robusta Bold'
    },
    {
      id: 4,
      name: 'Dewi Lestari',
      email: 'dewi@email.com',
      phone: '+62 856 7890 1234',
      address: 'Jl. Sudirman No. 90, Surabaya',
      joinDate: '2025-11-28',
      totalOrders: 6,
      totalSpent: 720000,
      status: 'active',
      lastOrder: '2026-01-05',
      avgOrderValue: 120000,
      favoriteProduct: 'House Blend'
    },
    {
      id: 5,
      name: 'Eko Prasetyo',
      email: 'eko@email.com',
      phone: '+62 877 5544 3322',
      address: 'Jl. Ahmad Yani No. 12, Sidoarjo',
      joinDate: '2025-09-10',
      totalOrders: 18,
      totalSpent: 2340000,
      status: 'vip',
      lastOrder: '2026-01-04',
      avgOrderValue: 130000,
      favoriteProduct: 'Arabica Gold'
    },
    {
      id: 6,
      name: 'Rina Kusuma',
      email: 'rina@email.com',
      phone: '+62 822 1122 3344',
      address: 'Jl. Gatot Subroto No. 56, Surabaya',
      joinDate: '2026-01-02',
      totalOrders: 2,
      totalSpent: 270000,
      status: 'new',
      lastOrder: '2026-01-05',
      avgOrderValue: 135000,
      favoriteProduct: 'Arabica Premium'
    },
    {
      id: 7,
      name: 'Joko Widodo',
      email: 'joko@email.com',
      phone: '+62 838 9988 7766',
      address: 'Jl. Diponegoro No. 34, Gresik',
      joinDate: '2025-08-15',
      totalOrders: 5,
      totalSpent: 625000,
      status: 'inactive',
      lastOrder: '2025-12-10',
      avgOrderValue: 125000,
      favoriteProduct: 'Special Blend'
    },
    {
      id: 8,
      name: 'Maya Sari',
      email: 'maya@email.com',
      phone: '+62 819 6655 4433',
      address: 'Jl. Veteran No. 67, Surabaya',
      joinDate: '2025-12-20',
      totalOrders: 4,
      totalSpent: 480000,
      status: 'active',
      lastOrder: '2026-01-06',
      avgOrderValue: 120000,
      favoriteProduct: 'House Blend'
    }
  ]);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/admin-dashboard' },
    { id: 'products', label: 'Products', icon: Package, path: '/admin-product' },
    { id: 'orders', label: 'Orders', icon: ShoppingBag, path: '/admin-order' },
    { id: 'customers', label: 'Customers', icon: Users, path: '/admin-customer' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, path: '/admin-analytic' },
    { id: 'settings', label: 'Settings', icon: Settings, path: '/admin-setting' }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'vip': return 'bg-purple-100 text-purple-700';
      case 'active': return 'bg-green-100 text-green-700';
      case 'new': return 'bg-blue-100 text-blue-700';
      case 'inactive': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.phone.includes(searchQuery)
  );

  const openCustomerDetail = (customer) => {
    setSelectedCustomer(customer);
    setShowDetailModal(true);
  };

  const totalCustomers = customers.length;
  const activeCustomers = customers.filter(c => c.status === 'active' || c.status === 'vip').length;
  const vipCustomers = customers.filter(c => c.status === 'vip').length;
  const newCustomers = customers.filter(c => c.status === 'new').length;

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
            <h2 className="text-xl font-bold text-gray-900">Customers Management</h2>
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
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-gray-600 text-sm mb-1">Total Customers</h3>
              <p className="text-3xl font-bold text-gray-900">{totalCustomers}</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-green-600 text-sm font-semibold">Active</span>
              </div>
              <h3 className="text-gray-600 text-sm mb-1">Active Customers</h3>
              <p className="text-3xl font-bold text-gray-900">{activeCustomers}</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-purple-600 text-sm font-semibold">VIP</span>
              </div>
              <h3 className="text-gray-600 text-sm mb-1">VIP Customers</h3>
              <p className="text-3xl font-bold text-gray-900">{vipCustomers}</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#79C000]/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#79C000]" />
                </div>
                <span className="text-blue-600 text-sm font-semibold">New</span>
              </div>
              <h3 className="text-gray-600 text-sm mb-1">New Customers</h3>
              <p className="text-3xl font-bold text-gray-900">{newCustomers}</p>
            </div>
          </div>

          {/* Actions Bar */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1 max-w-md relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search customers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000] focus:border-transparent"
                />
              </div>

              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                  <Filter className="w-4 h-4" />
                  <span className="text-sm font-medium">Filter</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                  <Download className="w-4 h-4" />
                  <span className="text-sm font-medium">Export</span>
                </button>
              </div>
            </div>
          </div>

          {/* Customers Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Customer</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Contact</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Join Date</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Orders</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Total Spent</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredCustomers.map(customer => (
                    <tr key={customer.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#79C000] rounded-full flex items-center justify-center text-white font-bold">
                            {customer.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">{customer.name}</p>
                            <p className="text-xs text-gray-500">ID: #{customer.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-xs text-gray-600">
                            <Mail className="w-3 h-3" />
                            {customer.email}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-600">
                            <Phone className="w-3 h-3" />
                            {customer.phone}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-700">{customer.joinDate}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-semibold text-gray-900">{customer.totalOrders}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-semibold text-[#79C000]">{formatPrice(customer.totalSpent)}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusColor(customer.status)}`}>
                          {customer.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button 
                            onClick={() => openCustomerDetail(customer)}
                            className="p-2 text-[#79C000] hover:bg-green-50 rounded-lg transition cursor-pointer"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition cursor-pointer">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredCustomers.length === 0 && (
              <div className="text-center py-12">
                <Users className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p className="text-gray-600 font-medium">No customers found</p>
                <p className="text-gray-500 text-sm mt-1">Try adjusting your search</p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Customer Detail Modal */}
      {showDetailModal && selectedCustomer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-3xl w-full my-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Customer Details</h3>
                <button 
                  onClick={() => setShowDetailModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              {/* Customer Header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
                <div className="w-20 h-20 bg-[#79C000] rounded-full flex items-center justify-center text-white font-bold text-3xl">
                  {selectedCustomer.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-900 mb-1">{selectedCustomer.name}</h4>
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusColor(selectedCustomer.status)}`}>
                    {selectedCustomer.status}
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <ShoppingCart className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                  <p className="text-2xl font-bold text-gray-900">{selectedCustomer.totalOrders}</p>
                  <p className="text-xs text-gray-600">Total Orders</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <DollarSign className="w-6 h-6 mx-auto mb-2 text-[#79C000]" />
                  <p className="text-2xl font-bold text-[#79C000]">{formatPrice(selectedCustomer.totalSpent)}</p>
                  <p className="text-xs text-gray-600">Total Spent</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <BarChart3 className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <p className="text-2xl font-bold text-blue-600">{formatPrice(selectedCustomer.avgOrderValue)}</p>
                  <p className="text-xs text-gray-600">Avg Order Value</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h5 className="text-sm font-semibold text-gray-600 mb-3">Contact Information</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-gray-400" />
                      <span className="text-sm text-gray-700">{selectedCustomer.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-gray-400" />
                      <span className="text-sm text-gray-700">{selectedCustomer.phone}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{selectedCustomer.address}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-gray-600 mb-3">Additional Information</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Join Date</p>
                        <p className="text-sm font-semibold text-gray-700">{selectedCustomer.joinDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <ShoppingCart className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Last Order</p>
                        <p className="text-sm font-semibold text-gray-700">{selectedCustomer.lastOrder}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Favorite Product</p>
                        <p className="text-sm font-semibold text-gray-700">{selectedCustomer.favoriteProduct}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex gap-3">
              <button
                onClick={() => setShowDetailModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium"
              >
                Close
              </button>
              <button className="flex-1 px-4 py-2 bg-[#79C000] text-white rounded-lg hover:bg-[#6AB000] transition font-medium">
                Send Email
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminCustomer;