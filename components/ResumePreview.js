import React from 'react';

const ResumePreview = ({ resumeData }) => {
  const { basicInfo, softSkills, hardSkills, experiences, education, certifications, projects } = resumeData;

  return (
    <div>
      <h2>Preview</h2>

      {/* Mostrar los datos ingresados */}
      <h3>Basic Info</h3>
      <p>Name: {basicInfo.name}</p>
      <p>Last Name: {basicInfo.lastName}</p>

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
        </div>
      ))}

      <h3>Education</h3>
      {education.map((edu, index) => (
        <div key={index}>
          <p>Institution: {edu.institution}</p>
          <p>Location: {edu.location}</p>
          <p>Degree: {edu.degree}</p>
          <p>Start Date: {edu.startDate}</p>
          <p>End Date: {edu.endDate}</p>
        </div>
      ))}

      <h3>Certifications</h3>
      {certifications.map((cert, index) => (
        <div key={index}>
          <p>Title: {cert.title}</p>
          <p>Date: {cert.date}</p>
        </div>
      ))}

      <h3>Projects</h3>
      {projects.map((project, index) => (
        <div key={index}>
          <p>Name: {project.name}</p>
          <p>Description: {project.description}</p>
          <p>Start Date: {project.startDate}</p>
          <p>End Date: {project.endDate}</p>
        </div>
      ))}
    </div>
  );
};

export default ResumePreview;
