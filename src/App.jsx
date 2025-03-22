import Summary from './components/Summary.jsx'
import Result from './components/Result.jsx'

function App() {
  return (
    <div className="flex xl:h-screen">
      <div className="w-full overflow-hidden m-auto xl:rounded-xl xl:flex ">
        <Result />
        <Summary />
      </div>
    </div>
  )
}

export default App
