<<<<<<< HEAD
import './styles/App.scss'
import './components/ResourceList'
import './assets/ressurser'
import ResourceNav from './components/ResourceList'
import React from 'react';
=======
import './App.scss'
import './components/CategoryComponent'
import './assets/ressurser'
import CategoryComponent from './components/CategoryComponent'
import ContentComponent from './components/ContentComponent'
>>>>>>> Håvard

function App() {

  return (
<<<<<<< HEAD
    <>
<body>
=======
      //fjernet body fra app.jsx, er allerde i index.html body cannot be child
>>>>>>> Håvard
    <header>
        <nav>
            <CategoryComponent />
        </nav>
        <div id="resourceContent">
            <ContentComponent />
        </div>
    </header>

  )
}


export default App
