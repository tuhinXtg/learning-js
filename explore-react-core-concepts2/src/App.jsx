import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './Users'
import Friends from './friends'

function App() {

  function handleClick() {
    alert('Button clicked')
  }
  const handleClick2 = () => {
    alert('Button 2 clicked')
  }

  return (
    <div id='center'>
      <h3>React core concept part 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2

      }>Click 2</button>
    </div>
  )
}

export default App
