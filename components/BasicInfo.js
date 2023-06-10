import React, { useState } from 'react';

const BasicInfo = ({ setResumeData, resumeData }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [headline, setHeadline] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [summary, setSummary] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setResumeData((prevData) => ({
      ...prevData,
      basicInfo: {
        ...prevData.basicInfo,
        firstName: e.target.value
      }
    }));
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setResumeData((prevData) => ({
      ...prevData,
      basicInfo: {
        ...prevData.basicInfo,
        lastName: e.target.value
      }
    }));
  };

  const handleHeadlineChange = (e) => {
    setHeadline(e.target.value);
    setResumeData((prevData) => ({
      ...prevData,
      basicInfo: {
        ...prevData.basicInfo,
        headline: e.target.value
      }
    }));
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    setResumeData((prevData) => ({
      ...prevData,
      basicInfo: {
        ...prevData.basicInfo,
        address: e.target.value
      }
    }));
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setResumeData((prevData) => ({
      ...prevData,
      basicInfo: {
        ...prevData.basicInfo,
        phone: e.target.value
      }
    }));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setResumeData((prevData) => ({
      ...prevData,
      basicInfo: {
        ...prevData.basicInfo,
        email: e.target.value
      }
    }));
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    setResumeData((prevData) => ({
      ...prevData,
      basicInfo: {
        ...prevData.basicInfo,
        location: e.target.value
      }
    }));
  };

  const handleSummaryChange = (e) => {
    setSummary(e.target.value);
    setResumeData((prevData) => ({
      ...prevData,
      basicInfo: {
        ...prevData.basicInfo,
        summary: e.target.value
      }
    }));
  };

  return (
    <div>
      <h2>Basic Information</h2>

      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} />

      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} />

      <label htmlFor="headline">Headline:</label>
      <input type="text" id="headline" value={headline} onChange={handleHeadlineChange} />

      <label htmlFor="address">Address:</label>
      <input type="text" id="address" value={address} onChange={handleAddressChange} />

      <label htmlFor="phone">Phone:</label>
      <input type="text" id="phone" value={phone} onChange={handlePhoneChange} />

      <label htmlFor="email">Email:</label>
      <input type="text" id="email" value={email} onChange={handleEmailChange} />

      <label htmlFor="location">Location:</label>
      <input type="text" id="location" value={location} onChange={handleLocationChange} />

      <label htmlFor="summary">Summary:</label>
      <textarea id="summary" value={summary} onChange={handleSummaryChange}></textarea>
    </div>
  );
};

export default BasicInfo;
