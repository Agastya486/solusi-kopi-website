import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Menu, X, ShoppingCart, Trash2, Plus, Minus, ArrowLeft, CheckCircle } from 'lucide-react';

function CartPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Arabica Premium",
      price: 85000,
      weight: "250g",
      quantity: 2,
      image: "☕"
    },
    {
      id: 2,
      name: "Special Blend",
      price: 75000,
      weight: "250g",
      quantity: 1,
      image: "☕"
    },
    {
      id: 3,
      name: "Robusta Bold",
      price: 65000,
      weight: "250g",
      quantity: 3,
      image: "☕"
    }
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = 15000;
  const total = subtotal + shippingCost;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#79C000]">SOLŪSI</span>
              <span className="text-sm text-gray-600 ml-2">KOPI</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-[#79C000] transition">Home</Link>
              <Link to="/" className="text-gray-700 hover:text-[#79C000] transition">About</Link>
              <Link to="/products" className="text-gray-700 hover:text-[#79C000] transition">Products</Link>
              <Link to="/contact" className="text-gray-700 hover:text-[#79C000] transition">Contact</Link>
              <button className="bg-[#79C000] text-white px-6 py-2 rounded-full hover:bg-[#6AB000] transition relative cursor-pointer">
                <ShoppingCart className="inline w-4 h-4 mr-2" />
                Cart
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link to="/" className="block py-2 text-gray-700 hover:text-[#79C000]">Home</Link>
              <Link to="/" className="block py-2 text-gray-700 hover:text-[#79C000]">About</Link>
              <Link to="/products" className="block py-2 text-gray-700 hover:text-[#79C000]">Products</Link>
              <Link to="/contact" className="block py-2 text-gray-700 hover:text-[#79C000]">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-[#79C000] to-[#6AB000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/products" className="hover:opacity-80 transition">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold">Shopping Cart</h1>
          </div>
          <p className="text-lg md:text-xl text-white/90">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <ShoppingCart className="w-24 h-24 mx-auto mb-6 text-gray-300" />
              <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Add some delicious coffee to get started!</p>
              <a href="#products" className="inline-block bg-[#79C000] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#6AB000] transition">
                Browse Products
              </a>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center gap-6">
                      {/* Product Image */}
                      <div className="w-24 h-24 bg-gradient-to-br from-[#79C000] to-[#6AB000] rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-4xl">{item.image}</span>
                      </div>

                      {/* Product Info */}
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{item.weight}</p>
                        <p className="text-[#79C000] font-bold text-lg">{formatPrice(item.price)}</p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition cursor-pointer"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition cursor-pointer"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 transition p-2 cursor-pointer"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Subtotal for this item */}
                    <div className="mt-4 pt-4 border-t border-gray-100 text-right">
                      <span className="text-gray-600">Subtotal: </span>
                      <span className="font-bold text-lg">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  </div>
                ))}

                {/* Continue Shopping Button */}
                <Link to="/products" className="block text-center text-[#79C000] hover:text-[#6AB000] font-semibold py-4">
                  ← Continue Shopping
                </Link>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                  <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span>{formatPrice(shippingCost)}</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between text-xl font-bold">
                        <span>Total</span>
                        <span className="text-[#79C000]">{formatPrice(total)}</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-[#79C000] text-white py-4 rounded-lg font-semibold hover:bg-[#6AB000] transition mb-4 cursor-pointer">
                    <Link to="/payment">Proceed to Checkout</Link>
                  </button>

                  {/* Trust Badges */}
                  <div className="space-y-3 pt-6 border-t">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <CheckCircle className="w-5 h-5 text-[#79C000]" />
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <CheckCircle className="w-5 h-5 text-[#79C000]" />
                      <span>Free Returns</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <CheckCircle className="w-5 h-5 text-[#79C000]" />
                      <span>Fast Delivery</span>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="mt-6 pt-6 border-t">
                    <label className="block text-sm font-medium mb-2">Promo Code</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter code"
                        className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000] focus:border-transparent"
                      />
                      <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition cursor-pointer">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#79C000]">SOLŪSI KOPI</h3>
              <p className="text-gray-400">
                Premium coffee powder for coffee lovers across Indonesia.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-[#79C000] transition">Home</a></li>
                <li><a href="#about" className="hover:text-[#79C000] transition">About</a></li>
                <li><a href="#products" className="hover:text-[#79C000] transition">Products</a></li>
                <li><a href="#contact" className="hover:text-[#79C000] transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@solusikopi.com</li>
                <li>Phone: +62 812 3456 7890</li>
                <li>Surabaya, East Java, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Solusi Kopi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default CartPage