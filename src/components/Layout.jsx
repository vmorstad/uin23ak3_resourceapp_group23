import React, { useState } from "react";
import Content from "./ContentComponent";
import CategoryComponent from "./CategoryComponent";

export default function Layout({ children }) {
  const [currentCatergory, setCurrentCategory] = useState("html");

  return (
    <>
      <CategoryComponent currentCatergory={currentCatergory} setCurrentCategory={setCurrentCategory} />
      <Content currentTab={currentCatergory}>{children}</Content>
    </>
  );
}