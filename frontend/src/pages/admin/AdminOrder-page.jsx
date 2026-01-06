import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, LogOut, Home, ShoppingBag, Users, BarChart3, 
  Settings, Package, Search, Filter, Eye, Download,
  CheckCircle, Clock, XCircle, Truck, AlertCircle, ChevronDown
} from 'lucide-react';

function AdminOrder() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('orders');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [orders, setOrders] = useState([
    {
      id: 'ORD-001',
      customer: 'Budi Santoso',
      email: 'budi@email.com',
      phone: '+62 812 3456 7890',
      products: [
        { name: 'Arabica Premium', quantity: 2, price: 85000 }
      ],
      total: 185000,
      status: 'completed',
      payment: 'paid',
      shipping: 'delivered',
      address: 'Jl. Raya No. 123, Surabaya',
      date: '2026-01-06 14:30',
      notes: 'Please pack carefully'
    },
    {
      id: 'ORD-002',
      customer: 'Siti Aminah',
      email: 'siti@email.com',
      phone: '+62 821 9876 5432',
      products: [
        { name: 'Special Blend', quantity: 2, price: 75000 }
      ],
      total: 165000,
      status: 'pending',
      payment: 'unpaid',
      shipping: 'pending',
      address: 'Jl. Merdeka No. 45, Surabaya',
      date: '2026-01-06 13:15',
      notes: ''
    },
    {
      id: 'ORD-003',
      customer: 'Ahmad Rizki',
      email: 'ahmad@email.com',
      phone: '+62 813 2468 1357',
      products: [
        { name: 'Robusta Bold', quantity: 3, price: 65000 }
      ],
      total: 210000,
      status: 'processing',
      payment: 'paid',
      shipping: 'packing',
      address: 'Jl. Pahlawan No. 78, Malang',
      date: '2026-01-05 16:45',
      notes: 'Need fast delivery'
    },
    {
      id: 'ORD-004',
      customer: 'Dewi Lestari',
      email: 'dewi@email.com',
      phone: '+62 856 7890 1234',
      products: [
        { name: 'House Blend', quantity: 2, price: 80000 }
      ],
      total: 175000,
      status: 'completed',
      payment: 'paid',
      shipping: 'delivered',
      address: 'Jl. Sudirman No. 90, Surabaya',
      date: '2026-01-05 10:20',
      notes: ''
    },
    {
      id: 'ORD-005',
      customer: 'Eko Prasetyo',
      email: 'eko@email.com',
      phone: '+62 877 5544 3322',
      products: [
        { name: 'Arabica Gold', quantity: 2, price: 95000 }
      ],
      total: 205000,
      status: 'completed',
      payment: 'paid',
      shipping: 'delivered',
      address: 'Jl. Ahmad Yani No. 12, Sidoarjo',
      date: '2026-01-04 09:30',
      notes: ''
    },
    {
      id: 'ORD-006',
      customer: 'Rina Kusuma',
      email: 'rina@email.com',
      phone: '+62 822 1122 3344',
      products: [
        { name: 'Arabica Premium', quantity: 1, price: 85000 },
        { name: 'Robusta Bold', quantity: 1, price: 65000 }
      ],
      total: 165000,
      status: 'shipped',
      payment: 'paid',
      shipping: 'in transit',
      address: 'Jl. Gatot Subroto No. 56, Surabaya',
      date: '2026-01-05 15:00',
      notes: 'Call before delivery'
    },
    {
      id: 'ORD-007',
      customer: 'Joko Widodo',
      email: 'joko@email.com',
      phone: '+62 838 9988 7766',
      products: [
        { name: 'Special Blend', quantity: 3, price: 75000 }
      ],
      total: 240000,
      status: 'cancelled',
      payment: 'refunded',
      shipping: 'cancelled',
      address: 'Jl. Diponegoro No. 34, Gresik',
      date: '2026-01-03 11:45',
      notes: 'Customer requested cancellation'
    },
    {
      id: 'ORD-008',
      customer: 'Maya Sari',
      email: 'maya@email.com',
      phone: '+62 819 6655 4433',
      products: [
        { name: 'House Blend', quantity: 1, price: 80000 }
      ],
      total: 95000,
      status: 'processing',
      payment: 'paid',
      shipping: 'packing',
      address: 'Jl. Veteran No. 67, Surabaya',
      date: '2026-01-06 08:20',
      notes: ''
    }
  ]);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/admin-dashboard' },
    { id: 'products', label: 'Products', icon: Package, path: '/admin-product' },
    { id: 'orders', label: 'Orders', icon: ShoppingBag, path: '/admin-orders' },
    { id: 'customers', label: 'Customers', icon: Users, path: '/admin-customer' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, path: '/admin-analytic' },
    { id: 'settings', label: 'Settings', icon: Settings, path: '/admin-setting' }
  ];

  const statusOptions = [
    { value: 'all', label: 'All Orders', count: orders.length },
    { value: 'pending', label: 'Pending', count: orders.filter(o => o.status === 'pending').length },
    { value: 'processing', label: 'Processing', count: orders.filter(o => o.status === 'processing').length },
    { value: 'shipped', label: 'Shipped', count: orders.filter(o => o.status === 'shipped').length },
    { value: 'completed', label: 'Completed', count: orders.filter(o => o.status === 'completed').length },
    { value: 'cancelled', label: 'Cancelled', count: orders.filter(o => o.status === 'cancelled').length }
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
      case 'shipped': return 'bg-purple-100 text-purple-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'processing': return <Clock className="w-4 h-4" />;
      case 'shipped': return <Truck className="w-4 h-4" />;
      case 'pending': return <AlertCircle className="w-4 h-4" />;
      case 'cancelled': return <XCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  const getPaymentColor = (payment) => {
    switch(payment) {
      case 'paid': return 'text-green-600';
      case 'unpaid': return 'text-red-600';
      case 'refunded': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || order.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const openOrderDetail = (order) => {
    setSelectedOrder(order);
    setShowDetailModal(true);
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
            <h2 className="text-xl font-bold text-gray-900">Orders Management</h2>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            {statusOptions.map(status => (
              <div 
                key={status.value}
                className={`bg-white rounded-xl shadow-sm p-4 border cursor-pointer transition ${
                  selectedStatus === status.value ? 'border-[#79C000] ring-2 ring-[#79C000]' : 'border-gray-100 hover:border-[#79C000]'
                }`}
                onClick={() => setSelectedStatus(status.value)}
              >
                <h3 className="text-gray-600 text-xs font-medium mb-1">{status.label}</h3>
                <p className="text-2xl font-bold text-gray-900">{status.count}</p>
              </div>
            ))}
          </div>

          {/* Actions Bar */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1 max-w-md relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by order ID or customer..."
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

          {/* Orders Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Order ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Customer</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Products</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Total</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Payment</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredOrders.map(order => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <span className="text-sm font-semibold text-gray-900">{order.id}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{order.customer}</p>
                          <p className="text-xs text-gray-500">{order.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-700">
                          {order.products.map((p, i) => (
                            <div key={i}>
                              {p.name} x{p.quantity}
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-semibold text-gray-900">{formatPrice(order.total)}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-sm font-semibold capitalize ${getPaymentColor(order.payment)}`}>
                          {order.payment}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="relative">
                          <select
                            value={order.status}
                            onChange={(e) => handleStatusChange(order.id, e.target.value)}
                            className={`appearance-none pl-3 pr-8 py-1 rounded-full text-xs font-semibold border-0 cursor-pointer ${getStatusColor(order.status)}`}
                          >
                            <option value="pending">Pending</option>
                            <option value="processing">Processing</option>
                            <option value="shipped">Shipped</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 pointer-events-none" />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">{order.date.split(' ')[0]}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button 
                            onClick={() => openOrderDetail(order)}
                            className="p-2 text-[#79C000] hover:bg-green-50 rounded-lg transition cursor-pointer"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredOrders.length === 0 && (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p className="text-gray-600 font-medium">No orders found</p>
                <p className="text-gray-500 text-sm mt-1">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Order Detail Modal */}
      {showDetailModal && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-2xl w-full my-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Order Details</h3>
                <button 
                  onClick={() => setShowDetailModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Order Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 mb-3">Order Information</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Order ID:</span>
                      <span className="text-sm font-semibold">{selectedOrder.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Date:</span>
                      <span className="text-sm font-semibold">{selectedOrder.date}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Status:</span>
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(selectedOrder.status)}`}>
                        {getStatusIcon(selectedOrder.status)}
                        {selectedOrder.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Payment:</span>
                      <span className={`text-sm font-semibold capitalize ${getPaymentColor(selectedOrder.payment)}`}>
                        {selectedOrder.payment}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-600 mb-3">Customer Information</h4>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm text-gray-600">Name:</span>
                      <p className="text-sm font-semibold">{selectedOrder.customer}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Email:</span>
                      <p className="text-sm font-semibold">{selectedOrder.email}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Phone:</span>
                      <p className="text-sm font-semibold">{selectedOrder.phone}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-3">Shipping Address</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">{selectedOrder.address}</p>
                  <div className="mt-2 flex items-center gap-2 text-xs">
                    <Truck className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 capitalize">Shipping: {selectedOrder.shipping}</span>
                  </div>
                </div>
              </div>

              {/* Products */}
              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-3">Products</h4>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Product</th>
                        <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600">Qty</th>
                        <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600">Price</th>
                        <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {selectedOrder.products.map((product, index) => (
                        <tr key={index}>
                          <td className="px-4 py-3 text-sm">{product.name}</td>
                          <td className="px-4 py-3 text-sm text-center">{product.quantity}</td>
                          <td className="px-4 py-3 text-sm text-right">{formatPrice(product.price)}</td>
                          <td className="px-4 py-3 text-sm font-semibold text-right">{formatPrice(product.price * product.quantity)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-semibold">{formatPrice(selectedOrder.total - 15000)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="font-semibold">{formatPrice(15000)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 flex justify-between">
                    <span className="font-semibold">Total:</span>
                    <span className="text-xl font-bold text-[#79C000]">{formatPrice(selectedOrder.total)}</span>
                  </div>
                </div>
              </div>

              {/* Notes */}
              {selectedOrder.notes && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Order Notes</h4>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-gray-700">{selectedOrder.notes}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-gray-200 flex gap-3">
              <button
                onClick={() => setShowDetailModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium"
              >
                Close
              </button>
              <button className="flex-1 px-4 py-2 bg-[#79C000] text-white rounded-lg hover:bg-[#6AB000] transition font-medium">
                Print Invoice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminOrder;