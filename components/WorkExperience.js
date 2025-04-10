import React, { useState } from "react";
import useResumeStore from '../stores/useResumeStore';

const WorkExperience = () => {
  const [newExperience, setNewExperience] = useState({
    company: "",
    location: "",
    position: "",
    description: "",
    startDate: "",
    endDate: "",
    ongoing: false,
  });

  const { resumeData, setWorkExperience } = useResumeStore();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setNewExperience((prevExperience) => ({
        ...prevExperience,
        [name]: checked,
      }));
    } else {
      setNewExperience((prevExperience) => ({
        ...prevExperience,
        [name]: value,
      }));
    }
  };

  const handleInputChangeEdit = (e, index) => {
    const { name, value, type, checked } = e.target;
    const updatedExperiences = [...resumeData.workExperience];
    if (type === "checkbox") {
      updatedExperiences[index][name] = checked;
    } else {
      updatedExperiences[index][name] = value;
    }
    setWorkExperience(updatedExperiences);
  };

  const handleAddExperience = () => {
    if (
      newExperience.company.trim() !== "" &&
      newExperience.position.trim() !== ""
    ) {
      const updatedExperiences = [...resumeData.workExperience, newExperience];
      setWorkExperience(updatedExperiences);
      setNewExperience({
        company: "",
        location: "",
        position: "",
        description: "",
        startDate: "",
        endDate: "",
        ongoing: false,
      });
    }
  };

  const handleRemoveExperience = (index) => {
    const updatedExperiences = [...resumeData.workExperience];
    updatedExperiences.splice(index, 1);
    setWorkExperience(updatedExperiences);
  };

  const handleMoveUp = (index) => {
    if (index > 0) {
      const updatedExperiences = [...resumeData.workExperience];
      [updatedExperiences[index], updatedExperiences[index - 1]] = [
        updatedExperiences[index - 1],
        updatedExperiences[index],
      ];
      setWorkExperience(updatedExperiences);
    }
  };

  const handleMoveDown = (index) => {
    if (index < resumeData.workExperience.length - 1) {
      const updatedExperiences = [...resumeData.workExperience];
      [updatedExperiences[index], updatedExperiences[index + 1]] = [
        updatedExperiences[index + 1],
        updatedExperiences[index],
      ];
      setWorkExperience(updatedExperiences);
    }
  };

  return (
    <div>
      <h2>Work Experience</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          name="company"
          value={newExperience.company}
          onChange={handleInputChange}
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={newExperience.location}
          onChange={handleInputChange}
        />

        <label htmlFor="position">Position:</label>
        <input
          type="text"
          id="position"
          name="position"
          value={newExperience.position}
          onChange={handleInputChange}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={newExperience.description}
          onChange={handleInputChange}
        ></textarea>

        <label htmlFor="startDate">Start Date:</label>
        <input
          type="month"
          id="startDate"
          name="startDate"
          value={newExperience.startDate}
          onChange={handleInputChange}
        />

        <label htmlFor="endDate">End Date:</label>
        <input
          type="month"
          id="endDate"
          name="endDate"
          value={newExperience.endDate}
          onChange={handleInputChange}
          disabled={newExperience.ongoing}
        />

        <label htmlFor="ongoing">Ongoing:</label>
        <input
          type="checkbox"
          id="ongoing"
          name="ongoing"
          checked={newExperience.ongoing}
          onChange={handleInputChange}
        />

        <button onClick={handleAddExperience}>Add Experience</button>
      </form>

      {resumeData.workExperience.map((experience, index) => (
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

            <label htmlFor={`location-${index}`}>Location:</label>
            <input
              type="text"
              id={`location-${index}`}
              name="location"
              value={experience.location}
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
              disabled={experience.ongoing}
            />

            <label htmlFor={`ongoing-${index}`}>Ongoing:</label>
            <input
              type="checkbox"
              id={`ongoing-${index}`}
              name="ongoing"
              checked={experience.ongoing}
              onChange={(e) => handleInputChangeEdit(e, index)}
            />

            <button onClick={() => handleRemoveExperience(index)}>
              Remove
            </button>
            <button onClick={() => handleMoveUp(index)}>Move Up</button>
            <button onClick={() => handleMoveDown(index)}>Move Down</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
