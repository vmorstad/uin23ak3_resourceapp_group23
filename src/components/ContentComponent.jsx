import React from 'react';
import resources from '../assets/ressurser'; // Importing the resources data

function getResourcesByCategory(category) {
  console.log('getResourcesByCategory function is being called.')
  return resources.filter(resource => resource.category === category);
}

function ContentComponent({ category }) {
  console.log('ContentComponent function is being called.')
  const categoryResources = getResourcesByCategory(category);

  return (
    <div>
      <h2>{category} Resources</h2>
      <ul>
        {categoryResources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContentComponent;
