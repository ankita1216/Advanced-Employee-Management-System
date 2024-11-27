// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import fullWidthImage from '../assets/background.png'; // Make sure this path matches your image

// Styled components for the home page
const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  color: #333333;
`;

// Top navigation bar (full color)
const Navbar = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #130052; /* Full color background (dark blue/gray) */
  color: #ffffff;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

// Left section of the navbar (Logo)
const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
`;

// Middle section of the navbar (Links)
const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  flex-grow: 1;
  justify-content: center;
`;

const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #34495e; /* Slightly lighter color on hover */
  }
`;

// Right section of the navbar (Login/Signup buttons)
const NavButton = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled(Link)`
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.8);
  color: #333333;
  border: 2px solid #333333;
  border-radius: 20px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background-color: #333333;
    color: #ffffff;
  }
`;

const FullWidthImage = styled.div`
  width: 100%;
  height: 600px; /* Set the height to 600px */
  background: url(${fullWidthImage}) center/cover no-repeat;
  position: relative;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  margin-top: 60px; /* Offset for the fixed navbar */
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
  gap: 20px;
  max-width: 900px;
  padding: 20px;
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 20px;
  width: 250px;
  color: #333333;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333333;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #666666;
`;

const Home = () => {
  return (
    <HomePage>
      <Navbar>
        {/* Logo section */}
        <Logo>EMS</Logo>

        {/* NavLinks (About, Contact, FAQ) */}
        <NavLinks>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
        </NavLinks>

        {/* NavButton (Login/Signup) */}
        <NavButton>
          <Button to="/login">Login</Button>
          <Button to="/signup">Sign Up</Button>
        </NavButton>
      </Navbar>
      <FullWidthImage>
        {/* You can add any content that will go over the image if necessary */}
      </FullWidthImage>
      <FeaturesContainer>
        <FeatureCard>
          <FeatureTitle>Employee Records</FeatureTitle>
          <FeatureDescription>Maintain detailed records of all employees, including personal and job-related information.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Attendance Tracking</FeatureTitle>
          <FeatureDescription>Monitor employee attendance, manage leaves, and track work hours efficiently.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Performance Reviews</FeatureTitle>
          <FeatureDescription>Conduct regular performance reviews, set goals, and provide feedback.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Payroll Management</FeatureTitle>
          <FeatureDescription>Automate payroll calculations and manage salaries with ease.</FeatureDescription>
        </FeatureCard>
      </FeaturesContainer>
    </HomePage>
  );
};

export default Home;
