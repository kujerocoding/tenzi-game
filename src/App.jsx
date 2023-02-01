import React from 'react'
import './App.css'
import Die from './components/Die'
import { nanoid } from 'nanoid'

const App = () => {

  const [dice, setDice] = React.useState(allNewDice())

  function generateNewDie(){
    const die = Math.ceil(Math.random() * 6)
    return {
      value: die,
      isHeld: false,
      id: nanoid()
    }
  }



  function allNewDice(){
    const newDice = [];
        for (let i = 0; i<10; i++){
        
        newDice.push(generateNewDie())
      }
      
      return newDice
    }

  function rollDice(){
    setDice(prevDice => prevDice.map(die => {
      return die.isHeld ? die : generateNewDie()
    }))
  }

  function holdDice(id){
    setDice(prevDice => prevDice.map(die => 
      die.id === id ? {...die, isHeld: !die.isHeld} : die
    ))
  }

  const diceElements = dice.map(die => 
        <Die key={die.id} 
        value={die.value} 
        isHeld={die.isHeld} 
        handleClick={() => holdDice(die.id)} />)

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
