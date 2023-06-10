import React, { useState } from 'react';

const SoftSkills = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  const removeSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
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
        {skills.map((skill, index) => (
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
