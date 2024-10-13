import '../components/ConfigMain.css'
import '../components/TemaClaro.css'
import '../components/TemaEscuro.css'
const Habilidades = ({temaEscolhido, tecnologia, logo}) => {
  return (
    <div id='skills' className={temaEscolhido === false? "skills-escuro" : "skills-claro"}>
      <p>{tecnologia}</p>
      <div id='container-logo'>
        <img src={logo} alt="" id="logo" />
      </div>
    </div>  
  )
}

export default Habilidades
