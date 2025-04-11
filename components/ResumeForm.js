import React, { useState } from "react";
import BasicInfo from "./BasicInfo";
import SoftSkills from "./SoftSkills";
import HardSkills from "./HardSkills";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import ResumePreview from "./ResumePreview";
import useResumeStore from "../stores/useResumeStore";
import "../styles/ResumeForm.css";

const ResumeForm = () => {
  const { resetToInitialData } = useResumeStore();
  const [activeSection, setActiveSection] = useState('basicInfo');

  const sections = [
    { id: 'basicInfo', label: 'Profile', icon: '👤' },
    { id: 'workExperience', label: 'Work', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'hardSkills', label: 'Hard Skills', icon: '⚙️' },
    { id: 'softSkills', label: 'Soft Skills', icon: '🤝' }
  ];

  return (
    <div className="resume-form">
      <div className="sidebar">
        <nav className="sidebar-nav">
          {sections.map(section => (
            <button
              key={section.id}
              className={activeSection === section.id ? 'active' : ''}
              onClick={() => setActiveSection(section.id)}
            >
              {section.icon}
              <span>{section.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="input-components">
        <div className="header">
          <h1>Airesume</h1>
          <button onClick={resetToInitialData} className="reset-button">
            Reset to Sample Data
          </button>
        </div>
        {activeSection === 'basicInfo' && <BasicInfo />}
        {activeSection === 'workExperience' && <WorkExperience />}
        {activeSection === 'education' && <Education />}
        {activeSection === 'hardSkills' && <HardSkills />}
        {activeSection === 'softSkills' && <SoftSkills />}
      </div>
      <div className="preview">
        <ResumePreview />
      </div>
    </div>
  );
};

export default ResumeForm;
