import React from 'react';

function ProjectCard({ link, h3, p }) {
  return (
    <a href={link} target="_blank">
      <div className="division">
        <h2 className="hover">View Porject</h2>
      </div>
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;
