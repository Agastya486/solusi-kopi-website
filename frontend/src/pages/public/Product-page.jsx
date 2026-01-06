import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Search, Filter, Star } from 'lucide-react';

function ProductPage() {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const [selectedCategory, setSelectedCategory] = useState('all');
        const [cart, setCart] = useState([]);

        const products = [
                {
                id: 1,
                name: "Arabica Premium",
                category: "arabica",
                price: 85000,
                weight: "250g",
                rating: 4.9,
                reviews: 124,
                image: "☕",
                description: "Smooth and aromatic with floral notes"
                },
                {
                id: 2,
                name: "Robusta Bold",
                category: "robusta",
                price: 65000,
                weight: "250g",
                rating: 4.7,
                reviews: 98,
                image: "☕",
                description: "Strong and rich with chocolate hints"
                },
                {
                id: 3,
                name: "Special Blend",
                category: "blend",
                price: 75000,
                weight: "250g",
                rating: 4.8,
                reviews: 156,
                image: "☕",
                description: "Perfect balance of Arabica and Robusta"
                },
                {
                id: 4,
                name: "Arabica Gold",
                category: "arabica",
                price: 95000,
                weight: "250g",
                rating: 5.0,
                reviews: 87,
                image: "☕",
                description: "Premium selection with caramel notes"
                },
                {
                id: 5,
                name: "Robusta Extra",
                category: "robusta",
                price: 70000,
                weight: "250g",
                rating: 4.6,
                reviews: 76,
                image: "☕",
                description: "Extra strong for espresso lovers"
                },
                {
                id: 6,
                name: "House Blend",
                category: "blend",
                price: 80000,
                weight: "250g",
                rating: 4.8,
                reviews: 142,
                image: "☕",
                description: "Our signature daily blend"
                }
        ];

        const categories = [
                { id: 'all', name: 'All Products' },
                { id: 'arabica', name: 'Arabica' },
                { id: 'robusta', name: 'Robusta' },
                { id: 'blend', name: 'Blend' }
        ];

        const filteredProducts = selectedCategory === 'all' 
        ? products 
        : products.filter(p => p.category === selectedCategory);

        const addToCart = (product) => {
                setCart([...cart, product]);
        };

        const formatPrice = (price) => {
                return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0
                }).format(price);
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
                                <span className="text-sm text-gray-600 ml-2">KOPI</span>
                                </div>
                                
                                {/* Desktop Menu */}
                                <div className="hidden md:flex items-center space-x-8">
                                <Link to="/" className="text-gray-700 hover:text-[#79C000] transition">Home</Link>
                                <Link to="/" className="text-gray-700 hover:text-[#79C000] transition">About</Link>
                                <Link to="/products" className="text-[#79C000] font-semibold">Products</Link>
                                <Link to="/contact" className="text-gray-700 hover:text-[#79C000] transition">Contact</Link>
                                <Link to="/cart"  className="bg-[#79C000] text-white px-6 py-2 rounded-full hover:bg-[#6AB000] transition relative cursor-pointer">
                                        <ShoppingCart className="inline w-4 h-4 mr-2" />
                                        Cart
                                        {cart.length > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                                        {cart.length}
                                        </span>
                                        )}
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
                                <Link to="/" className="text-gray-700 hover:text-[#79C000] transition">Home</Link>
                                <Link to="/" className="block py-2 text-gray-700 hover:text-[#79C000]">About</Link>
                                <Link to="/products" className="block py-2 text-[#79C000] font-semibold">Products</Link>
                                <Link to="/contact" className="block py-2 text-gray-700 hover:text-[#79C000]">Contact</Link>
                                </div>
                                </div>
                                )}
                        </nav>

                        {/* Hero Section */}
                        <section className="pt-24 pb-12 bg-gradient-to-r from-[#79C000] to-[#6AB000] text-white">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Premium Coffee</h1>
                                <p className="text-lg md:text-xl text-white/90">
                                Discover the perfect coffee for your taste
                                </p>
                                </div>
                        </section>

                        {/* Filter Section */}
                        <section className="bg-white border-b sticky top-16 z-40">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                                <div className="flex flex-wrap gap-4 items-center justify-between">
                                <div className="flex gap-2 flex-wrap">
                                {categories.map(cat => (
                                        <button
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        className={`px-6 py-2 rounded-full transition ${
                                        selectedCategory === cat.id
                                        ? 'bg-[#79C000] text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        } cursor-pointer`}
                                        >
                                        {cat.name}
                                        </button>
                                ))}
                                </div>
                                <div className="flex items-center gap-2">
                                <span className="text-gray-600 text-sm">
                                        {filteredProducts.length} products
                                </span>
                                </div>
                                </div>
                                </div>
                        </section>

                        {/* Products Grid */}
                        <section className="py-12">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredProducts.map(product => (
                                <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
                                        <div className="bg-gradient-to-br from-[#79C000] to-[#6AB000] h-48 flex items-center justify-center">
                                        <span className="text-8xl">{product.image}</span>
                                        </div>
                                        <div className="p-6">
                                        <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">{product.weight}</span>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                                        <div className="flex items-center gap-1 mb-4">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span className="font-semibold text-sm">{product.rating}</span>
                                        <span className="text-gray-500 text-sm">({product.reviews} reviews)</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold text-[#79C000]">
                                        {formatPrice(product.price)}
                                        </span>
                                        <button
                                        onClick={() => addToCart(product)}
                                        className="bg-[#79C000] text-white px-4 py-2 rounded-full hover:bg-[#6AB000] transition flex items-center gap-2 cursor-pointer"
                                        >
                                        <ShoppingCart className="w-4 h-4" />
                                        Add
                                        </button>
                                        </div>
                                        </div>
                                </div>
                                ))}
                                </div>
                                </div>
                        </section>

                        {/* Why Choose Us Section */}
                        <section className="py-16 bg-white">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <h2 className="text-3xl font-bold text-center mb-12">Why Solusi Kopi?</h2>
                                <div className="grid md:grid-cols-4 gap-6">
                                <div className="text-center">
                                <div className="text-4xl mb-3">🌱</div>
                                <h3 className="font-semibold mb-2">100% Natural</h3>
                                <p className="text-gray-600 text-sm">No additives or preservatives</p>
                                </div>
                                <div className="text-center">
                                <div className="text-4xl mb-3">🏔️</div>
                                <h3 className="font-semibold mb-2">Premium Source</h3>
                                <p className="text-gray-600 text-sm">From Indonesian highlands</p>
                                </div>
                                <div className="text-center">
                                <div className="text-4xl mb-3">🔥</div>
                                <h3 className="font-semibold mb-2">Fresh Roasted</h3>
                                <p className="text-gray-600 text-sm">Roasted to order</p>
                                </div>
                                <div className="text-center">
                                <div className="text-4xl mb-3">📦</div>
                                <h3 className="font-semibold mb-2">Fast Shipping</h3>
                                <p className="text-gray-600 text-sm">Delivered within 2-3 days</p>
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

export default ProductPage;