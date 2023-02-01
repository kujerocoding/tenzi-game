import React from 'react'
import './App.css'
import Die from './components/Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

const App = () => {

  const [dice, setDice] = React.useState(allNewDice())
  const [tenzi, setTenzi] = React.useState(false)


  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if(allHeld && allSameValue){
      setTenzi(true)
    }
  },[dice])



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
      {tenzi ? <Confetti /> : ""}
      <h1>Tenzi</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>
      {diceElements}
      </div>
      <button onClick={rollDice}>{tenzi ? "New Game" : "Roll"}</button>
    </div>
  )
}

export default App
