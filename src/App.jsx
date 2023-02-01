import React from 'react'
import './App.css'
import Die from './components/Die'

const App = () => {

  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice(){
    const newDice = [];
        for (let i = 0; i<10; i++){
        const die = Math.ceil(Math.random() * 6)
        newDice.push(die)
      }
      return newDice
    }

  const diceElements = dice.map(die => <Die value={die} />)

  return (
    <div className='main-container'>
      <div className='dice-container'>
      {diceElements}
      </div>
    </div>
  )
}

export default App
