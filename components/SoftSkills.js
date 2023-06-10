import React, { useState } from 'react';

const SoftSkills = ({ setResumeData, resumeData }) => {
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (newSkill.trim() !== '') {
      setResumeData((prevData) => ({
        ...prevData,
        softSkills: [...prevData.softSkills, newSkill]
      }));
      setNewSkill('');
    }
  };

  const removeSkill = (index) => {
    setResumeData((prevData) => {
      const updatedSkills = [...prevData.softSkills];
      updatedSkills.splice(index, 1);
      return {
        ...prevData,
        softSkills: updatedSkills
      };
    });
  };

  const handleSkillChange = (e) => {
    setNewSkill(e.target.value);
  };

  return (
    <div>
      <h2>Soft Skills</h2>
      <div>
        <input type="text" value={newSkill} onChange={handleSkillChange} placeholder="Enter a skill" />
        <button onClick={addSkill}>Add Skill</button>
      </div>
      <ul>
        {resumeData.softSkills.map((skill, index) => (
          <li key={index}>
            {skill}
            <button onClick={() => removeSkill(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoftSkills;
