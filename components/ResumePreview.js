import React from 'react';

const ResumePreview = ({ resumeData }) => {
  const { basicInfo, softSkills, hardSkills, experiences } = resumeData;

  return (
    <div>
      <h2>Resume Preview</h2>
      <h3>Basic Info</h3>
      <p>First Name: {basicInfo.firstName}</p>
      <p>Last Name: {basicInfo.lastName}</p>
      <p>Headline: {basicInfo.headline}</p>
      <p>Address: {basicInfo.address}</p>
      <p>Phone: {basicInfo.phone}</p>
      <p>Email: {basicInfo.email}</p>
      <p>Location: {basicInfo.location}</p>
      <p>Summary: {basicInfo.summary}</p>

      <h3>Soft Skills</h3>
      <ul>
        {softSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>Hard Skills</h3>
      <ul>
        {hardSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>Work Experience</h3>
      {experiences.map((experience, index) => (
        <div key={index}>
          <p>Company: {experience.company}</p>
          <p>Position: {experience.position}</p>
          <p>Description: {experience.description}</p>
          <p>Start Date: {experience.startDate}</p>
          <p>End Date: {experience.endDate}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ResumePreview;
