import React from 'react'
import './App.css'
import Die from './components/Die'
import { nanoid } from 'nanoid'

const App = () => {

  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice(){
    const newDice = [];
        for (let i = 0; i<10; i++){
        const die = Math.ceil(Math.random() * 6)
        newDice.push({
          value: die,
          isHeld: false,
          id: nanoid()
        })
      }
      
      return newDice
    }

  function rollDice(){
    setDice(allNewDice())
  }

  const diceElements = dice.map(die => <Die key={die.id}value={die.value} />)

  return (
    <div className='main-container'>
      <div className='dice-container'>
      {diceElements}
      </div>
      <button onClick={rollDice}>Roll</button>
    </div>
  )
}

export default App
