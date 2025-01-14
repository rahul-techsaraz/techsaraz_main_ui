import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigation = useNavigate();
  return (
    <div class="error-page">
    <div class="iron-man">
      </div>
      
      <div class="notify">
        <h3>404!</h3>
        <p>The page you're looking for was not found.</p>
        <button onClick={() => navigation('/')}>Go Back!</button>
      </div>
    </div>
  )
}

export default ErrorPage