import React, { useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    isOngoing: false,
  });

  const addProject = () => {
    if (newProject.name.trim() !== '' && newProject.description.trim() !== '') {
      setProjects([...projects, newProject]);
      setNewProject({
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        isOngoing: false,
      });
    }
  };

  const removeProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  const handleProjectChange = (e, index) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setProjects((prevProjects) =>
        prevProjects.map((project, i) =>
          i === index ? { ...project, [name]: checked } : project
        )
      );
    } else {
      setProjects((prevProjects) =>
        prevProjects.map((project, i) =>
          i === index ? { ...project, [name]: value } : project
        )
      );
    }
  };

  const handleNewProjectChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setNewProject((prevProject) => ({ ...prevProject, [name]: checked }));
    } else {
      setNewProject((prevProject) => ({ ...prevProject, [name]: value }));
    }
  };

  const handleMoveProjectUp = (index) => {
    if (index > 0) {
      const updatedProjects = [...projects];
      const currentProject = updatedProjects[index];
      updatedProjects[index] = updatedProjects[index - 1];
      updatedProjects[index - 1] = currentProject;
      setProjects(updatedProjects);
    }
  };

  const handleMoveProjectDown = (index) => {
    if (index < projects.length - 1) {
      const updatedProjects = [...projects];
      const currentProject = updatedProjects[index];
      updatedProjects[index] = updatedProjects[index + 1];
      updatedProjects[index + 1] = currentProject;
      setProjects(updatedProjects);
    }
  };

  return (
    <div>
      <h2>Projects</h2>
      <div>
        <input
          type="text"
          name="name"
          value={newProject.name}
          onChange={handleNewProjectChange}
          placeholder="Project Name"
        />
        <input
          type="month"
          name="startDate"
          value={newProject.startDate}
          onChange={handleNewProjectChange}
          placeholder="Start Date"
        />
        {!newProject.isOngoing && (
          <input
            type="month"
            name="endDate"
            value={newProject.endDate}
            onChange={handleNewProjectChange}
            placeholder="End Date"
            disabled={newProject.isOngoing}
          />
        )}
        <label>
          <input
            type="checkbox"
            name="isOngoing"
            checked={newProject.isOngoing}
            onChange={handleNewProjectChange}
          />
          Ongoing
        </label>
        <textarea
          name="description"
          value={newProject.description}
          onChange={handleNewProjectChange}
          placeholder="Description"
        />
        <button onClick={addProject}>Add Project</button>
      </div>
      {projects.map((project, index) => (
        <div key={index}>
          <input
            type="text"
            name="name"
            value={project.name}
            onChange={(e) => handleProjectChange(e, index)}
            placeholder="Project Name"
          />
          <input
            type="month"
            name="startDate"
            value={project.startDate}
            onChange={(e) => handleProjectChange(e, index)}
            placeholder="Start Date"
          />
          {!project.isOngoing && (
            <input
              type="month"
              name="endDate"
              value={project.endDate}
              onChange={(e) => handleProjectChange(e, index)}
              placeholder="End Date"
              disabled={project.isOngoing}
            />
          )}
          <label>
            <input
              type="checkbox"
              name="isOngoing"
              checked={project.isOngoing}
              onChange={(e) => handleProjectChange(e, index)}
            />
            Ongoing
          </label>
          <textarea
            name="description"
            value={project.description}
            onChange={(e) => handleProjectChange(e, index)}
            placeholder="Description"
          />
          <button onClick={() => removeProject(index)}>Remove Project</button>
          <button onClick={() => handleMoveProjectUp(index)}>Move Up</button>
          <button onClick={() => handleMoveProjectDown(index)}>Move Down</button>
        </div>
      ))}
    </div>
  );
};

export default Projects;
