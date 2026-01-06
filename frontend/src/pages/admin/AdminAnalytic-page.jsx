import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, LogOut, Home, ShoppingBag, Users, BarChart3, 
  Settings, Package, TrendingUp, TrendingDown, DollarSign,
  ShoppingCart, Calendar, Download, Filter
} from 'lucide-react';

function AdminAnalytic() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('analytics');
  const [timeRange, setTimeRange] = useState('7days');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/admin-dashboard' },
    { id: 'products', label: 'Products', icon: Package, path: '/admin-product' },
    { id: 'orders', label: 'Orders', icon: ShoppingBag, path: '/admin-order' },
    { id: 'customers', label: 'Customers', icon: Users, path: '/admin-customer' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, path: '/admin-analytic' },
    { id: 'settings', label: 'Settings', icon: Settings, path: '/admin-setting' }
  ];

  const salesData = [
    { day: 'Mon', revenue: 1250000, orders: 15 },
    { day: 'Tue', revenue: 1680000, orders: 21 },
    { day: 'Wed', revenue: 1420000, orders: 18 },
    { day: 'Thu', revenue: 1890000, orders: 24 },
    { day: 'Fri', revenue: 2100000, orders: 28 },
    { day: 'Sat', revenue: 2450000, orders: 32 },
    { day: 'Sun', revenue: 1960000, orders: 26 }
  ];

  const topProducts = [
    { name: 'Arabica Premium', sales: 145, revenue: 12325000, growth: 15 },
    { name: 'Special Blend', sales: 128, revenue: 9600000, growth: 8 },
    { name: 'Robusta Bold', sales: 112, revenue: 7280000, growth: -3 },
    { name: 'House Blend', sales: 98, revenue: 7840000, growth: 12 },
    { name: 'Arabica Gold', sales: 87, revenue: 8265000, growth: 22 }
  ];

  const categoryData = [
    { name: 'Arabica', percentage: 45, sales: 232, revenue: 20590000 },
    { name: 'Blend', percentage: 35, sales: 226, revenue: 17440000 },
    { name: 'Robusta', percentage: 20, sales: 112, revenue: 7280000 }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const totalRevenue = salesData.reduce((sum, day) => sum + day.revenue, 0);
  const totalOrders = salesData.reduce((sum, day) => sum + day.orders, 0);
  const avgOrderValue = totalRevenue / totalOrders;
  const maxRevenue = Math.max(...salesData.map(d => d.revenue));

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
            <h2 className="text-xl font-bold text-gray-900">Analytics & Reports</h2>
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
          {/* Time Range Selector */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              {[
                { value: '7days', label: 'Last 7 Days' },
                { value: '30days', label: 'Last 30 Days' },
                { value: '90days', label: 'Last 90 Days' },
                { value: 'year', label: 'This Year' }
              ].map(range => (
                <button
                  key={range.value}
                  onClick={() => setTimeRange(range.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    timeRange === range.value
                      ? 'bg-[#79C000] text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  } cursor-pointer`}
                >
                  {range.label}
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                <Download className="w-4 h-4" />
                <span className="text-sm font-medium">Export Report</span>
              </button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#79C000]/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-[#79C000]" />
                </div>
                <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  +18%
                </span>
              </div>
              <h3 className="text-gray-600 text-sm mb-1">Total Revenue</h3>
              <p className="text-2xl font-bold text-gray-900">{formatPrice(totalRevenue)}</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  +12%
                </span>
              </div>
              <h3 className="text-gray-600 text-sm mb-1">Total Orders</h3>
              <p className="text-2xl font-bold text-gray-900">{totalOrders}</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  +5%
                </span>
              </div>
              <h3 className="text-gray-600 text-sm mb-1">Avg Order Value</h3>
              <p className="text-2xl font-bold text-gray-900">{formatPrice(avgOrderValue)}</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  +22%
                </span>
              </div>
              <h3 className="text-gray-600 text-sm mb-1">New Customers</h3>
              <p className="text-2xl font-bold text-gray-900">23</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Revenue Chart */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Revenue Overview</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  Last 7 Days
                </div>
              </div>
              <div className="space-y-4">
                {salesData.map((day, index) => {
                  const barWidth = (day.revenue / maxRevenue) * 100;
                  return (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 w-12">{day.day}</span>
                        <div className="flex-1 mx-4">
                          <div className="h-8 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-[#79C000] to-[#6AB000] rounded-full flex items-center justify-end pr-3 transition-all duration-500"
                              style={{ width: `${barWidth}%` }}
                            >
                              <span className="text-xs font-semibold text-white">
                                {formatPrice(day.revenue)}
                              </span>
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-600 w-16 text-right">{day.orders} orders</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Category Distribution */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Sales by Category</h3>
              <div className="space-y-6">
                {categoryData.map((category, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{category.name}</span>
                      <span className="text-sm font-bold text-gray-900">{category.percentage}%</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-2">
                      <div 
                        className="h-full bg-[#79C000] rounded-full transition-all duration-500"
                        style={{ width: `${category.percentage}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{category.sales} sales</span>
                      <span>{formatPrice(category.revenue)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Products Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">Top Performing Products</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Rank</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Product</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Sales</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Revenue</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Growth</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {topProducts.map((product, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#79C000]/10 text-[#79C000] font-bold text-sm">
                          {index + 1}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-semibold text-gray-900">{product.name}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-700">{product.sales} units</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-semibold text-gray-900">{formatPrice(product.revenue)}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 text-sm font-semibold ${
                          product.growth >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {product.growth >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                          {Math.abs(product.growth)}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminAnalytic;