"use client"
import { useState } from "react"

export default function Home() {
  const [Count, setCount] = useState(0)

  const clickPlus = () => {
    setCount(Count + 1)
  }

  const clickMinus = () => {
    setCount(Count - 1)
  }

  return (
    <div>
      <h1>Flamur</h1>
      <h3>Counter</h3>
      <button onClick={clickPlus}>Plus</button>
      <button onClick={clickMinus}>Minus</button>
      <p>{Count}</p>
    </div>
  )
}