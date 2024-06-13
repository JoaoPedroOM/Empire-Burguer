import React from 'react'
import Header from './components/Header'
import Oferta from "./components/Oferta"
import Cardapio from './components/Cardapio'

const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Oferta/>
        <Cardapio/>
      </main>
    </div>
  )
}

export default App
