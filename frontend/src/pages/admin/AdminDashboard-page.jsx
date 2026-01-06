import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, LogOut, Home, ShoppingBag, Users, BarChart3, 
  Settings, Package, DollarSign, TrendingUp, ShoppingCart,
  AlertCircle, CheckCircle, Clock, Eye, Edit, Trash2
} from 'lucide-react';

function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('dashboard');

  // Sample data
  const stats = {
    totalRevenue: 45750000,
    totalOrders: 234,
    totalProducts: 12,
    totalCustomers: 156
  };

  const recentOrders = [
    { id: '#ORD-001', customer: 'Budi Santoso', product: 'Arabica Premium', amount: 170000, status: 'completed', date: '2026-01-06' },
    { id: '#ORD-002', customer: 'Siti Aminah', product: 'Special Blend', amount: 150000, status: 'pending', date: '2026-01-06' },
    { id: '#ORD-003', customer: 'Ahmad Rizki', product: 'Robusta Bold', amount: 195000, status: 'processing', date: '2026-01-05' },
    { id: '#ORD-004', customer: 'Dewi Lestari', product: 'House Blend', amount: 160000, status: 'completed', date: '2026-01-05' },
    { id: '#ORD-005', customer: 'Eko Prasetyo', product: 'Arabica Gold', amount: 190000, status: 'completed', date: '2026-01-04' }
  ];

  const topProducts = [
    { name: 'Arabica Premium', sales: 89, revenue: 7565000 },
    { name: 'Special Blend', sales: 76, revenue: 5700000 },
    { name: 'Robusta Bold', sales: 65, revenue: 4225000 },
    { name: 'House Blend', sales: 54, revenue: 4320000 }
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
      case 'completed': return 'bg-green-100 text-green-700';
      case 'processing': return 'bg-blue-100 text-blue-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'processing': return <Clock className="w-4 h-4" />;
      case 'pending': return <AlertCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/admin-dashboard' },
    { id: 'products', label: 'Products', icon: Package, path: '/admin-product' },
    { id: 'orders', label: 'Orders', icon: ShoppingBag, path: '/admin-order' },
    { id: 'customers', label: 'Customers', icon: Users, path: '/admin-customer' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, path: '/admin-analytic' },
    { id: 'settings', label: 'Settings', icon: Settings, path: '/admin-setting' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`bg-white border-r border-gray-200 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'} flex flex-col`}>
        {/* Logo */}
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

        {/* Menu Items */}
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
                } cursor-pointer`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && <span className="font-medium">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
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
            <h2 className="text-xl font-bold text-gray-900">Dashboard</h2>
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
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#79C000]/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-[#79C000]" />
                </div>
                <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  +12%
                </span>
              </div>
              <h3 className="text-gray-600 text-sm mb-1">Total Revenue</h3>
              <p className="text-2xl font-bold text-gray-900">{formatPrice(stats.totalRevenue)}</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  +8%
                </span>
              </div>
              <h3 className="text-gray-600 text-sm mb-1">Total Orders</h3>
              <p className="text-2xl font-bold text-gray-900">{stats.totalOrders}</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-gray-600 text-sm font-semibold">Active</span>
              </div>
              <h3 className="text-gray-600 text-sm mb-1">Total Products</h3>
              <p className="text-2xl font-bold text-gray-900">{stats.totalProducts}</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  +15%
                </span>
              </div>
              <h3 className="text-gray-600 text-sm mb-1">Total Customers</h3>
              <p className="text-2xl font-bold text-gray-900">{stats.totalCustomers}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Orders */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900">Recent Orders</h3>
                  <button className="text-[#79C000] text-sm font-semibold hover:text-[#6AB000] cursor-pointer">
                    View All
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Order ID</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Customer</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Product</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {recentOrders.map(order => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{order.customer}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{order.product}</td>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">{formatPrice(order.amount)}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                            {getStatusIcon(order.status)}
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-[#79C000] hover:text-[#6AB000] cursor-pointer">
                            <Eye className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Top Products */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-bold text-gray-900">Top Products</h3>
              </div>
              <div className="p-6 space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{product.name}</h4>
                      <p className="text-sm text-gray-600">{product.sales} sales</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[#79C000]">{formatPrice(product.revenue)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;