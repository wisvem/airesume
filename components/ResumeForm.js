import React, { useState } from 'react';
import BasicInfo from './BasicInfo';
import SoftSkills from './SoftSkills';
import HardSkills from './HardSkills';
import WorkExperience from './WorkExperience';
import EducationInfo from './EducationInfo';
import Certifications from './Certifications';
import Projects from './Projects';
import ResumePreview from './ResumePreview';


const ResumeForm = () => {
  const [resumeData, setResumeData] = useState({
    basicInfo: {},
    softSkills: [],
    hardSkills: [],
    experiences: [],
    education: [],
    certifications: [],
    projects: []
  });

  const updateBasicInfo = (newBasicInfo) => {
    setResumeData((prevResumeData) => ({
      ...prevResumeData,
      basicInfo: newBasicInfo
    }));
  };
  

  return (
    <div>
      <h1>Airesume</h1>

      {/* Componentes anteriores */}
      <BasicInfo updateBasicInfo={updateBasicInfo} />
      <SoftSkills setResumeData={setResumeData} resumeData={resumeData} />
      <HardSkills setResumeData={setResumeData} resumeData={resumeData} />
      <WorkExperience setResumeData={setResumeData} resumeData={resumeData} />
      <EducationInfo setResumeData={setResumeData} resumeData={resumeData} />
      <Certifications setResumeData={setResumeData} resumeData={resumeData} />
      <Projects setResumeData={setResumeData} resumeData={resumeData} />

      {/* Componente de previsualización */}
      <ResumePreview resumeData={resumeData} />
    </div>
  );
};

export default ResumeForm;
