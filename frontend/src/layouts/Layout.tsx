import type { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AppointmentPopup from '../components/AppointmentPopup';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';
import { AppointmentModalProvider } from '../context/AppointmentModalContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <AppointmentModalProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <AppointmentPopup />
        <FloatingWhatsAppButton />
      </div>
    </AppointmentModalProvider>
  );
};

export default Layout;
