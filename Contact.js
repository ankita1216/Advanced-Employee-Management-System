// src/pages/Contact.js
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to right, #6a11cb, #2575fc);
  min-height: 100vh;
  color: #ffffff;
`;

const Header = styled.h1`
  font-size: 3rem;
  margin-top: 40px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  margin: 40px 20px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
`;

const InfoSection = styled.div`
  flex: 1;
  background: linear-gradient(to bottom, #2575fc, #6a11cb);
  color: #ffffff;
  padding: 40px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  @media (max-width: 768px) {
    border-radius: 20px 20px 0 0;
  }
`;

const InfoTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const InfoText = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const InfoContact = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

const FormSection = styled.div`
  flex: 2;
  padding: 40px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 15px;
  font-size: 1rem;
  border: 1px solid #cccccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #6a11cb;
  }
`;

const TextArea = styled.textarea`
  padding: 15px;
  font-size: 1rem;
  border: 1px solid #cccccc;
  border-radius: 5px;
  outline: none;
  resize: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #6a11cb;
  }
`;

const SubmitButton = styled.button`
  padding: 15px;
  font-size: 1rem;
  background: linear-gradient(to right, #6a11cb, #2575fc);
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background: linear-gradient(to right, #2575fc, #6a11cb);
  }
`;

const SuccessMessage = styled.p`
  margin-top: 20px;
  color: #28a745;
  font-weight: bold;
  text-align: center;
`;

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSuccessMessage('Thank you for reaching out! We’ll respond shortly.');
      setForm({ name: '', email: '', message: '' });
    } else {
      setSuccessMessage('Please complete all fields.');
    }
  };

  return (
    <PageContainer>
      <Header>Contact Us</Header>
      <ContentWrapper>
        {/* Information Section */}
        <InfoSection>
          <InfoTitle>Get in Touch</InfoTitle>
          <InfoText>
            We're here to help! Whether you have questions about our services or need assistance,
            feel free to contact us.
          </InfoText>
          <InfoContact>Email: support@ems.com</InfoContact>
          <InfoContact>Phone: +123 456 7890</InfoContact>
          <InfoContact>Address: 123 Business Lane, Suite 100</InfoContact>
        </InfoSection>

        {/* Form Section */}
        <FormSection>
          <ContactForm onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <TextArea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />
            <SubmitButton type="submit">Send Message</SubmitButton>
          </ContactForm>
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        </FormSection>
      </ContentWrapper>
    </PageContainer>
  );
};

export default Contact;
