import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [temaEscolhido, setTemaEscolhido] = useState()
  //função para pegar o valor do tema
  const handlePegarTema = (tema) => {
      setTemaEscolhido(tema)
  }
  
  return (
    <div className={temaEscolhido === false? "corpo-escuro" : "corpo-claro"}>
      <Header handlePegarTema={handlePegarTema}/>
      <Main temaEscolhido={temaEscolhido}/>
      <Footer temaEscolhido={temaEscolhido}/>
    </div>
  )
}

export default App
