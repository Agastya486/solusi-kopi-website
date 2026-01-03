import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import LandingPage from './Landing-page'
import ProductPage from './Product-page.jsx'
import ContactPage from './Contact-page.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/products" element={<ProductPage />}/>
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
)