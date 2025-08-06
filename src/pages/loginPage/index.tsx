import React from 'react';
import LoginForm from '../../components/LoginForm';
import './index.css'

const LoginPage: React.FC = () => {
  return (
    <div className='login-page-container'>
      <div className='login-form'>
        <h2 style={{ textAlign: 'center' }}>Giriş Yap</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
