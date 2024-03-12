import './App.scss'
import './components/CategoryComponent'
import './assets/ressurser'
import CategoryComponent from './components/CategoryComponent'
import ContentComponent from './components/ContentComponent'

function App() {

  return (
      //fjernet body fra app.jsx, er allerde i index.html body cannot be child
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
