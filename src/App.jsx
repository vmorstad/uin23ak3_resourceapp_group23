import React from "react";
import { Route, Routes } from "react-router-dom";
import ContentComponent from "./components/Layout";
import Content from "./components/ContentComponent";
import resources from "./assets/ressurser";

function App() {
  return (
    <ContentComponent>
      <Routes>
        <Route path="/html" element={<Content resources={resources} />} />
        <Route path="/css" element={<Content resources={resources} />} />
        <Route path="/javaScript" element={<Content resources={resources} />} />
        <Route path="/react" element={<Content resources={resources} />} />
        <Route path="/headless-CMS" element={<Content resources={resources} />} />
      </Routes>
    </ContentComponent>
  );
}

export default App;