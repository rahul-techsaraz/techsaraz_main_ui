import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigation = useNavigate();
  return (
    <div className="error-page">
      <div className="iron-man"></div>

      <div className="notify">
        <h3>404!</h3>
        <p>The page you&apos;re looking for was not found.</p>
        <button onClick={() => navigation('/')}>Go Back!</button>
      </div>
    </div>
  );
};

export default ErrorPage;
