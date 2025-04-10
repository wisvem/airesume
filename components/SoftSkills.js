import React, { useState } from 'react';
import useResumeStore from '../stores/useResumeStore';

const SoftSkills = () => {
  const [newSkill, setNewSkill] = useState('');
  const { resumeData, setSoftSkills } = useResumeStore();

  const addSkill = () => {
    if (newSkill.trim() !== '') {
      setSoftSkills([...resumeData.softSkills, newSkill]);
      setNewSkill('');
    }
  };

  const removeSkill = (index) => {
    const updatedSkills = [...resumeData.softSkills];
    updatedSkills.splice(index, 1);
    setSoftSkills(updatedSkills);
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
