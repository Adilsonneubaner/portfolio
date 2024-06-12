import { useState } from 'react'
import '../components/ConfigMain.css'
import '../components/TemaClaro.css'
import '../components/TemaEscuro.css'
const Projetos = ({img, site, repositorio, titulo, descricao, temaEscolhido}) => {

  const [mostrarConteudo, setMostrarConteudo] = useState(false)
  
  return (
    <div>
        <h3 id='titulo-projeto' className={temaEscolhido === false? "" : "titulo-projeto-claro"}>{titulo}</h3>
        <div id='imagem-projeto' style={{background: `url(${img}) top center`}} onMouseEnter={() => setMostrarConteudo(true)} onMouseLeave={() => setMostrarConteudo(false)}>
            <div id='conteudo-projeto' className={mostrarConteudo === true? "conteudo-visivel" : "conteudo-nao-visivel"}>
                <p>{descricao}</p>
                <div className={temaEscolhido === false? "" : "botoes-claro"} id='botoes'>
                  <a href={site} target='_blank'>
                    <button>Veja o site</button>
                  </a>
                  <a href={repositorio} target='_blank'>
                    <button>Repositório</button>
                  </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projetos