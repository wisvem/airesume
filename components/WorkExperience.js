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

const WorkExperience = () => {
  const [showNewExperienceForm, setShowNewExperienceForm] = useState(false);
  const { resumeData, setWorkExperience } = useResumeStore();
  const lastExperienceRef = useRef(null);

  const [newExperience, setNewExperience] = useState({
    company: "",
    position: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
    ongoing: false,
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
    setNewExperience({
      ...newExperience,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAddExperience = () => {
    const blankExperience = {
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
      ongoing: false,
    };
    
    const updatedExperiences = [...resumeData.workExperience, blankExperience];
    setWorkExperience(updatedExperiences);
    setNewExperience(blankExperience);

    setTimeout(() => {
      lastExperienceRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 0);
  };

  const handleEditExperience = (index, field, value) => {
    const updatedExperiences = [...resumeData.workExperience];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [field]: value,
    };
    setWorkExperience(updatedExperiences);
  };

  const handleRemoveExperience = (index) => {
    const updatedExperiences = [...resumeData.workExperience];
    updatedExperiences.splice(index, 1);
    setWorkExperience(updatedExperiences);
  };

  const handleMoveExperience = (index, direction) => {
    if (
      (direction === "up" && index > 0) ||
      (direction === "down" && index < resumeData.workExperience.length - 1)
    ) {
      const updatedExperiences = [...resumeData.workExperience];
      const temp = updatedExperiences[index];
      updatedExperiences[index] = updatedExperiences[index + (direction === "up" ? -1 : 1)];
      updatedExperiences[index + (direction === "up" ? -1 : 1)] = temp;
      setWorkExperience(updatedExperiences);
    }
  };

  const handleDuplicateExperience = (index) => {
    const experienceToDuplicate = resumeData.workExperience[index];
    const duplicatedExperience = {
      ...experienceToDuplicate,
      startDate: "",
      endDate: "",
      ongoing: false,
    };
    const updatedExperiences = [...resumeData.workExperience];
    updatedExperiences.splice(index + 1, 0, duplicatedExperience);
    setWorkExperience(updatedExperiences);
  };

  return (
    <div className="form-section">
      <div className="section-header">
        <h2>Work Experience</h2>
        <button
          className="add-button"
          onClick={handleAddExperience}
          title="Add new work experience"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="input-group">
        {resumeData.workExperience.map((exp, index) => (
          <div 
            key={index} 
            className="experience-item"
            ref={index === resumeData.workExperience.length - 1 ? lastExperienceRef : null}
          >
            <div className="experience-header">
              <h3>{exp.position || "New Experience"} {exp.company && `at ${exp.company}`}</h3>
              <div className="experience-actions">
                <button
                  title="Move up"
                  onClick={() => handleMoveExperience(index, "up")}
                >
                  <FontAwesomeIcon icon={faArrowUp} />
                </button>
                <button
                  title="Move down"
                  onClick={() => handleMoveExperience(index, "down")}
                >
                  <FontAwesomeIcon icon={faArrowDown} />
                </button>
                <button
                  title="Duplicate this experience"
                  onClick={() => handleDuplicateExperience(index)}
                  className="duplicate-button"
                >
                  <FontAwesomeIcon icon={faCopy} />
                </button>
                <button
                  title="Remove experience"
                  onClick={() => handleRemoveExperience(index)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
            <div className="input-group">
              <div className="input-field">
                <label>Company</label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => handleEditExperience(index, "company", e.target.value)}
                  placeholder="Company name"
                />
              </div>
              <div className="input-field">
                <label>Position</label>
                <input
                  type="text"
                  value={exp.position}
                  onChange={(e) => handleEditExperience(index, "position", e.target.value)}
                  placeholder="Your position"
                />
              </div>
              <div className="input-field">
                <label>Location</label>
                <input
                  type="text"
                  value={exp.location}
                  onChange={(e) => handleEditExperience(index, "location", e.target.value)}
                  placeholder="City, Country"
                />
              </div>
              <div className="date-fields">
                <div className="input-field">
                  <label>Start Date</label>
                  <input
                    type="month"
                    value={exp.startDate ? formatDateForInput(exp.startDate) : ""}
                    onChange={(e) => handleEditExperience(index, "startDate", e.target.value)}
                  />
                </div>
                <div className="input-field">
                  <label>End Date</label>
                  <input
                    type="month"
                    value={exp.endDate ? formatDateForInput(exp.endDate) : ""}
                    onChange={(e) => handleEditExperience(index, "endDate", e.target.value)}
                    disabled={exp.ongoing}
                  />
                </div>
              </div>
              <div className="input-field">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={exp.ongoing}
                    onChange={(e) => handleEditExperience(index, "ongoing", e.target.checked)}
                  />
                  Currently working here
                </label>
              </div>
              <div className="input-field">
                <label>Description</label>
                <textarea
                  value={exp.description}
                  onChange={(e) => handleEditExperience(index, "description", e.target.value)}
                  placeholder="Describe your role and achievements"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
