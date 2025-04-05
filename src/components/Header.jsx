import React from 'react'

const Header = (props) => {
  return (
    <header className='bg-stone-800 text-white text-end px-4 py-2 text-2xl shadow'>Hola {props.user.name}</header>
  )
}

export default Header