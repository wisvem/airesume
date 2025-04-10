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
import useResumeStore from "../stores/useResumeStore";

const ResumePreview = () => {
  const { resumeData } = useResumeStore();
  const { basicInfo, softSkills, hardSkills, workExperience, education } = resumeData;

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
          {workExperience.length > 0 && (
            <div>
              <h3>Work Experience</h3>
              {workExperience.map((experience, index) => (
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

          {education.length > 0 && (
            <div>
              <h3>Education</h3>
              {education.map((edu, index) => (
                <div key={index}>
                  {edu.school && <p>School: {edu.school}</p>}
                  {edu.degree && <p>Degree: {edu.degree}</p>}
                  {edu.description && (
                    <p>Description: {edu.description}</p>
                  )}
                  {edu.startDate && (
                    <p>Start Date: {edu.startDate}</p>
                  )}
                  {edu.endDate && <p>End Date: {edu.endDate}</p>}
                  {edu.ongoing && <p>Ongoing{edu.ongoing}</p>}
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
