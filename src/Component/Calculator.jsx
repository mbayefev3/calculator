import React, { useState } from "react";
import AC from "./UI/AC";
import Button from "./UI/Button";
import Egal from "./UI/Egal";
import obj from '../Solve.js'

export default function Calculator() {

  const [value, setValue] = useState([])

  const all = ['7', '8', '9', '-', '4', '5', "6", "+", "1", "2", "3", "0", "."]


  const handleClick = (myinput) => {

    setValue([...value, myinput])

  }

  const handleOperation = () => {

    const signPlus = value.filter(x => x === '+')
    const numbers = value.join('').split('+').map(n => +n)
    const singMinus = value.filter(x => x === '-')
    const numbersTwo = value.join('').split('-').map(n => +n)
    const singMult = value.filter(x => x === 'X')
    const numbersThree = value.join('').split('X').map(n => +n)
    const singDiv = value.filter(x => x === '/')
    const numbersFour = value.join('').split('/').map(n => +n)
    // console.log(numbersThree)
    if (signPlus.length > 0) {
      const answer = obj.add(...numbers)

      setValue([answer])
    } else if (singMinus.length > 0) {
      const answer = obj.minus(...numbersTwo)
      setValue([answer])
    } else if (singMult.length > 0) {

      const answer = obj.multiply(...numbersThree)
      setValue([answer])
    } else if (singDiv.length > 0) {
      const answer = obj.divide(...numbersFour)
      setValue([answer])
    }
  }


  const deleteAll = () => {
    setValue([])
  }
  return (


    <div className="calculator">
      <input value={value.join('')} className="tableau" type="text" name="" id="" />

      <div className="all-button">
        <AC deleteAll={deleteAll} />
        <Button handleClick={handleClick} Text={"/"} />
        <Button handleClick={handleClick} Text={"X"} />
      </div>

      <div className="second-row">

        {all.map(all => {
          return (
            <div>
              <Button handleClick={handleClick} Text={all} />

            </div>
          )
        })}

        <button onClick={handleOperation} className='offi-button'>=</button>

      </div>
    </div>
  );
}
