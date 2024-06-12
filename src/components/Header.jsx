import { useState } from 'react'
import '../components/ConfigHeader.css'
import '../components/TemaClaro.css'
import '../components/TemaEscuro.css'
const Header = ({handlePegarTema}) => {
    {/*Hook para receber o valor do checkbox*/}
    const [tema, setTema] = useState(false)
    {/*Função para mudar o valor do hook*/}
    const handleMudarTema = (e) => {
        setTema(e.target.checked)
        console.log(tema)
        handlePegarTema(tema)
    }


  return (
        <header>
            <nav id='navbar' className={tema === false? "navbar-claro navbar navbar-expand-lg" : "navbar-escuro navbar navbar-expand-lg"}>
                <a href="https://www.linkedin.com/in/adilsonneubaner/" target='_blank'>
                    <div id='perfil' className={tema === false? "perfil-claro" : "perfil-escuro"}></div>
                </a>
                <button className={tema === false? "navbar-toggler-claro navbar-toggler" : "navbar-toggler-escuro navbar-toggler"} data-bs-toggle='collapse' data-bs-target= '#links-container' aria-controls='links-container' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className={tema === false? "toggler-icon-claro bi bi-list" : "toggler-icon-escuro bi bi-list"}></span>
                </button>
                <div id='links-container' className='collapse navbar-collapse'>
                    <ul id='nav-links' className='navbar-nav'>
                        <li className='nav-item'>
                            <a href="#secao-sobre-mim" className={tema === false? "link-claro nav-link" : "link-escuro nav-link"} aria-current='page'>Sobre mim</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#secao-habilidades" className={tema === false? "link-claro nav-link" : "link-escuro nav-link"} aria-current='page'>Habilidades</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#secao-projetos" className={tema === false? "link-claro nav-link" : "link-escuro nav-link"} aria-current='page'>Projetos</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#secao-contato" className={tema === false? "link-claro nav-link" : "link-escuro nav-link"} aria-current='page'>Contato</a>
                        </li> 
                    </ul>
                </div>
            </nav>
            <div id='cor-tema'>
                <div className="form-check form-switch">
                    <input type="checkbox" name="tema" id='escolher-tema' className='form-check-input' checked={tema} onChange={handleMudarTema}/>
                </div>
                <div id='claro-escuro' className={tema === false? "icones-claro" : "icones-escuro"}>
                    <i className="bi bi-brightness-high-fill tema"></i>
                    <i className="bi bi-moon-fill tema"></i>
                </div>
            </div>
        </header>
  )
}

export default Header