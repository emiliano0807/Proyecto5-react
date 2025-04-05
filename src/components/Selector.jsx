import React from 'react'

const Selector = ({users, setCurrentUserId}) => {
  return (
    <ul className='flex flex-wrap justify-evenly gap-4 mt-4 bg-white shadow-lg rounded p-2'>
      {users.map(
        (user, index) => (
          <li key={index}>
            <button onClick={() => setCurrentUserId(user.id)}>
              {user.name}
              </button>
          </li>
        )
      )}
    </ul>
  )
}
export default Selector