import GNB from './components/GNB'
import TopCarousel from './components/TopCarousel'

function App() {
  return (
    <div className="App">
      <header className="global-header">
        <GNB />
      </header>

      <main className="Main">
        <TopCarousel />
      </main>
    </div>
  )
}

export default App
