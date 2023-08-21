import React from 'react'
import { listData } from './type'

interface ListProps {
  list: listData[]
}

const List: React.FC<ListProps> = (props) => {
  const list: listData[] = props.list
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
            </div>
          )
        })}
      </div>
    </>
  )
}

export default List
