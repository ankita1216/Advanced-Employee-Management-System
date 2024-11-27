// src/pages/LoginPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Full-Height Background Wrapper
const LoginPageWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(135deg, #2980B9, #6DD5FA, #FFFFFF); /* Bright gradient background */
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

const LoginCard = styled.div`
  background-color: #ffffff;
  padding: 40px 30px;
  border-radius: 15px;
  width: 100%;
  max-width: 420px;
  text-align: center;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  z-index: 2;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.3);
  }
`;

const CardTitle = styled.h2`
  font-size: 2.6rem;
  margin-bottom: 25px;
  color: #2c3e50;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const InputField = styled.input`
  width: 92%;
  padding: 15px;
  margin: 15px 0;
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
`;

const LoginButton = styled.button`
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
`;

const SignUpLink = styled.p`
  margin-top: 20px;
  font-size: 1.1rem;
  color: #7f8c8d;

  a {
    color: #ff7f50;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with', { username, password });
  };

  return (
    <LoginPageWrapper>
      <Overlay />
      <LoginCard>
        <CardTitle>Login</CardTitle>
        <form onSubmit={handleLogin}>
          <InputField
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <LoginButton type="submit">Login</LoginButton>
        </form>
        <SignUpLink>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </SignUpLink>
      </LoginCard>
    </LoginPageWrapper>
  );
};

export default LoginPage;
