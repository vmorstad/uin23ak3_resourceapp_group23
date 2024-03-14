import React from 'react';
import resources from '../assets/ressurser'; // Importing the resources data

function CategoryComponent({ onSelectCategory }) {
  const categories = Array.from(new Set(resources.map(resource => resource.category))); // Extracting unique categories

  return (
      <div>
        <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => onSelectCategory(category)}>
            {category}
          </li>
        ))}
        </ul>
      </div>
  );
}

export default CategoryComponent;
