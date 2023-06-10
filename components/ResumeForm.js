import React, { useState } from 'react';
import BasicInfo from './BasicInfo';
import SoftSkills from './SoftSkills';
import HardSkills from './HardSkills';
import WorkExperience from './WorkExperience';
import ResumePreview from './ResumePreview';

const ResumeForm = () => {
  const [resumeData, setResumeData] = useState({
    basicInfo: {},
    softSkills: [],
    hardSkills: [],
    experiences: [],
  });

  return (
    <div>
      <h1>Airesume</h1>
      <BasicInfo setResumeData={setResumeData} resumeData={resumeData} />
      <SoftSkills setResumeData={setResumeData} resumeData={resumeData} />
      <HardSkills setResumeData={setResumeData} resumeData={resumeData} />
      <WorkExperience setResumeData={setResumeData} resumeData={resumeData} />
      <ResumePreview resumeData={resumeData} />
    </div>
  );
};

export default ResumeForm;
