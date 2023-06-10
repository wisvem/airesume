import React, { useState } from 'react';

const HardSkills = ({ setResumeData, resumeData }) => {
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (newSkill.trim() !== '') {
      setResumeData((prevData) => ({
        ...prevData,
        hardSkills: [...prevData.hardSkills, newSkill]
      }));
      setNewSkill('');
    }
  };

  const removeSkill = (index) => {
    setResumeData((prevData) => {
      const updatedSkills = [...prevData.hardSkills];
      updatedSkills.splice(index, 1);
      return {
        ...prevData,
        hardSkills: updatedSkills
      };
    });
  };

  const handleSkillChange = (e) => {
    setNewSkill(e.target.value);
  };

  return (
    <div>
      <h2>Hard Skills</h2>
      <div>
        <input type="text" value={newSkill} onChange={handleSkillChange} placeholder="Enter a skill" />
        <button onClick={addSkill}>Add Skill</button>
      </div>
      <ul>
        {resumeData.hardSkills.map((skill, index) => (
          <li key={index}>
            {skill}
            <button onClick={() => removeSkill(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HardSkills;
