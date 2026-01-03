import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import {Link} from 'react-router-dom'
import React, { useState } from 'react'
import { Menu, X, ShoppingCart, MapPin, Phone, Mail, Clock, Send, Instagram, Music } from 'lucide-react';

function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.subject && formData.message) {
      setSubmitStatus('success');
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setSubmitStatus('');
      }, 3000);
    }
  };
  return (
    <>
   <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#79C000]">SOLŪSI</span>
              <span className="text-sm text-gray-600 ml-2">COFFEE & TEA</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-[#79C000] transition">Home</Link>
              <Link to="/" className="text-gray-700 hover:text-[#79C000] transition">About</Link>
              <Link to="/products" className="text-gray-700 hover:text-[#79C000] transition">Products</Link>
              <Link href="/contact" className="text-[#79C000] font-semibold">Contact</Link>
              <button className="bg-[#79C000] text-white px-6 py-2 rounded-full hover:bg-[#6AB000] transition">
                <ShoppingCart className="inline w-4 h-4 mr-2" />
                Cart
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
              <Link to="/contact" className="block py-2 text-[#79C000] font-semibold">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-[#79C000] to-[#6AB000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg md:text-xl text-white/90">
            We'd love to hear from you. Send us a message!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 -mt-20">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-[#79C000] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-gray-600 text-sm">
                Jl. Raya Kopi No. 123<br />
                Surabaya, East Java<br />
                Indonesia 60119
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-[#79C000] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">
                +62 812 3456 7890<br />
                +62 821 9876 5432
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-[#79C000] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600 text-sm">
                info@solusikopi.com<br />
                order@solusikopi.com
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-[#79C000] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Working Hours</h3>
              <p className="text-gray-600 text-sm">
                Mon - Fri: 8AM - 8PM<br />
                Sat - Sun: 9AM - 5PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000] focus:border-transparent"
                      placeholder="+62 XXX XXXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000] focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79C000] focus:border-transparent resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#79C000] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#6AB000] transition flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                <div className="bg-gradient-to-br from-[#79C000] to-[#6AB000] h-80 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg">Map Location</p>
                    <p className="text-sm opacity-90">Surabaya, East Java</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Visit Our Store</h3>
                <p className="text-gray-600 mb-6">
                  Come visit us at our physical store to experience our coffee firsthand. Our friendly staff will be happy to help you choose the perfect coffee for your taste.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#79C000]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">☕</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Free Tasting</h4>
                      <p className="text-gray-600 text-sm">Try before you buy at our store</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#79C000]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🎁</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Special Offers</h4>
                      <p className="text-gray-600 text-sm">In-store exclusive discounts</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#79C000]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Expert Advice</h4>
                      <p className="text-gray-600 text-sm">Get recommendations from our baristas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Marketplace Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Connect With Us</h2>
          <p className="text-center text-gray-600 mb-12">Follow us on social media and shop on your favorite marketplace</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Instagram */}
            <a 
              href="https://instagram.com/solusikopi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Instagram</h3>
              <p className="text-gray-600 text-sm mb-2">@solusikopi</p>
              <p className="text-xs text-gray-500">Follow for daily updates & promos</p>
            </a>

            {/* TikTok */}
            <a 
              href="https://tiktok.com/@solusikopi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition group"
            >
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Music className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">TikTok</h3>
              <p className="text-gray-600 text-sm mb-2">@solusikopi</p>
              <p className="text-xs text-gray-500">Watch our coffee tutorials</p>
            </a>

            {/* Shopee */}
            <a 
              href="https://shopee.co.id/solusikopi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition group"
            >
              <div className="w-16 h-16 bg-[#EE4D2D] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Shopee</h3>
              <p className="text-gray-600 text-sm mb-2">Official Store</p>
              <p className="text-xs text-gray-500">Free shipping & cashback</p>
            </a>

            {/* Tokopedia */}
            <a 
              href="https://tokopedia.com/solusikopi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition group"
            >
              <div className="w-16 h-16 bg-[#42B549] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <span className="text-white font-bold text-2xl">T</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Tokopedia</h3>
              <p className="text-gray-600 text-sm mb-2">Official Store</p>
              <p className="text-xs text-gray-500">Shop with peace of mind</p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">How do I place an order?</h3>
              <p className="text-gray-600">
                You can place an order through our website, WhatsApp, or by visiting our store directly. Online orders are processed within 24 hours.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept bank transfers, e-wallets (GoPay, OVO, DANA), and cash on delivery for orders within Surabaya.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">How long does delivery take?</h3>
              <p className="text-gray-600">
                Local deliveries within Surabaya take 1-2 days. For other cities in Java, it takes 2-3 days. Other regions may take 3-5 days.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Do you offer wholesale prices?</h3>
              <p className="text-gray-600">
                Yes! We offer special wholesale prices for bulk orders. Please contact us directly for more information.
              </p>
            </div>
          </div>
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
    </>
  )
}

export default ContactPage;