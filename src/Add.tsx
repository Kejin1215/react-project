import { useState } from 'react'

export function Add() {
  const [count, setCount] = useState(0)

  const add = () => {
    setCount((count) => count + 1)
  }
  return (
    <>
      <button onClick={add}>add {count}</button>
    </>
  )
}
