import React, { useState } from 'react';

const EducationInfo = () => {
  const [education, setEducation] = useState([]);
  const [newEducation, setNewEducation] = useState({
    institute: '',
    location: '',
    degree: '',
    startDate: '',
    endDate: '',
    isOngoing: false,
  });

  const addEducation = () => {
    if (newEducation.institute.trim() !== '' && newEducation.degree.trim() !== '') {
      setEducation([...education, newEducation]);
      setNewEducation({
        institute: '',
        location: '',
        degree: '',
        startDate: '',
        endDate: '',
        isOngoing: false,
      });
    }
  };

  const removeEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  const handleEducationChange = (e, index) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setEducation((prevEducation) =>
        prevEducation.map((edu, i) =>
          i === index ? { ...edu, [name]: checked } : edu
        )
      );
    } else {
      setEducation((prevEducation) =>
        prevEducation.map((edu, i) =>
          i === index ? { ...edu, [name]: value } : edu
        )
      );
    }
  };

  const handleNewEducationChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setNewEducation((prevEducation) => ({ ...prevEducation, [name]: checked }));
    } else {
      setNewEducation((prevEducation) => ({ ...prevEducation, [name]: value }));
    }
  };

  const handleMoveEducationUp = (index) => {
    if (index > 0) {
      const updatedEducation = [...education];
      const currentEducation = updatedEducation[index];
      updatedEducation[index] = updatedEducation[index - 1];
      updatedEducation[index - 1] = currentEducation;
      setEducation(updatedEducation);
    }
  };

  const handleMoveEducationDown = (index) => {
    if (index < education.length - 1) {
      const updatedEducation = [...education];
      const currentEducation = updatedEducation[index];
      updatedEducation[index] = updatedEducation[index + 1];
      updatedEducation[index + 1] = currentEducation;
      setEducation(updatedEducation);
    }
  };

  return (
    <div>
      <h2>Education</h2>
      <div>
        <input
          type="text"
          name="institute"
          value={newEducation.institute}
          onChange={handleNewEducationChange}
          placeholder="Institute"
        />
        <input
          type="text"
          name="location"
          value={newEducation.location}
          onChange={handleNewEducationChange}
          placeholder="Location"
        />
        <input
          type="text"
          name="degree"
          value={newEducation.degree}
          onChange={handleNewEducationChange}
          placeholder="Degree"
        />
        <input
          type="month"
          name="startDate"
          value={newEducation.startDate}
          onChange={handleNewEducationChange}
          placeholder="Start Date"
        />
        {!newEducation.isOngoing && (
          <input
            type="month"
            name="endDate"
            value={newEducation.endDate}
            onChange={handleNewEducationChange}
            placeholder="End Date"
            disabled={newEducation.isOngoing}
          />
        )}
        <label>
          <input
            type="checkbox"
            name="isOngoing"
            checked={newEducation.isOngoing}
            onChange={handleNewEducationChange}
          />
          Currently studying here
        </label>
        <button onClick={addEducation}>Add Education</button>
      </div>
      {education.map((edu, index) => (
        <div key={index}>
          <input
            type="text"
            name="institute"
            value={edu.institute}
            onChange={(e) => handleEducationChange(e, index)}
            placeholder="Institute"
          />
          <input
            type="text"
            name="location"
            value={edu.location}
            onChange={(e) => handleEducationChange(e, index)}
            placeholder="Location"
          />
          <input
            type="text"
            name="degree"
            value={edu.degree}
            onChange={(e) => handleEducationChange(e, index)}
            placeholder="Degree"
          />
          <input
            type="month"
            name="startDate"
            value={edu.startDate}
            onChange={(e) => handleEducationChange(e, index)}
            placeholder="Start Date"
          />
          {!edu.isOngoing && (
            <input
              type="month"
              name="endDate"
              value={edu.endDate}
              onChange={(e) => handleEducationChange(e, index)}
              placeholder="End Date"
              disabled={edu.isOngoing}
            />
          )}
          <label>
            <input
              type="checkbox"
              name="isOngoing"
              checked={edu.isOngoing}
              onChange={(e) => handleEducationChange(e, index)}
            />
            Currently studying here
          </label>
          <button onClick={() => removeEducation(index)}>Remove Education</button>
          <button onClick={() => handleMoveEducationUp(index)}>Move Up</button>
          <button onClick={() => handleMoveEducationDown(index)}>Move Down</button>
        </div>
      ))}
    </div>
  );
};

export default EducationInfo;
