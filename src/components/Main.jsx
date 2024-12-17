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

// imagens projetos
import secret_word from '../img/secret-word.png'
import mountainStore from '../img/mountain-store.png'
import miniblog from '../img/miniblog2.png'

//componentes
import Habilidades from './Habilidades'
import Projetos from './Projetos'
const Main = ({temaEscolhido}) => {
    //array de objetos sobre minhas habilidades
    const habilidades = [
        {id: "1", tecnologia: "React.js", logo: react},
        {id: "2", tecnologia: "JavaScript", logo: js},
        {id: "3", tecnologia: "Git", logo: git},
        {id: "4", tecnologia: "Bootstrap", logo: bootstrap},
        {id: "5", tecnologia:"HTML", logo: html},
        {id: "6", tecnologia: "CSS", logo: css},
        {id: "7", tecnologia: "GitHub", logo: github}
    ]
    //array de objetos sobre meus projetos
    const projetos = [
        {id: 1, img: miniblog, site: 'https://miniblog-nu.vercel.app/', repositorio: 'https://github.com/Adilsonneubaner/miniblog', titulo: 'MiniBlog', descricao: 'Blog onde os usuários podem ver posts de outras pessoas, além de poder compartilhar as suas próprias publicações, podendo editá-las ou excluí-las mais tarde se desejar.'},
        {id: 2, img: mountainStore, site: "https://products-ochre-psi.vercel.app/", repositorio: "https://github.com/Adilsonneubaner/mountain-store", titulo: "Mountain Store", descricao: "Projeto em que trabalho com requisições HTTP para simular algumas funcionalidades de um E-commerce."},
        {id: 3, img: secret_word, site: "https://adilsonneubaner.github.io/secret-word/" , repositorio: "https://github.com/Adilsonneubaner/secret-word", titulo: "Secret Word", descricao: "Jogo de adivinhação, onde o jogador possui 3 tentativas. A cada acerto suas tentativas se restauram. Caso as tentativas se esgotem, o jogo termina e a pontuação final é exibida."},
    ]

  return (
    <main>
        <div className="container" id='secao-sobre-mim'>
            <h1 id='titulo' className={temaEscolhido === false? "titulo-escuro" : "titulo-claro"}>Olá, seja bem-vindo</h1>
        </div>
        <div className="container" id='sobre-mim'>
            <div id='paragrafo-sobre-mim' data-bs-target='#navbar' data-bs-offset='0' className={temaEscolhido === false? "paragrafo-sobre-mim-escuro" : ""}>
                <p>Me chamo Adilson Neubaner, e tenho foco em desenvolvimento front-end. Meu objetivo como desenvolvedor é proporcionar a melhor experiência ao cada usuário, independentemente de onde e qual dispositivo esteje usando. Por isso prezo por boas práticas de clean code e otimização.</p>
                <p>Tenho um pensamento crítico e analítico em relação a todos os projetos em que atuo. Com responsabilidade, foco e criatividade, busco desenvolver soluções inovadoras que agreguem valor e atendam às necessidades dos usuários e das equipes envolvidas.</p>
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
                    tecnologia={habilidade.tecnologia} logo={habilidade.logo}/>
                ))}
            </div>
        </div>
        <div className="container sub-titulos"id='secao-projetos' data-bs-spy='scroll' data-bs-target='#navbar' data-bs-offset='0'>
            <h2 className={temaEscolhido === false? "sub-titulos-escuro" : "sub-titulos-claro"} style={{marginBottom: `100px`}}>Projetos</h2>
            <Projetos projetos={projetos} temaEscolhido={temaEscolhido}></Projetos>
        </div>
    </main>
  )
}

export default Main