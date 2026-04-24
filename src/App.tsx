import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/Home';
import CatalogPage from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import PrescriptionDetail from './pages/PrescriptionDetail';
import PatientDashboard from './pages/PatientDashboard';
import AdminDashboard from './pages/AdminDashboard';
import PrescriptionUpload from './pages/PrescriptionUpload';
import DeliveryDashboard from './pages/DeliveryDashboard';
import OrderTracking from './pages/OrderTracking';
import CartPage from './pages/Cart';
import CheckoutPage from './pages/Checkout';
import LoginPage from './pages/Login';
import InventoryPage from './pages/Inventory';
import MyOrders from './pages/MyOrders';
import AdminOrders from './pages/AdminOrders';
import AdminUsers from './pages/AdminUsers';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OrderSuccess from './pages/OrderSuccess';
import HelpCenter from './pages/HelpCenter';
import Profile from './pages/Profile';
import AdminProfile from './pages/AdminProfile';
import PaymentScan from './pages/PaymentScan';
import PharmacyDetail from './pages/PharmacyDetail';
import RegisterStore from './pages/RegisterStore';
import StoreProfile from './pages/StoreProfile';
import DeliveryProfile from './pages/DeliveryProfile';
import AdminLogin from './pages/AdminLogin';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-primary/10 selection:text-primary">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/dashboard" element={<PatientDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/inventory" element={<InventoryPage />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/prescription/:id" element={<PrescriptionDetail />} />
            <Route path="/upload" element={<PrescriptionUpload />} />
            <Route path="/delivery" element={<DeliveryDashboard />} />
            <Route path="/track/:id" element={<OrderTracking />} />
            <Route path="/orders" element={<MyOrders />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin/profile" element={<AdminProfile />} />
            <Route path="/payment-scan" element={<PaymentScan />} />
            <Route path="/pharmacy/:id" element={<PharmacyDetail />} />
            <Route path="/register-store" element={<RegisterStore />} />
            <Route path="/admin/store" element={<StoreProfile />} />
            <Route path="/delivery/profile" element={<DeliveryProfile />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="*" element={<div className="p-20 text-center font-bold">404 - Not Found</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
