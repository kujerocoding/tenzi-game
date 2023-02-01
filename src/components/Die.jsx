import React from 'react'

const Die = () => {

    const allDice = [];
    for (let i = 0; i<10; i++){
        const die = Math.ceil(Math.random() * 6)
        allDice.push(die)
    }

    //console.log(allDice)

    const dieElements = allDice.map(die => <div className='die-container'>{die}</div>)    

  return (
    <div className='dice-container'>
      {dieElements}
    </div>
  )
}

export default Die
