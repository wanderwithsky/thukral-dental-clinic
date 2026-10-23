import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface AppointmentModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const AppointmentModalContext = createContext<AppointmentModalContextType | undefined>(undefined);

export const AppointmentModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal is now manually triggered via 'Book Appointment' buttons to prevent unsolicited popups/screens covering the view
  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <AppointmentModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </AppointmentModalContext.Provider>
  );
};

export const useAppointmentModal = () => {
  const context = useContext(AppointmentModalContext);
  if (!context) {
    throw new Error('useAppointmentModal must be used within an AppointmentModalProvider');
  }
  return context;
};
