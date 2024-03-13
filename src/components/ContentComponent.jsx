import React from 'react';
import resources from '../assets/ressurser'; // Importing the resources data
import '../styles/App.scss' // la til App.scss for style til <ul>

function ContentComponent({ category }) {

  const filteredResources = resources.filter(resource => resource.category === category);

  return (
    <div>
      <h2>{category.toUpperCase()}</h2>
      <ul class="sources-list">
        {filteredResources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default ContentComponent;
