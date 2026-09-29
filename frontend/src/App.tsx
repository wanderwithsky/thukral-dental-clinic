import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import Appointment from './pages/Appointment';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
