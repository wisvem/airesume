import React from "react";
import useResumeStore from "../stores/useResumeStore";

const BasicInfo = () => {
  const { resumeData, setBasicInfo } = useResumeStore();

  const handleInputChange = (field, value) => {
    setBasicInfo({ [field]: value });
  };

  return (
    <div className="form-section">
      <h2>Profile</h2>
      <div className="input-group">
        <div className="name-fields">
          <div className="input-field">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={resumeData.basicInfo.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={resumeData.basicInfo.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
            />
          </div>
        </div>

        <div className="input-field">
          <label htmlFor="headline">Headline:</label>
          <input
            type="text"
            id="headline"
            value={resumeData.basicInfo.headline}
            onChange={(e) => handleInputChange('headline', e.target.value)}
          />
        </div>

        <div className="input-field">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={resumeData.basicInfo.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
          />
        </div>

        <div className="input-field">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={resumeData.basicInfo.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
          />
        </div>

        <div className="input-field">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={resumeData.basicInfo.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
        </div>

        <div className="social-fields">
          <div className="input-field">
            <label htmlFor="linkedin">LinkedIn username:</label>
            <input
              type="text"
              id="linkedin"
              value={resumeData.basicInfo.linkedin}
              onChange={(e) => handleInputChange('linkedin', e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="github">Github username:</label>
            <input
              type="text"
              id="github"
              value={resumeData.basicInfo.github}
              onChange={(e) => handleInputChange('github', e.target.value)}
            />
          </div>
        </div>

        <div className="input-field">
          <label htmlFor="summary">Summary:</label>
          <textarea
            id="summary"
            value={resumeData.basicInfo.summary}
            onChange={(e) => handleInputChange('summary', e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
