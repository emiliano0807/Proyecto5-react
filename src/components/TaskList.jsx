import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks}) => {
  return (
    <main className='bg-white shadow rounded mt-3'>
      <h2 className='text-center font-bold text-2xl text-stone-800'>Tareas</h2>
      <ul className='flex flex-col gap-2 p-4'>
        {tasks.map(
          (task, index) => {
            return (<TaskItem key={index} task={task} />)
          }
        )}
      </ul>
    </main>
  )
}

export default TaskList