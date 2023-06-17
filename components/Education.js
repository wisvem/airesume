import React, { useState } from 'react';

const Education = ({ setResumeData, resumeData }) => {
  const [newEducation, setNewEducation] = useState({
    school: '',
    degree: '',
    description: '',
    startDate: '',
    endDate: '',
    ongoing: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setNewEducation((prevEducation) => ({
        ...prevEducation,
        [name]: checked
      }));
    } else {
      setNewEducation((prevEducation) => ({
        ...prevEducation,
        [name]: value
      }));
    }
  };

  const handleInputChangeEdit = (e, index) => {
    const { name, value, type, checked } = e.target;
    const updatedEducations = [...resumeData.educations];
    if (type === 'checkbox') {
      updatedEducations[index][name] = checked;
    } else {
      updatedEducations[index][name] = value;
    }
    setResumeData((prevResumeData) => ({
      ...prevResumeData,
      educations: updatedEducations
    }));
  };

  const handleAddEducation = () => {
    if (newEducation.school.trim() !== '' && newEducation.degree.trim() !== '') {
      const updatedEducations = [...resumeData.educations, newEducation];
      setResumeData((prevResumeData) => ({
        ...prevResumeData,
        educations: updatedEducations
      }));
      setNewEducation({
        school: '',
        degree: '',
        description: '',
        startDate: '',
        endDate: '',
        ongoing: false
      });
    }
  };

  const handleRemoveEducation = (index) => {
    const updatedEducations = [...resumeData.educations];
    updatedEducations.splice(index, 1);
    setResumeData((prevResumeData) => ({
      ...prevResumeData,
      educations: updatedEducations
    }));
  };

  const handleMoveUp = (index) => {
    if (index > 0) {
      const updatedEducations = [...resumeData.educations];
      [updatedEducations[index], updatedEducations[index - 1]] = [updatedEducations[index - 1], updatedEducations[index]];
      setResumeData((prevResumeData) => ({
        ...prevResumeData,
        educations: updatedEducations
      }));
    }
  };

  const handleMoveDown = (index) => {
    if (index < resumeData.educations.length - 1) {
      const updatedEducations = [...resumeData.educations];
      [updatedEducations[index], updatedEducations[index + 1]] = [updatedEducations[index + 1], updatedEducations[index]];
      setResumeData((prevResumeData) => ({
        ...prevResumeData,
        educations: updatedEducations
      }));
    }
  };

  return (
    <div>
      <h2>Education</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="school">School:</label>
        <input type="text" id="school" name="school" value={newEducation.school} onChange={handleInputChange} />

        <label htmlFor="degree">Degree:</label>
        <input type="text" id="degree" name="degree" value={newEducation.degree} onChange={handleInputChange} />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={newEducation.description} onChange={handleInputChange}></textarea>

        <label htmlFor="startDate">Start Date:</label>
        <input type="month" id="startDate" name="startDate" value={newEducation.startDate} onChange={handleInputChange} />

        <label htmlFor="endDate">End Date:</label>
        <input
          type="month"
          id="endDate"
          name="endDate"
          value={newEducation.endDate}
          onChange={handleInputChange}
          disabled={newEducation.ongoing}
        />

        <label htmlFor="ongoing">Ongoing:</label>
        <input
          type="checkbox"
          id="ongoing"
          name="ongoing"
          checked={newEducation.ongoing}
          onChange={handleInputChange}
        />

        <button onClick={handleAddEducation}>Add Education</button>
      </form>

      {/* <h3>Education:</h3> */}
      {resumeData.educations.map((education, index) => (
        <div key={index}>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor={`school-${index}`}>School:</label>
            <input
              type="text"
              id={`school-${index}`}
              name="school"
              value={education.school}
              onChange={(e) => handleInputChangeEdit(e, index)}
            />

            <label htmlFor={`degree-${index}`}>Degree:</label>
            <input
              type="text"
              id={`degree-${index}`}
              name="degree"
              value={education.degree}
              onChange={(e) => handleInputChangeEdit(e, index)}
            />

            <label htmlFor={`description-${index}`}>Description:</label>
            <textarea
              id={`description-${index}`}
              name="description"
              value={education.description}
              onChange={(e) => handleInputChangeEdit(e, index)}
            ></textarea>

            <label htmlFor={`startDate-${index}`}>Start Date:</label>
            <input
              type="month"
              id={`startDate-${index}`}
              name="startDate"
              value={education.startDate}
              onChange={(e) => handleInputChangeEdit(e, index)}
            />

            <label htmlFor={`endDate-${index}`}>End Date:</label>
            <input
              type="month"
              id={`endDate-${index}`}
              name="endDate"
              value={education.endDate}
              onChange={(e) => handleInputChangeEdit(e, index)}
              disabled={education.ongoing}
            />

            <label htmlFor={`ongoing-${index}`}>Ongoing:</label>
            <input
              type="checkbox"
              id={`ongoing-${index}`}
              name="ongoing"
              checked={education.ongoing}
              onChange={(e) => handleInputChangeEdit(e, index)}
            />

            <button onClick={() => handleRemoveEducation(index)}>Remove</button>
            <button onClick={() => handleMoveUp(index)}>Move Up</button>
            <button onClick={() => handleMoveDown(index)}>Move Down</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default Education;
