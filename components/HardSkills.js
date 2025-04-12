import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import useResumeStore from '../stores/useResumeStore';

const SkillItem = ({ skill, index, moveSkill }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'SKILL',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver, draggedItem }, drop] = useDrop({
    accept: 'SKILL',
    drop: (item) => {
      if (item.index !== index) {
        moveSkill(item.index, index);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      draggedItem: monitor.getItem(),
    }),
  });

  const getDropTargetClass = () => {
    if (!isOver || !draggedItem) return '';
    return draggedItem.index < index ? 'drop-target' : 'drop-target insert-before';
  };

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`skill-item ${isDragging ? 'dragging' : ''} ${getDropTargetClass()}`}
    >
      {skill}
    </div>
  );
};

const SkillsCloud = ({ skills, moveSkill }) => {
  return (
    <div className="skills-cloud">
      {skills.map((skill, index) => (
        <SkillItem
          key={index}
          skill={skill}
          index={index}
          moveSkill={moveSkill}
        />
      ))}
    </div>
  );
};

const HardSkills = () => {
  const { resumeData, setHardSkills } = useResumeStore();

  const handleSkillsChange = (e) => {
    const skills = e.target.value.split(',').map(skill => skill.trim()).filter(skill => skill);
    setHardSkills(skills);
  };

  const getSkillsText = () => {
    return resumeData.hardSkills.join(', ');
  };

  const moveSkill = (fromIndex, toIndex) => {
    const skills = [...resumeData.hardSkills];
    const [movedSkill] = skills.splice(fromIndex, 1);
    skills.splice(toIndex, 0, movedSkill);
    setHardSkills(skills);
  };

  return (
    <div className="form-section">
      <div className="section-header">
        <h2>Hard Skills</h2>
      </div>
      <div className="input-group">
        <div className="input-field">
          <label>Skills (separated by commas)</label>
          <textarea
            value={getSkillsText()}
            onChange={handleSkillsChange}
            placeholder="JavaScript, React, Node.js, etc."
            rows={3}
          />
        </div>
      </div>
      <DndProvider backend={HTML5Backend}>
        <SkillsCloud skills={resumeData.hardSkills} moveSkill={moveSkill} />
      </DndProvider>
    </div>
  );
};

export default HardSkills;
