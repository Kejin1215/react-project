import './App.css'
import List from './List'
import { listData } from './type'

function App() {
  const list: listData[] = [
    { id: 'q1', title: '问卷1', isPublished: true },
    { id: 'q2', title: '问卷2', isPublished: false },
    { id: 'q3', title: '问卷3', isPublished: true },
    { id: 'q4', title: '问卷4', isPublished: false },
    { id: 'q5', title: '问卷5', isPublished: true },
  ]

  return (
    <>
      <List list={list} />
    </>
  )
}

export default App
