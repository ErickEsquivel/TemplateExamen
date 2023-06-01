import { useState } from 'react'
import './App.css'
import Card from './components/card/Card'
import ClassComponent from './Components/ClassComponent'
import FuncComponent from './Components/FuncComponent'

function App() {
  const [name, setName] =useState('')
  const [number, setNumber] =useState(null)
  const handleSubmit = (event) => {
    event.preventDefault()
    if(isNaN(number)== true){ 
      number== null,
        alert(`Tienes un error`)
    } else {
        return Card;
    }
}

  return (
    <>
    <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Nombre: '
                onChange={(event) => setName(event.target.value)}
            />
            <Card name={name}/>
            <input
                type='number'
                placeholder='numero favorito: '
                onChange={(event) => setNumber(event.target.value)}
            />
           <Card name={number}/>
           
            <button type='submit'>Enviar</button>
            

        </form>
      
    </>
  )
}

export default App