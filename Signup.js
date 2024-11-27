// src/pages/SignupPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Full-Height Background Wrapper
const SignupPageWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(135deg, #ff7f50, #ff6a00, #ff1493); /* Bright gradient background */
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4); /* Slight dark overlay */
  z-index: 1;
`;

const SignupCard = styled.div`
  background-color: #ffffff;
  padding: 30px 25px;  /* Reduced padding for a smaller card */
  border-radius: 15px;
  width: 100%;
  max-width: 350px; /* Reduced max-width to make the card smaller */
  text-align: center;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  z-index: 2;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 480px) {
    padding: 20px;
    max-width: 90%; /* Make card width responsive */
  }
`;

const CardTitle = styled.h2`
  font-size: 2.4rem;  /* Slightly smaller title */
  margin-bottom: 20px;
  color: #2c3e50;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 480px) {
    font-size: 2rem; /* Adjust font size for small screens */
  }
`;

const InputField = styled.input`
  width: 90%;
  padding: 10px;
  margin: 12px 0;  /* Reduced margin */
  border: 2px solid #ff1493; /* Bright border color */
  border-radius: 8px;
  font-size: 1.1rem;
  color: #34495e;
  background: #f5f5f5;
  transition: border 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #ff7f50;
    box-shadow: 0 0 8px rgba(255, 127, 80, 0.5); /* Orange glow on focus */
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 1rem; /* Adjust input size for small screens */
  }
`;

const SignupButton = styled.button`
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #ff7f50, #ff1493); /* Gradient background for button */
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 1.3rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: linear-gradient(135deg, #ff1493, #ff7f50); /* Reverse gradient on hover */
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    font-size: 1.1rem; /* Adjust button size for small screens */
  }
`;

const SignInLink = styled.p`
  margin-top: 15px;  /* Reduced margin */
  font-size: 1.1rem;
  color: #7f8c8d;

  a {
    color: #ff7f50;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    font-size: 1rem; /* Adjust link font size for small screens */
  }
`;

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
    } else {
      console.log('Signing up with', { username, email, password });
    }
  };

  return (
    <SignupPageWrapper>
      <Overlay />
      <SignupCard>
        <CardTitle>Sign Up</CardTitle>
        <form onSubmit={handleSignup}>
          <InputField
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <InputField
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <SignupButton type="submit">Sign Up</SignupButton>
        </form>
        <SignInLink>
          Already have an account? <Link to="/login">Log in</Link>
        </SignInLink>
      </SignupCard>
    </SignupPageWrapper>
  );
};

export default SignupPage;
