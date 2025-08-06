import React from 'react'
import './index.css'
import SignupForm from '../../components/SignupForm';

const SignupPage: React.FC = () => {
  return (
    <div className='login-page-container'>
      <div className='login-form'>
        <h2 style={{ textAlign: 'center' }}>Giriş Yap</h2>
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
