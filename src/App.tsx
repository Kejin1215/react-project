import { useState } from 'react'
import './App.css'
import List from './List'

function App() {
  const [list, setList] = useState([
    { id: '1', title: '问卷1', isPublished: true },
    { id: '2', title: '问卷2', isPublished: false },
    { id: '3', title: '问卷3', isPublished: true },
    { id: '4', title: '问卷4', isPublished: false },
    { id: '5', title: '问卷5', isPublished: true },
  ])

  const addList = (item: string) => {
    let newList = {
      id: list[list.length - 1].id + 1,
      title: item,
      isPublished: true,
    }
    setList(list.concat(newList))
  }

  const deleteItem = (id: string) => {
    setList(list.filter((item) => item.id !== id))
  }

  return (
    <>
      <List list={list} add={addList} deleteItem={deleteItem} />
    </>
  )
}

export default App
