import React, { useState, useRef } from "react";
import useResumeStore from '../stores/useResumeStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCopy,
  faArrowUp,
  faArrowDown,
  faTrash,
  faPlus
} from '@fortawesome/free-solid-svg-icons';

const Education = () => {
  const { resumeData, setEducation } = useResumeStore();
  const lastEducationRef = useRef(null);

  const [newEducation, setNewEducation] = useState({
    school: '',
    degree: '',
    description: '',
    startDate: '',
    endDate: '',
    ongoing: false
  });

  const formatDateForInput = (dateString) => {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "";
      return date.toISOString().slice(0, 7);
    } catch (error) {
      console.error("Error formatting date:", error);
      return "";
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewEducation({
      ...newEducation,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAddEducation = () => {
    const blankEducation = {
      school: '',
      degree: '',
      description: '',
      startDate: '',
      endDate: '',
      ongoing: false
    };
    
    const updatedEducation = [...resumeData.education, blankEducation];
    setEducation(updatedEducation);
    setNewEducation(blankEducation);

    setTimeout(() => {
      lastEducationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 0);
  };

  const handleEditEducation = (index, field, value) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value,
    };
    setEducation(updatedEducation);
  };

  const handleRemoveEducation = (index) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  const handleMoveEducation = (index, direction) => {
    if (
      (direction === "up" && index > 0) ||
      (direction === "down" && index < resumeData.education.length - 1)
    ) {
      const updatedEducation = [...resumeData.education];
      const temp = updatedEducation[index];
      updatedEducation[index] = updatedEducation[index + (direction === "up" ? -1 : 1)];
      updatedEducation[index + (direction === "up" ? -1 : 1)] = temp;
      setEducation(updatedEducation);
    }
  };

  const handleDuplicateEducation = (index) => {
    const educationToDuplicate = resumeData.education[index];
    const duplicatedEducation = {
      ...educationToDuplicate,
      startDate: "",
      endDate: "",
      ongoing: false,
    };
    const updatedEducation = [...resumeData.education];
    updatedEducation.splice(index + 1, 0, duplicatedEducation);
    setEducation(updatedEducation);
  };

  return (
    <div className="form-section">
      <div className="section-header">
        <h2>Education</h2>
        <button
          className="add-button"
          onClick={handleAddEducation}
          title="Add new education"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="input-group">
        {resumeData.education.map((edu, index) => (
          <div 
            key={index} 
            className="education-item"
            ref={index === resumeData.education.length - 1 ? lastEducationRef : null}
          >
            <div className="education-header">
              <h3>{edu.degree || "New Education"} {edu.school && `at ${edu.school}`}</h3>
              <div className="education-actions">
                <button
                  title="Move up"
                  onClick={() => handleMoveEducation(index, "up")}
                >
                  <FontAwesomeIcon icon={faArrowUp} />
                </button>
                <button
                  title="Move down"
                  onClick={() => handleMoveEducation(index, "down")}
                >
                  <FontAwesomeIcon icon={faArrowDown} />
                </button>
                <button
                  title="Duplicate this education"
                  onClick={() => handleDuplicateEducation(index)}
                  className="duplicate-button"
                >
                  <FontAwesomeIcon icon={faCopy} />
                </button>
                <button
                  title="Remove education"
                  onClick={() => handleRemoveEducation(index)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
            <div className="input-group">
              <div className="input-field">
                <label>School</label>
                <input
                  type="text"
                  value={edu.school}
                  onChange={(e) => handleEditEducation(index, "school", e.target.value)}
                  placeholder="School name"
                />
              </div>
              <div className="input-field">
                <label>Degree</label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => handleEditEducation(index, "degree", e.target.value)}
                  placeholder="Your degree"
                />
              </div>
              <div className="date-fields">
                <div className="input-field">
                  <label>Start Date</label>
                  <input
                    type="month"
                    value={edu.startDate ? formatDateForInput(edu.startDate) : ""}
                    onChange={(e) => handleEditEducation(index, "startDate", e.target.value)}
                  />
                </div>
                <div className="input-field">
                  <label>End Date</label>
                  <input
                    type="month"
                    value={edu.endDate ? formatDateForInput(edu.endDate) : ""}
                    onChange={(e) => handleEditEducation(index, "endDate", e.target.value)}
                    disabled={edu.ongoing}
                  />
                </div>
              </div>
              <div className="input-field">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={edu.ongoing}
                    onChange={(e) => handleEditEducation(index, "ongoing", e.target.checked)}
                  />
                  Currently studying here
                </label>
              </div>
              <div className="input-field">
                <label>Description</label>
                <textarea
                  value={edu.description}
                  onChange={(e) => handleEditEducation(index, "description", e.target.value)}
                  placeholder="Describe your education and achievements"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
