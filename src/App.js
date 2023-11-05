import { useState, useEffect } from "react";
import './app.css'
import Coding from './components/coding'
import Alphatbet from './components/alphabet'
import WordCombo from "./components/wordcombo";
import FinalPuzzle from "./components/final"

function App() {

  const [display, setDisplay] = useState(0)

  const handleDisplay = (i) => {
    if(display == i){
      setDisplay(0)
    } else {
      setDisplay(i)
    }
  }
  
  return (
    <div>
      <h1> Birthday Puzzle Hunt </h1>
      <p> Another year older, another year wiser. </p>
      <p> 
        The answer to these puzzles can be integers, words, or letters.
        Unless explicitly stated, all answers should be in lowercase. 
      </p>
      <p> Guessing is permitted. Have fun. </p>

      <button onClick = {() => handleDisplay(1)}> Puzzle 1 </button>
      <button onClick = {() => handleDisplay(2)}> Puzzle 2 </button>
      <button onClick = {() => handleDisplay(3)}> Puzzle 3 </button>
      <button onClick = {() => handleDisplay(4)}> Final Puzzle </button>


      {display === 1 && <WordCombo />}
      {display === 3 && <Coding />}
      {display === 2 && <Alphatbet />}
      {display === 4 && <FinalPuzzle />}
    </div>
  )
}

export default App;
