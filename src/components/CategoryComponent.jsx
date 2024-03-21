import React from "react";
import resources from "../assets/ressurser.js";
import { Link } from "react-router-dom";

export default function CategoryComponent({ currentCategory, setCurrentCategory }) {
  const uniqueCategory = [];

  resources.forEach((category) => {
    if (uniqueCategory.indexOf(category.category) === -1) {
      uniqueCategory.push(category.category);
    }
  });

  return (
    <>
      <nav>
        <div>
          <ul>
            {uniqueCategory.map((category) => (
              <Link
                to={`/${category}`}
                key={category}
                className={currentCategory === category}
                onClick={() => setCurrentCategory(category)}
              >
                <li>{category}</li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}