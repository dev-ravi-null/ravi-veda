import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/User/UserSlice';
import { useNavigate } from 'react-router-dom'; // ✅ import this

const Login = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate(); // ✅ useNavigate

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && phone.length === 10) {
      setStep(2);
      setError('');
    } else {
      setError('Enter valid name and 10-digit phone number');
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const validOtp = phone.slice(-4);
    if (otp === '1212' || otp === validOtp) {
      const userData = { name, phone, isLoggedIn: true };
      dispatch(login(userData));
      alert('Login Successful ✅');
      navigate('/'); // ✅ Redirect to homepage after login
    } else {
      setError('Invalid OTP');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4">{step === 1 ? 'Login' : 'Verify OTP'}</h3>

        {step === 1 && (
          <form onSubmit={handlePhoneSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter 10-digit phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Send OTP</button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleOtpSubmit}>
            <div className="mb-3">
              <label className="form-label">OTP</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">Verify & Login</button>
          </form>
        )}

        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </div>
    </div>
  );
};

export default Login;
  