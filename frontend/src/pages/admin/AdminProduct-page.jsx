import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, LogOut, Home, ShoppingBag, Users, BarChart3, 
  Settings, Package, Search, Plus, Edit, Trash2, Eye,
  Filter, Download, Upload, MoreVertical
} from 'lucide-react';

function AdminProduct() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('products');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Arabica Premium",
      category: "arabica",
      price: 85000,
      weight: "250g",
      stock: 45,
      status: "active",
      sales: 89,
      image: "☕"
    },
    {
      id: 2,
      name: "Robusta Bold",
      category: "robusta",
      price: 65000,
      weight: "250g",
      stock: 32,
      status: "active",
      sales: 65,
      image: "☕"
    },
    {
      id: 3,
      name: "Special Blend",
      category: "blend",
      price: 75000,
      weight: "250g",
      stock: 28,
      status: "active",
      sales: 76,
      image: "☕"
    },
    {
      id: 4,
      name: "Arabica Gold",
      category: "arabica",
      price: 95000,
      weight: "250g",
      stock: 15,
      status: "active",
      sales: 43,
      image: "☕"
    },
    {
      id: 5,
      name: "Robusta Extra",
      category: "robusta",
      price: 70000,
      weight: "250g",
      stock: 8,
      status: "low stock",
      sales: 38,
      image: "☕"
    },
    {
      id: 6,
      name: "House Blend",
      category: "blend",
      price: 80000,
      weight: "250g",
      stock: 52,
      status: "active",
      sales: 54,
      image: "☕"
    },
    {
      id: 7,
      name: "Morning Blend",
      category: "blend",
      price: 72000,
      weight: "250g",
      stock: 0,
      status: "out of stock",
      sales: 22,
      image: "☕"
    },
    {
      id: 8,
      name: "Arabica Classic",
      category: "arabica",
      price: 88000,
      weight: "250g",
      stock: 38,
      status: "active",
      sales: 61,
      image: "☕"
    }
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'arabica',
    price: '',
    weight: '250g',
    stock: ''
  });

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'arabica', name: 'Arabica' },
    { id: 'robusta', name: 'Robusta' },
    { id: 'blend', name: 'Blend' }
  ];

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
      case 'active': return 'bg-green-100 text-green-700';
      case 'low stock': return 'bg-yellow-100 text-yellow-700';
      case 'out of stock': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.stock) {
      const product = {
        id: products.length + 1,
        name: newProduct.name,
        category: newProduct.category,
        price: parseInt(newProduct.price),
        weight: newProduct.weight,
        stock: parseInt(newProduct.stock),
        status: parseInt(newProduct.stock) > 10 ? 'active' : parseInt(newProduct.stock) > 0 ? 'low stock' : 'out of stock',
        sales: 0,
        image: "☕"
      };
      setProducts([...products, product]);
      setNewProduct({ name: '', category: 'arabica', price: '', weight: '250g', stock: '' });
      setShowAddModal(false);
    }
  };

  const handleEditProduct = () => {
    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? {
        ...editingProduct,
        status: editingProduct.stock > 10 ? 'active' : editingProduct.stock > 0 ? 'low stock' : 'out of stock'
      } : p));
      setShowEditModal(false);
      setEditingProduct(null);
    }
  };

  const handleDeleteProduct = (id) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const openEditModal = (product) => {
    setEditingProduct({...product});
    setShowEditModal(true);
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
                } cursor-pointer`}
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
            <h2 className="text-xl font-bold text-gray-900">Products Management</h2>
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
              <h3 className="text-gray-600 text-sm mb-1">Total Products</h3>
              <p className="text-3xl font-bold text-gray-900">{products.length}</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-gray-600 text-sm mb-1">Active Products</h3>
              <p className="text-3xl font-bold text-green-600">{products.filter(p => p.status === 'active').length}</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-gray-600 text-sm mb-1">Low Stock</h3>
              <p className="text-3xl font-bold text-yellow-600">{products.filter(p => p.status === 'low stock').length}</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-gray-600 text-sm mb-1">Out of Stock</h3>
              <p className="text-3xl font-bold text-red-600">{products.filter(p => p.status === 'out of stock').length}</p>
            </div>
          </div>

          {/* Actions Bar */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1 flex gap-4">
                {/* Search */}
                <div className="flex-1 max-w-md relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000] focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 rounded-lg transition text-sm font-medium ${
                        selectedCategory === cat.id
                          ? 'bg-[#79C000] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      } cursor-pointer`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                  <Download className="w-4 h-4" />
                  <span className="text-sm font-medium">Export</span>
                </button>
                <button 
                  onClick={() => setShowAddModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-[#79C000] text-white rounded-lg hover:bg-[#6AB000] transition cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span className="text-sm font-medium">Add Product</span>
                </button>
              </div>
            </div>
          </div>

          {/* Products Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Product</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Category</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Price</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Weight</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Stock</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Sales</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredProducts.map(product => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#79C000] to-[#6AB000] rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl">{product.image}</span>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{product.name}</p>
                            <p className="text-xs text-gray-500">ID: #{product.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-700 capitalize">{product.category}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-semibold text-gray-900">{formatPrice(product.price)}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-700">{product.weight}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-sm font-semibold ${product.stock <= 10 ? 'text-red-600' : 'text-gray-900'}`}>
                          {product.stock} units
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-700">{product.sales}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(product.status)}`}>
                          {product.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition cursor-pointer">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => openEditModal(product)}
                            className="p-2 text-[#79C000] hover:bg-green-50 rounded-lg transition cursor-pointer"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDeleteProduct(product.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <Package className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p className="text-gray-600 font-medium">No products found</p>
                <p className="text-gray-500 text-sm mt-1">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-2xl font-bold mb-6">Add New Product</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000]"
                  placeholder="e.g., Arabica Premium"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000]"
                >
                  <option value="arabica">Arabica</option>
                  <option value="robusta">Robusta</option>
                  <option value="blend">Blend</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price (IDR)</label>
                <input
                  type="number"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000]"
                  placeholder="85000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Weight</label>
                <select
                  value={newProduct.weight}
                  onChange={(e) => setNewProduct({...newProduct, weight: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000]"
                >
                  <option value="100g">100g</option>
                  <option value="250g">250g</option>
                  <option value="500g">500g</option>
                  <option value="1kg">1kg</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Stock</label>
                <input
                  type="number"
                  value={newProduct.stock}
                  onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000]"
                  placeholder="50"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleAddProduct}
                className="flex-1 px-4 py-2 bg-[#79C000] text-white rounded-lg hover:bg-[#6AB000] transition font-medium"
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Product Modal */}
      {showEditModal && editingProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-2xl font-bold mb-6">Edit Product</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                <input
                  type="text"
                  value={editingProduct.name}
                  onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={editingProduct.category}
                  onChange={(e) => setEditingProduct({...editingProduct, category: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000]"
                >
                  <option value="arabica">Arabica</option>
                  <option value="robusta">Robusta</option>
                  <option value="blend">Blend</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price (IDR)</label>
                <input
                  type="number"
                  value={editingProduct.price}
                  onChange={(e) => setEditingProduct({...editingProduct, price: parseInt(e.target.value)})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Weight</label>
                <select
                  value={editingProduct.weight}
                  onChange={(e) => setEditingProduct({...editingProduct, weight: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000]"
                >
                  <option value="100g">100g</option>
                  <option value="250g">250g</option>
                  <option value="500g">500g</option>
                  <option value="1kg">1kg</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Stock</label>
                <input
                  type="number"
                  value={editingProduct.stock}
                  onChange={(e) => setEditingProduct({...editingProduct, stock: parseInt(e.target.value)})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000]"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setEditingProduct(null);
                }}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleEditProduct}
                className="flex-1 px-4 py-2 bg-[#79C000] text-white rounded-lg hover:bg-[#6AB000] transition font-medium"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default AdminProduct;