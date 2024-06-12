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
//componentes
import Habilidades from './Habilidades'
import Projetos from './Projetos'
const Main = ({temaEscolhido}) => {
    //array de objetos sobre minhas habilidades
    const habilidades = [
        {id: "1", tecnologia:"HTML", logo: html},
        {id: "2", tecnologia: "CSS", logo: css},
        {id: "3", tecnologia: "JavaScript", logo: js},
        {id: "4", tecnologia: "React.js", logo: react},
        {id: "7", tecnologia: "Bootstrap", logo: bootstrap},
        {id: "5", tecnologia: "Git", logo: git},
        {id: "6", tecnologia: "GitHub", logo: github}
    ]
    //array de objetos sobre meus projetos
    const projetos = [
        {id: "1", img: secret_word, site: "https://adilsonneubaner.github.io/secret-word/" , repositorio: "https://github.com/Adilsonneubaner/secret-word", titulo: "Secret Word", descricao: "Nesse projeto, o usuário jogará um jogo de acertar a palavra tendo 3 tentativas de acertar, caso acerte sua pontuação se aumenta e suas chances são renovadas. Ao perder suas 3 chances ele verá sua pontuação final."}
    ]
  return (
    <main>
        <div className="container" id='secao-sobre-mim'>
            <h1 id='titulo' className={temaEscolhido === false? "titulo-escuro" : "titulo-claro"}>Seja bem-vindo ao meu portifólio</h1>
            <p id='paragrafo' className={temaEscolhido === false? "paragrafo-escuro" : "paragrafo-claro"}>(toque no gatinho para dar um " oi ")</p>
        </div>
        <div className="container" id='sobre-mim'>
            <div id='paragrafo-sobre-mim' data-bs-target='#navbar' data-bs-offset='0'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vel ab doloremque mollitia explicabo. Iure optio ullam laborum atque ipsum delectus autem esse aliquam eius, nam officia totam explicabo error! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, nihil, omnis dicta earum minima sapiente ipsum in animi eum et aperiam porro ratione repellendus! Quae recusandae voluptas veritatis ipsum iusto.</p>
            </div>
            <div id='imagem-sobre-mim' className={temaEscolhido === false? "imagem-escuro" : "imagem-claro"}></div> 
        </div>
        <div className="container sub-titulos" id='secao-habilidades' data-bs-spy='scroll' data-bs-target='#navbar' data-bs-offset='0'>
            <h2 className={temaEscolhido === false? "sub-titulos-escuro" : "sub-titulos-claro"}>Habilidades</h2>
            <p>Entre as tecnologias que tenho domínio estão:</p>
            <div id="hard-skills">
                {habilidades.map((habilidade) => (
                    <Habilidades 
                    temaEscolhido={temaEscolhido} 
                    key={habilidade.id} 
                    tecnologia={habilidade.tecnologia} logo={habilidade.logo}/>
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