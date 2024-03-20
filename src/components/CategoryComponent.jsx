import React, { useState } from "react";
import resources from "../assets/ressurser.js";
import { Link } from "react-router-dom";

export default function Nav({ activeTag, setActiveTag }) {
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
                className={activeTag === category ? "active" : ""}
                onClick={() => setActiveTag(category)}
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