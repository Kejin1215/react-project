import React, { useState } from 'react'
import { produce } from 'immer'

const Demo: React.FC = () => {
  const [info, setInfo] = useState({ name: 'kj', age: 17 })
  const handleChange = () => {
    setInfo(
      // immer可以修改属性
      produce((draft) => {
        draft.age = 18
      }),
    )
  }
  return (
    <>
      <div>{JSON.stringify(info)}</div>
      <button onClick={handleChange}>change</button>
    </>
  )
}

export default Demo
