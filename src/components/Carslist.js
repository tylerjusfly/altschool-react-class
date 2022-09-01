import React from "react";
import { useData } from "./useData";

// Creating custom hooks
const useToggle = (initialVal = false) => {
  const [isVisible, SetIsVisible] = React.useState(initialVal);

  const toggle = () => {
    SetIsVisible(prev => !prev)
  }

  return [isVisible, toggle];
}

function CarsList() {
  const [isVisible, toggle] = useToggle()

  const {data} = useData('players')
  console.log(data)

  return (
    <div>
      <button onClick={toggle}> {isVisible ?"Hide" : "Show" } </button>

      {isVisible && <h1>Hidden text</h1>}
    </div>
  )
}

export default CarsList;
