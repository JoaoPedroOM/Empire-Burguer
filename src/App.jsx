import React from 'react'
import Header from './components/Header'
import Oferta from "./components/Oferta"
import Cardapio from './components/Cardapio'
import Feedbacks from './components/Feedbacks'

const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Oferta/>
        <Cardapio/>
      </main>
      <Feedbacks/>
    </div>
  )
}

export default App
