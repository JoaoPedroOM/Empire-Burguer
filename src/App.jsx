import React from 'react'
import Header from './components/Header'
import Oferta from "./components/Oferta"
import Cardapio from './components/Cardapio'
import Feedbacks from './components/Feedbacks'
import Instagram from './components/Instagram'
import CardPedido from './components/CardPedido'

const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Oferta/>
        <Cardapio/>
      </main>
      <Feedbacks/>
      <Instagram/>
      <CardPedido/>
    </div>
  )
}

export default App
