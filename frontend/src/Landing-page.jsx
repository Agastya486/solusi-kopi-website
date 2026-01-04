import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import {Link} from 'react-router-dom'
import React, { useState } from 'react'
import { Menu, X, ShoppingCart, Coffee, Award, Truck } from 'lucide-react'

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-white">
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
              <a href="#about" className="text-gray-700 hover:text-[#79C000] transition">About</a>
              <Link to="/products" className="text-gray-700 hover:text-[#79C000] transition">Products</Link>
              <Link to="/contact" className="text-gray-700 hover:text-[#79C000] transition">Contact</Link>
              <Link to="/products" className="bg-[#79C000] text-white px-6 py-2 rounded-full hover:bg-[#6AB000] transition">
                <ShoppingCart className="inline w-4 h-4 mr-2" />
                Shop Now
              </Link>
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
              <a href="#about" className="block py-2 text-gray-700 hover:text-[#79C000]">About</a>
              <Link to="/products" className="text-gray-700 hover:text-[#79C000] transition">Products</Link>
              <Link to="/contact" className="block py-2 text-gray-700 hover:text-[#79C000]">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-[#79C000] to-[#6AB000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Premium Coffee Powder for Every Moment
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Experience the rich aroma and authentic taste of high-quality Indonesian coffee, carefully selected and processed for your perfect cup.
              </p>
              <Link to="/products" className="bg-white text-[#79C000] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition text-lg">
                Explore Our Coffee
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Coffee className="w-32 h-32 md:w-40 md:h-40 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#79C000] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Carefully selected beans from the finest Indonesian coffee plantations
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#7AB517] rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Processing</h3>
              <p className="text-gray-600">
                Traditional methods combined with modern techniques for perfect flavor
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#7AB517] rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Fresh coffee delivered straight to your door with care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                About Solusi Kopi
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Solusi Kopi is dedicated to bringing you the finest coffee experience. We source our beans from premium Indonesian plantations and process them with care to preserve their authentic flavor and aroma.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to provide high-quality coffee powder that transforms your daily coffee ritual into a memorable experience. Every batch is crafted with passion and expertise.
              </p>
            </div>
            <div className="bg-[#79C000] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-2xl mr-2">✓</span>
                  <span>100% authentic Indonesian coffee beans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-2">✓</span>
                  <span>Carefully roasted and ground to perfection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-2">✓</span>
                  <span>Affordable prices without compromising quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-2">✓</span>
                  <span>Committed to customer satisfaction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#79C000] to-[#6AB000] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Taste the Difference?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Start your day with premium coffee from Solusi Kopi
          </p>
          <Link to="/products" className="bg-white text-[#79C000] px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition text-lg">
            Order Now
          </Link>
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
                <li>Phone: +62 XXX XXXX XXXX</li>
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

export default LandingPage;