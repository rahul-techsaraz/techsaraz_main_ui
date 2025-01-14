import React, { createContext, useState, useContext } from 'react';
import Toast from '../Components/NotificationBar/Notification';

// Create the Toast context
const ToastContext = createContext();

// Custom Hook to use Toast context
export const useToast = () => {
  return useContext(ToastContext);
};

// ToastProvider component to wrap your application
export const ToastProvider = ({ children }) => {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastType, setToastType] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (type, message) => {
    setToastType(type);
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000); // Auto hide after 3 seconds
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast
        type={toastType}
        message={toastMessage}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </ToastContext.Provider>
  );
};
