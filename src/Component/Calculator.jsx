import React, { useState } from "react";
import AC from "./UI/AC";
import Button from "./UI/Button";
import Egal from "./UI/Egal";


export default function Calculator() {

  const [value, setValue] = useState([])

  const all = ['7', '8', '9', '-', '4', '5', "6", "+", "1", "2", "3", "0", ".", "="]


  const handleClick = (myinput) => {

    setValue([...value, myinput])

  }
  return (
    <div className="calculator">
      <input value={value.join('')} className="tableau" type="text" name="" id="" />

      <div className="all-button">
        <AC />
        <Button Text={"/"} />
        <Button Text={"X"} />
      </div>

      <div className="second-row">

        {all.map(all => {
          return (
            <div>
              <Button handleClick={handleClick} Text={all} />

            </div>
          )
        })}

      </div>
    </div>
  );
}
