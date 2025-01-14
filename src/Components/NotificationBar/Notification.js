
import React, { useState, useEffect } from 'react';
import './Notification.css';

const Toast = ({ type, message, isVisible, onClose }) => {
  const [toastClass, setToastClass] = useState('toast');

  useEffect(() => {
    if (isVisible) {
      setToastClass('toast show');
    } else {
      setToastClass('toast hide');
    }
  }, [isVisible]);

  let toastTypeClass = '';
  switch (type) {
    case 'success':
      toastTypeClass = 'success';
      break;
    case 'warning':
      toastTypeClass = 'warning';
      break;
    case 'error':
      toastTypeClass = 'error';
      break;
    case 'info':
      toastTypeClass = 'info';
      break;
    default:
      toastTypeClass = 'info'; // Default to info if no type is passed
  }

  return (
    <div className={`${toastClass} ${toastTypeClass}`}>
      <span className="message">{message}</span>
      <button className="close-btn" onClick={onClose}>X</button>
    </div>
  );
};

export default Toast;
