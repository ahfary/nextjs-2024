import React from 'react'

const Bljr = () => {
  return (
    <div>
      <Card angka="1" nama="Dody" isLoading={true} />
      <Card angka="2" nama="Dedi" isLoading={false} />
      <Note title="Ini title">
        <p>Ini children</p>
      </Note>
      {/* <InputText isError={true} /> */}
    </div>
  )
}

export default Bljr


interface CardProps {
    angka : string
    nama : string
    isLoading? : boolean
  }
  
  function Card ({ angka, nama, isLoading }: CardProps) {
  
    return (
      <div>
        <h1>{angka} {nama}</h1>
        <p>
            {isLoading ? 'Loading...' : 'Done'}
        </p>
      </div>
    )
  }

interface NoteType {
    children: React.ReactNode
    title: string
}

function Note ({ children, title }: NoteType) {
    return (
        <div>
            {title}
            {children}
        </div>
    )
}

// interface InputProps {
//     isError?: boolean
// }

// function InputText({ isError }: InputProps) {
//     return (
//         <input className='' />
//     )
// }