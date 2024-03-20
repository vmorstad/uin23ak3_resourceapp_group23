import React, { useState } from "react";
import Content from "./ContentComponent";
import Nav from "./CategoryComponent";

export default function Layout({ children }) {
  const [activeTag, setActiveTag] = useState("html");

  return (
    <>
      <Nav activeTag={activeTag} setActiveTag={setActiveTag} />
      <Content activeTab={activeTag}>{children}</Content>
    </>
  );
}