import React from "react";
import "../styles/ResumePreview.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocation,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { formatDateRange } from "../utils/dateFormatter";

const ResumePreview = ({ resumeData }) => {
  const { basicInfo, softSkills, hardSkills, experiences, educations } =
    resumeData;

  return (
    <div className="resume-preview">
      <h2 className="center">Preview</h2>
      <h1 className="name">
        {basicInfo.firstName} {basicInfo.lastName}
      </h1>
      <p className="headline">{basicInfo.headline}</p>
      <p className="summary">{basicInfo.summary}</p>
      <div className="container">
        <div className="left-side">
          {experiences.length > 0 && (
            <div>
              <h3>Work Experience</h3>
              {experiences.map((experience, index) => (
                <div key={index}>
                  {experience.position && experience.company && (
                    <p className="position">
                      {experience.position}, {experience.company}
                    </p>
                  )}
                  <p className="date">
                    {experience.location}
                    {", "}
                    {formatDateRange(
                      experience.startDate,
                      experience.endDate,
                      experience.ongoing
                    )}
                  </p>
                  {experience.description && (
                    <p className="description">{experience.description}</p>
                  )}
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
                  {education.description && (
                    <p>Description: {education.description}</p>
                  )}
                  {education.startDate && (
                    <p>Start Date: {education.startDate}</p>
                  )}
                  {education.endDate && <p>End Date: {education.endDate}</p>}
                  {education.ongoing && <p>Ongoing{education.ongoing}</p>}
                  <hr />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="right-side">
          {basicInfo.location && (
            <p>
              <FontAwesomeIcon icon={faLocation} />: {basicInfo.address}
            </p>
          )}
          {basicInfo.phone && (
            <p>
              <FontAwesomeIcon icon={faPhone} />:{" "}
              <a href={`tel:${basicInfo.phone}`}>{basicInfo.phone}</a>
            </p>
          )}
          {basicInfo.email && (
            <p>
              <FontAwesomeIcon icon={faEnvelope} />:{" "}
              <a href={`mailto:${basicInfo.email}`}>{basicInfo.email}</a>
            </p>
          )}
          {basicInfo.linkedin && (
            <p>
              <FontAwesomeIcon icon={faLinkedin} />:{" "}
              <a
                href={`https://linkedin.com/in/${basicInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {basicInfo.linkedin}
              </a>
            </p>
          )}
          {basicInfo.github && (
            <p>
              <FontAwesomeIcon icon={faGithub} />:{" "}
              <a
                href={`https://github.com/${basicInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {basicInfo.github}
              </a>
            </p>
          )}
          {softSkills.length > 0 && (
            <div className="skill-container">
              <h3>Soft Skills</h3>
              {softSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  {skill}
                </div>
              ))}
            </div>
          )}
          {hardSkills.length > 0 && (
            <div className="skill-container">
              <h3>Hard Skills</h3>
              {hardSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  {skill}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
