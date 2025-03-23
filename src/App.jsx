import Summary from './components/Summary.jsx'
import Result from './components/Result.jsx'

function App() {
  return (
    <div className="flex m-auto md:h-screen bg-pale-blue">
      <div className="w-full overflow-hidden m-auto bg-white md:max-w-3xl md:rounded-4xl md:flex">
        <Result />
        <Summary />
      </div>
    </div>
  )
}

export default App
