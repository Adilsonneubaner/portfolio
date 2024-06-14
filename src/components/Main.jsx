import '../components/ConfigMain.css'
import '../components/TemaClaro.css'
import '../components/TemaEscuro.css'
//imagens
import html from '../img/html.svg'
import css from '../img/css.svg'
import js from '../img/js.svg'
import react from '../img/react.svg'
import git from '../img/git.svg'
import github from '../img/github.svg'
import bootstrap from '../img/bootstrap.svg'
import secret_word from '../img/secret-word.png'

import html_2 from '../img/html-2.svg'
import css_2 from '../img/css-2.svg'
import js_2 from '../img/js-2.svg'
import react_2 from '../img/react-2.svg'
import git_2 from '../img/git-2.svg'
import github_2 from '../img/github-2.svg'
import bootstrap_2 from '../img/bootstrap-2.svg'
//componentes
import Habilidades from './Habilidades'
import Projetos from './Projetos'
const Main = ({temaEscolhido}) => {
    //array de objetos sobre minhas habilidades
    const habilidades = [
        {id: "1", tecnologia:"HTML", logo_claro: html, logo_escuro: html_2},
        {id: "2", tecnologia: "CSS", logo_claro: css, logo_escuro: css_2},
        {id: "3", tecnologia: "JavaScript", logo_claro: js, logo_escuro: js_2},
        {id: "4", tecnologia: "React.js", logo_claro: react, logo_escuro: react_2},
        {id: "7", tecnologia: "Bootstrap", logo_claro: bootstrap, logo_escuro: bootstrap_2},
        {id: "5", tecnologia: "Git", logo_claro: git, logo_escuro: git_2},
        {id: "6", tecnologia: "GitHub", logo_claro: github, logo_escuro: github_2}
    ]
    //array de objetos sobre meus projetos
    const projetos = [
        {id: "1", img: secret_word, site: "https://adilsonneubaner.github.io/secret-word/" , repositorio: "https://github.com/Adilsonneubaner/secret-word", titulo: "Secret Word", descricao: "Jogo de acertar a palavra, onde o usuário possui 3 tentativas e ao adivinhar as suas chances se restauram. Ao zerar suas tentativas o jogo se encerrará e sua pontuação final será exibida."}
    ]
  return (
    <main>
        <div className="container" id='secao-sobre-mim'>
            <h1 id='titulo' className={temaEscolhido === false? "titulo-escuro" : "titulo-claro"}>Olá, seja bem-vindo</h1>
            {/* <p id='paragrafo' className={temaEscolhido === false? "paragrafo-escuro" : "paragrafo-claro"}>(toque no gatinho para dar um " oi ")</p> */}
        </div>
        <div className="container" id='sobre-mim'>
            <div id='paragrafo-sobre-mim' data-bs-target='#navbar' data-bs-offset='0' className={temaEscolhido === false? "paragrafo-sobre-mim-escuro" : ""}>
                <p>Me chamo Adilson Neubaner, tenho foco em desenvolvimento front-end. Meu trabalho como desenvolvedor é garantir a experiência a cada usuário individualmente, independente de onde e qual dispositivo ele esteja usando, por isso prezo por um desenvolvimento totalmente responsivo e otimizado, com código organizado para facilitar manutenção.</p>
                <p>Tenho um pensamento crítico sobre todos os projetos em que trabalho. Com responsabilidade e concentração, busco criar soluções inovadoras e criativas.</p>
            </div>
            <div id='imagem-sobre-mim' className={temaEscolhido === false? "imagem-escuro" : "imagem-claro"}></div> 
        </div>
        <div className="container sub-titulos" id='secao-habilidades' data-bs-spy='scroll' data-bs-target='#navbar' data-bs-offset='0'>
            <h2 className={temaEscolhido === false? "sub-titulos-escuro" : "sub-titulos-claro"}>Habilidades</h2>
            <div id="hard-skills">
                {habilidades.map((habilidade) => (
                    <Habilidades 
                    temaEscolhido={temaEscolhido} 
                    key={habilidade.id} 
                    tecnologia={habilidade.tecnologia} logo_claro={habilidade.logo_claro} logo_escuro={habilidade.logo_escuro}/>
                ))}
            </div>
        </div>
        <div className="container sub-titulos"id='secao-projetos' data-bs-spy='scroll' data-bs-target='#navbar' data-bs-offset='0'>
            <h2 className={temaEscolhido === false? "sub-titulos-escuro" : "sub-titulos-claro"} style={{marginBottom: `100px`}}>Projetos</h2>
            {projetos.map((projeto) => (
                <Projetos 
                key={projeto.id}
                img={projeto.img}
                site={projeto.site}
                repositorio={projeto.repositorio} 
                titulo={projeto.titulo}
                descricao={projeto.descricao}
                temaEscolhido={temaEscolhido}/>
            ))}
        </div>
    </main>
  )
}

export default Main