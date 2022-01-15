import './App.css'
import './styles/main.scss'

function App() {
  return (
    <div className="App">
      {/* modules */}
      <div className="buttonGroup">
        <div className="prevBtn" aria-label="이전 배너로 넘기기">
          <img src="/assets/icons/arrow.svg" alt="arrow-left" />
        </div>
        <div className="nextBtn" aria-label="다음 배너로 넘기기">
          <img src="/assets/icons/arrow.svg" alt="arrow-right" />
        </div>
      </div>
    </div>
  )
}

export default App
