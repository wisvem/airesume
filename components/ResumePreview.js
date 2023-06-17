import React from 'react';

const ResumePreview = ({ resumeData }) => {
  const { basicInfo, softSkills, hardSkills, experiences, educations } = resumeData;

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

      {softSkills.length > 0 && (
        <div>
          <h3>Soft Skills</h3>
          <ul>
            {softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}

      {hardSkills.length > 0 && (
        <div>
          <h3>Hard Skills</h3>
          <ul>
            {hardSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}


      {experiences.length > 0 && (
        <div>
          <h3>Work Experience</h3>
          {experiences.map((experience, index) => (
            <div key={index}>
              {experience.company && <p>Company: {experience.company}</p>}
              {experience.position && <p>Position: {experience.position}</p>}
              {experience.description && <p>Description: {experience.description}</p>}
              {experience.startDate && <p>Start Date: {experience.startDate}</p>}
              {experience.endDate && <p>End Date: {experience.endDate}</p>}
              {experience.ongoing && <p>Ongoing{experience.ongoing}</p>}
              <hr />
            </div>
          ))}
        </div>
      )}



      {educations.length > 0 && (
        <div>
          <h3>Education</h3>
          {educations.map((education, index) => (
            <div key={index}>
              {education.school && <p>School: {education.school}</p>}
              {education.degree && <p>Degree: {education.degree}</p>}
              {education.description && <p>Description: {education.description}</p>}
              {education.startDate && <p>Start Date: {education.startDate}</p>}
              {education.endDate && <p>End Date: {education.endDate}</p>}
              {education.ongoing && <p>Ongoing{education.ongoing}</p>}
              <hr />
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default ResumePreview;
