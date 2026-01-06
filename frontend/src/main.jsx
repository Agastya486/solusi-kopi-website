import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import LandingPage from './pages/public/Landing-page'
import ProductPage from './pages/public/Product-page'
import ContactPage from './pages/public/Contact-page'
import CartPage from './pages/public/Cart-page';
import AdminPage from './pages/admin/Admin-page';
import AdminDashboard from './pages/admin/AdminDashboard-page';
import AdminProduct from './pages/admin/AdminProduct-page';
import AdminOrder from './pages/admin/AdminOrder-page';
import AdminCustomer from './pages/admin/AdminCustomer-page';
import AdminAnalytic from './pages/admin/AdminAnalytic-page';
import AdminSetting from './pages/admin/AdminSetting-page';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/products" element={<ProductPage />}/>
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/admin-product" element={<AdminProduct />} />
      <Route path="/admin-order" element={<AdminOrder />} />
      <Route path="/admin-customer" element={<AdminCustomer />} />
      <Route path="/admin-analytic" element={<AdminAnalytic />} />
      <Route path="/admin-setting" element={<AdminSetting />} />
    </Routes>
  </BrowserRouter>,
)