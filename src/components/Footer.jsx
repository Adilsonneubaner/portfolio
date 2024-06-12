import'../components/ConfigFooter.css'
import '../components/TemaClaro.css'
import '../components/TemaEscuro.css'

const Footer = ({temaEscolhido}) => {
  return (
    <footer className={temaEscolhido === false? "" : "footer-claro"} id='secao-contato' data-bs-spy='scroll' data-bs-target='#navbar' data-bs-offset='0'>
        <p>Entre em contato</p>
        <div>
            <ul id="contato">
              <li>
                <a href="https://www.linkedin.com/in/adilson-neubaner-b936442b8/" target='_blank'><i className="bi bi-linkedin"></i></a>
              </li>
              <li>
                <a href="mailto:juniorneubaner@gmail.com" target='_blank'><i className="bi bi-envelope-fill"></i></a>
              </li>
              <li>
                <a href="https://www.instagram.com/juniorneubaner/" target='_blank'><i className="bi bi-instagram"></i></a>
              </li>
              <li>
                <a href="https://wa.me/553398214909" target='_blank'><i className="bi bi-whatsapp"></i></a>
              </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer