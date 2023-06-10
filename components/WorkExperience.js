import React, { useState } from 'react';

const WorkExperience = () => {
  const [experiences, setExperiences] = useState([]);
  const [newExperience, setNewExperience] = useState({
    company: '',
    position: '',
    description: '',
    startDate: '',
    endDate: '',
    isCurrent: false,
  });

  const addExperience = () => {
    if (newExperience.company.trim() !== '' && newExperience.position.trim() !== '') {
      setExperiences([...experiences, newExperience]);
      setNewExperience({
        company: '',
        position: '',
        description: '',
        startDate: '',
        endDate: '',
        isCurrent: false,
      });
    }
  };

  const removeExperience = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };

  const handleExperienceChange = (e, index) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setExperiences((prevExperiences) =>
        prevExperiences.map((experience, i) =>
          i === index ? { ...experience, [name]: checked } : experience
        )
      );
    } else {
      setExperiences((prevExperiences) =>
        prevExperiences.map((experience, i) =>
          i === index ? { ...experience, [name]: value } : experience
        )
      );
    }
  };

  const handleNewExperienceChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setNewExperience((prevExperience) => ({ ...prevExperience, [name]: checked }));
    } else {
      setNewExperience((prevExperience) => ({ ...prevExperience, [name]: value }));
    }
  };

  const handleMoveExperienceUp = (index) => {
    if (index > 0) {
      const updatedExperiences = [...experiences];
      const currentExperience = updatedExperiences[index];
      updatedExperiences[index] = updatedExperiences[index - 1];
      updatedExperiences[index - 1] = currentExperience;
      setExperiences(updatedExperiences);
    }
  };

  const handleMoveExperienceDown = (index) => {
    if (index < experiences.length - 1) {
      const updatedExperiences = [...experiences];
      const currentExperience = updatedExperiences[index];
      updatedExperiences[index] = updatedExperiences[index + 1];
      updatedExperiences[index + 1] = currentExperience;
      setExperiences(updatedExperiences);
    }
  };

  return (
    <div>
      <h2>Work Experience</h2>
      <div>
        <input
          type="text"
          name="company"
          value={newExperience.company}
          onChange={handleNewExperienceChange}
          placeholder="Company"
        />
        <input
          type="text"
          name="position"
          value={newExperience.position}
          onChange={handleNewExperienceChange}
          placeholder="Position"
        />
        <textarea
          name="description"
          value={newExperience.description}
          onChange={handleNewExperienceChange}
          placeholder="Description"
        />
        <input
          type="month"
          name="startDate"
          value={newExperience.startDate}
          onChange={handleNewExperienceChange}
          placeholder="Start Date"
        />
        {!newExperience.isCurrent && (
          <input
            type="month"
            name="endDate"
            value={newExperience.endDate}
            onChange={handleNewExperienceChange}
            placeholder="End Date"
            disabled={newExperience.isCurrent}
          />
        )}
        <label>
          <input
            type="checkbox"
            name="isCurrent"
            checked={newExperience.isCurrent}
            onChange={handleNewExperienceChange}
          />
          Currently working here
        </label>
        <button onClick={addExperience}>Add Experience</button>
      </div>
      {experiences.map((experience, index) => (
        <div key={index}>
          <input
            type="text"
            name="company"
            value={experience.company}
            onChange={(e) => handleExperienceChange(e, index)}
            placeholder="Company"
          />
          <input
            type="text"
            name="position"
            value={experience.position}
            onChange={(e) => handleExperienceChange(e, index)}
            placeholder="Position"
          />
          <textarea
            name="description"
            value={experience.description}
            onChange={(e) => handleExperienceChange(e, index)}
            placeholder="Description"
          />
          <input
            type="month"
            name="startDate"
            value={experience.startDate}
            onChange={(e) => handleExperienceChange(e, index)}
            placeholder="Start Date"
          />
          {!experience.isCurrent && (
            <input
              type="month"
              name="endDate"
              value={experience.endDate}
              onChange={(e) => handleExperienceChange(e, index)}
              placeholder="End Date"
              disabled={experience.isCurrent}
            />
          )}
          <label>
            <input
              type="checkbox"
              name="isCurrent"
              checked={experience.isCurrent}
              onChange={(e) => handleExperienceChange(e, index)}
            />
            Currently working here
          </label>
          <button onClick={() => removeExperience(index)}>Remove Experience</button>
          <button onClick={() => handleMoveExperienceUp(index)}>Move Up</button>
          <button onClick={() => handleMoveExperienceDown(index)}>Move Down</button>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
