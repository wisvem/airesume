import React from "react";
import "../styles/ResumePreview.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocation,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
                  {experience.company && <p>Company: {experience.company}</p>}
                  {experience.position && (
                    <p>Position: {experience.position}</p>
                  )}
                  {experience.description && (
                    <p>Description: {experience.description}</p>
                  )}
                  {experience.startDate && (
                    <p>Start Date: {experience.startDate}</p>
                  )}
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
          <p>
            <FontAwesomeIcon icon={faLocation} />: {basicInfo.address}
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} />: {basicInfo.phone}
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />: {basicInfo.email}
          </p>
          <p>
            <FontAwesomeIcon icon={faLinkedin} />: {basicInfo.linkedin}
          </p>

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
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
