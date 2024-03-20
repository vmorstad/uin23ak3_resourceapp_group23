import React, { useState } from "react";
import Content from "./ContentComponent";
import CategoryComponent from "./CategoryComponent";

export default function Layout({ children }) {
  const [activeTag, setActiveTag] = useState("html");

  return (
    <>
      <CategoryComponent activeTag={activeTag} setActiveTag={setActiveTag} />
      <Content activeTab={activeTag}>{children}</Content>
    </>
  );
}