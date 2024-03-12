import './styles/App.scss'
import './components/CategoryComponent'
import './assets/ressurser'
import CategoryComponent from './components/CategoryComponent'
import ContentComponent from './components/ContentComponent'

function App() {

  return (
      
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
