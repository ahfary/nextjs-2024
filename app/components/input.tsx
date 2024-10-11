import React from 'react'

interface InputProps {
    type: string
    name: string
    id: string
    placeholder: string
}

const Input = ({ type, name, id, placeholder } : InputProps) => {
  return (
    <input id={id} type={type} name={name} placeholder={placeholder} className='input' />
  )
}

export default Input
