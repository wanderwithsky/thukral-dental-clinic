import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import Appointment from './pages/Appointment';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import WhyThukralPage from './pages/WhyThukralPage';
import AdminDashboard from './pages/AdminDashboard';
import { AdminAuthProvider } from './context/AdminAuthContext';

function App() {
  return (
    <AdminAuthProvider>
      <Router>
        <Routes>
          {/* Dedicated Admin Portal Route */}
          <Route path="/admin" element={<AdminDashboard />} />

          {/* Public Website Routes wrapped in main Layout */}
          <Route
            path="/*"
            element={
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/why-thukral" element={<WhyThukralPage />} />
                  <Route path="/treatments" element={<Treatments />} />
                  <Route path="/appointment" element={<Appointment />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-and-conditions" element={<Terms />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </AdminAuthProvider>
  );
}

export default App;
