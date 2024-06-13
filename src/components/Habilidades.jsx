import '../components/ConfigMain.css'
import '../components/TemaClaro.css'
import '../components/TemaEscuro.css'
const Habilidades = ({temaEscolhido, tecnologia, logo_claro, logo_escuro}) => {
  return (
    <div id='skills' className={temaEscolhido === false? "skills-escuro" : "skills-claro"}>
      <p>{tecnologia}</p>
      <div id='container-logo'>
        <img src={temaEscolhido === false? `${logo_escuro}` : `${logo_claro}`} alt="" id="logo" />
      </div>
    </div>  
  )
}

export default Habilidades
