import React, { useState } from 'react'
import { listData } from './type'

interface ListProps {
  list: listData[]
  add: (item: any) => void
  deleteItem: (id: string) => void
}

const List: React.FC<ListProps> = (props) => {
  const list: listData[] = props.list
  const add = props.add
  const deleteItem = props.deleteItem
  const [newItem, setNewItem] = useState('')
  const handleChange = (event: any) => {
    setNewItem(event.target.value)
  }
  const handleAdd = () => {
    add(newItem)
    console.log(newItem)
  }
  const handleDelete = (id: string) => {
    deleteItem(id)
  }
  return (
    <>
      {' '}
      <div>
        {list.map((item) => {
          return (
            <div key={item.id}>
              <strong>{item.title}</strong>
              &nbsp;
              {item.isPublished ? (
                <span style={{ color: 'green' }}>已发布</span>
              ) : (
                <span style={{ color: 'red' }}>未发布</span>
              )}
              &nbsp;
              <button onClick={handleDelete.bind(this, item.id)}>删除</button>
            </div>
          )
        })}
      </div>
      <input type="text" onChange={handleChange} value={newItem} />
      <button onClick={handleAdd}>Submit</button>
    </>
  )
}

export default List
