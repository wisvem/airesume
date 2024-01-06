import React, { useState } from "react";
import BasicInfo from "./BasicInfo";
import SoftSkills from "./SoftSkills";
import HardSkills from "./HardSkills";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import ResumePreview from "./ResumePreview";
import "../styles/ResumeForm.css";

const ResumeForm = () => {
  const [resumeData, setResumeData] = useState({
    basicInfo: {},
    softSkills: [],
    hardSkills: [],
    experiences: [],
    educations: [],
  });

  return (
    <div className="resume-form">
      <div className="input-components">
        <h1>Airesume</h1>
        <BasicInfo setResumeData={setResumeData} resumeData={resumeData} />
        <SoftSkills setResumeData={setResumeData} resumeData={resumeData} />
        <HardSkills setResumeData={setResumeData} resumeData={resumeData} />
        <WorkExperience setResumeData={setResumeData} resumeData={resumeData} />
        <Education setResumeData={setResumeData} resumeData={resumeData} />
      </div>
      <div className="preview">
        <ResumePreview resumeData={resumeData} />
      </div>
    </div>
  );
};

export default ResumeForm;
