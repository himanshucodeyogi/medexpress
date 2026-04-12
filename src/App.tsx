import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/Home';
import CatalogPage from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import PatientDashboard from './pages/PatientDashboard';
import AdminDashboard from './pages/AdminDashboard';
import PrescriptionUpload from './pages/PrescriptionUpload';
import DeliveryDashboard from './pages/DeliveryDashboard';
import OrderTracking from './pages/OrderTracking';

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
            <Route path="/upload" element={<PrescriptionUpload />} />
            <Route path="/delivery" element={<DeliveryDashboard />} />
            <Route path="/track/:id" element={<OrderTracking />} />
            <Route path="*" element={<div className="p-20 text-center font-bold">404 - Not Found</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
