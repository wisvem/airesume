import React, { useState } from 'react';

const WorkExperience = () => {
  const [experiences, setExperiences] = useState([]);
  const [newExperience, setNewExperience] = useState({
    company: '',
    position: '',
    description: '',
    startDate: '',
    endDate: '',
    currentlyWorking: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setNewExperience((prevExperience) => ({
        ...prevExperience,
        [name]: checked
      }));
    } else {
      setNewExperience((prevExperience) => ({
        ...prevExperience,
        [name]: value
      }));
    }
  };

  const handleAddExperience = () => {
    if (newExperience.company.trim() !== '' && newExperience.position.trim() !== '') {
      setExperiences((prevExperiences) => [...prevExperiences, newExperience]);
      setNewExperience({
        company: '',
        position: '',
        description: '',
        startDate: '',
        endDate: '',
        currentlyWorking: false
      });
    }
  };

  const handleRemoveExperience = (index) => {
    setExperiences((prevExperiences) => {
      const updatedExperiences = [...prevExperiences];
      updatedExperiences.splice(index, 1);
      return updatedExperiences;
    });
  };

  const handleMoveUp = (index) => {
    if (index > 0) {
      setExperiences((prevExperiences) => {
        const updatedExperiences = [...prevExperiences];
        [updatedExperiences[index], updatedExperiences[index - 1]] = [updatedExperiences[index - 1], updatedExperiences[index]];
        return updatedExperiences;
      });
    }
  };

  const handleMoveDown = (index) => {
    if (index < experiences.length - 1) {
      setExperiences((prevExperiences) => {
        const updatedExperiences = [...prevExperiences];
        [updatedExperiences[index], updatedExperiences[index + 1]] = [updatedExperiences[index + 1], updatedExperiences[index]];
        return updatedExperiences;
      });
    }
  };

  return (
    <div>
      <h2>Work Experience</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="company">Company:</label>
        <input type="text" id="company" name="company" value={newExperience.company} onChange={handleInputChange} />

        <label htmlFor="position">Position:</label>
        <input type="text" id="position" name="position" value={newExperience.position} onChange={handleInputChange} />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={newExperience.description} onChange={handleInputChange}></textarea>

        <label htmlFor="startDate">Start Date:</label>
        <input type="month" id="startDate" name="startDate" value={newExperience.startDate} onChange={handleInputChange} />

        <label htmlFor="endDate">End Date:</label>
        <input
          type="month"
          id="endDate"
          name="endDate"
          value={newExperience.endDate}
          onChange={handleInputChange}
          disabled={newExperience.currentlyWorking}
        />

        <label htmlFor="currentlyWorking">Currently Working:</label>
        <input
          type="checkbox"
          id="currentlyWorking"
          name="currentlyWorking"
          checked={newExperience.currentlyWorking}
          onChange={handleInputChange}
        />

        <button onClick={handleAddExperience}>Add Experience</button>
      </form>

      <h3>Experiences:</h3>
      {experiences.map((experience, index) => (
        <div key={index}>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor={`company-${index}`}>Company:</label>
            <input
              type="text"
              id={`company-${index}`}
              name="company"
              value={experience.company}
              onChange={(e) => handleInputChangeEdit(e, index)}
            />

            <label htmlFor={`position-${index}`}>Position:</label>
            <input
              type="text"
              id={`position-${index}`}
              name="position"
              value={experience.position}
              onChange={(e) => handleInputChangeEdit(e, index)}
            />

            <label htmlFor={`description-${index}`}>Description:</label>
            <textarea
              id={`description-${index}`}
              name="description"
              value={experience.description}
              onChange={(e) => handleInputChangeEdit(e, index)}
            ></textarea>

            <label htmlFor={`startDate-${index}`}>Start Date:</label>
            <input
              type="month"
              id={`startDate-${index}`}
              name="startDate"
              value={experience.startDate}
              onChange={(e) => handleInputChangeEdit(e, index)}
            />

            <label htmlFor={`endDate-${index}`}>End Date:</label>
            <input
              type="month"
              id={`endDate-${index}`}
              name="endDate"
              value={experience.endDate}
              onChange={(e) => handleInputChangeEdit(e, index)}
              disabled={experience.currentlyWorking}
            />

            <label htmlFor={`currentlyWorking-${index}`}>Currently Working:</label>
            <input
              type="checkbox"
              id={`currentlyWorking-${index}`}
              name="currentlyWorking"
              checked={experience.currentlyWorking}
              onChange={(e) => handleInputChangeEdit(e, index)}
            />

            <button onClick={() => handleRemoveExperience(index)}>Remove</button>
            <button onClick={() => handleMoveUp(index)}>Move Up</button>
            <button onClick={() => handleMoveDown(index)}>Move Down</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
