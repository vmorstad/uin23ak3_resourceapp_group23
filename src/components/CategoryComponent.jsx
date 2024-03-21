import React from "react";
import resources from "../assets/ressurser.js";
import { Link } from "react-router-dom";

export default function CategoryComponent({ currentCategory, setCurrentCategory }) {
  const uniqueTags = [];

  resources.forEach((category) => {
    if (uniqueTags.indexOf(category.category) === -1) {
      uniqueTags.push(category.category);
    }
  });
  return (
    <>
      <nav>
        <div>
          <ul>
            {uniqueTags.map((category) => (
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