import './App.scss'
import './components/ResourceList'
import './assets/ressurser'
import ResourceNav from './components/ResourceList'

function App() {

  return (
    <>

<body>
    <header>
        <nav id="resourceNav">
            <ResourceNav />
        </nav>
        <div id="resourceContent">
            
        </div>
    </header>

    <script src="ressurser.js"></script>
    <script src="javascript.js"></script>
</body>

    </>
  )
}

export default App
