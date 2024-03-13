import React, { useState } from 'react';
import './styles/App.scss'
import './assets/ressurser'
import CategoryComponent from './components/CategoryComponent'
import ContentComponent from './components/ContentComponent'

function App() {
  const [selectedCategory, setSelectedCategory] = useState("html"); // Start med html kategori

  const handleSelectCategory = (category) => {
    setSelectedCategory(category); // Setter den valgte kategorien
  };

  return (
      
    <header>
        <nav id="resourceNav">
            <CategoryComponent onSelectCategory={handleSelectCategory}/>
        </nav>
        <div id="resourceContent">
            <ContentComponent category={selectedCategory}/>
        </div>
    </header>

  )
}


export default App
