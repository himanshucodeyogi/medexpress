import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/common/ProtectedRoute';
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
import DeliveryLogin from './pages/DeliveryLogin';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-primary/10 selection:text-primary overflow-x-hidden max-w-full">
          <Navbar />
          <main className="flex-grow max-w-full">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              
              {/* Patient Routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute allowedRoles={['patient']}>
                  <PatientDashboard />
                </ProtectedRoute>
              } />
              <Route path="/orders" element={
                <ProtectedRoute allowedRoles={['patient']}>
                  <MyOrders />
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute allowedRoles={['patient']}>
                  <Profile />
                </ProtectedRoute>
              } />
              <Route path="/upload" element={
                <ProtectedRoute allowedRoles={['patient']}>
                  <PrescriptionUpload />
                </ProtectedRoute>
              } />
              <Route path="/track/:id" element={
                <ProtectedRoute allowedRoles={['patient']}>
                  <OrderTracking />
                </ProtectedRoute>
              } />
              <Route path="/checkout" element={
                <ProtectedRoute allowedRoles={['patient']}>
                  <CheckoutPage />
                </ProtectedRoute>
              } />
              <Route path="/order-success" element={
                <ProtectedRoute allowedRoles={['patient']}>
                  <OrderSuccess />
                </ProtectedRoute>
              } />
              <Route path="/payment-scan" element={
                <ProtectedRoute allowedRoles={['patient']}>
                  <PaymentScan />
                </ProtectedRoute>
              } />

              {/* Admin Routes */}
              <Route path="/admin" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
              <Route path="/admin/inventory" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <InventoryPage />
                </ProtectedRoute>
              } />
              <Route path="/admin/orders" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminOrders />
                </ProtectedRoute>
              } />
              <Route path="/admin/users" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminUsers />
                </ProtectedRoute>
              } />
              <Route path="/admin/profile" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminProfile />
                </ProtectedRoute>
              } />
              <Route path="/admin/store" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <StoreProfile />
                </ProtectedRoute>
              } />
              <Route path="/admin/prescription/:id" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <PrescriptionDetail />
                </ProtectedRoute>
              } />

              {/* Delivery Routes */}
              <Route path="/delivery" element={
                <ProtectedRoute allowedRoles={['delivery']}>
                  <DeliveryDashboard />
                </ProtectedRoute>
              } />
              <Route path="/delivery/profile" element={
                <ProtectedRoute allowedRoles={['delivery']}>
                  <DeliveryProfile />
                </ProtectedRoute>
              } />

              {/* Public Routes */}
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/delivery/login" element={<DeliveryLogin />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/pharmacy/:id" element={<PharmacyDetail />} />
              <Route path="/register-store" element={<RegisterStore />} />
              <Route path="*" element={<div className="p-20 text-center font-bold">404 - Not Found</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
