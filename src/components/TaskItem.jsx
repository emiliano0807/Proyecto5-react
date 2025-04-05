import React from 'react'

export const TaskItem = ({task}) => {
  return (
    <li className='px-2 border-b border-stone-600 pb-2'>{task}</li>
  )
}

export default TaskItem