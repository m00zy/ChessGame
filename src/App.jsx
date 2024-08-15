import './App.css'
import ChessBoard from './components/ChessBoard'
import Title from './components/Title'

function App() {
  return (
    <div className='ChessGame'>
      <Title />
      <ChessBoard />
    </div>
  )
}

export default App;