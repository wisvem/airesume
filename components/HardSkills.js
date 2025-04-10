import React, { useState } from 'react';
import useResumeStore from '../stores/useResumeStore';

const HardSkills = () => {
  const [newSkill, setNewSkill] = useState('');
  const { resumeData, setHardSkills } = useResumeStore();

  const addSkill = () => {
    if (newSkill.trim() !== '') {
      setHardSkills([...resumeData.hardSkills, newSkill]);
      setNewSkill('');
    }
  };

  const removeSkill = (index) => {
    const updatedSkills = [...resumeData.hardSkills];
    updatedSkills.splice(index, 1);
    setHardSkills(updatedSkills);
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
