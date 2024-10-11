import { useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import '../components/Projetos.css'
import '../components/TemaClaro.css'
import '../components/TemaEscuro.css'

const Projetos = ({projetos, temaEscolhido}) => {
  
  const conteudoProjeto = useRef()

  return (
    <Swiper
    modules={[Navigation, Pagination]}
    navigation={true}
    slidesPerView={1}
    >
      {projetos && projetos.map((projeto) => (
        <SwiperSlide key={projeto.id}>
          <div>
            <p id='titulo-projeto' className={temaEscolhido === false? "titulo-projeto-escuro" : "titulo-projeto-claro"}>{projeto.titulo}</p>

            <div id='container-projeto' 
            style={{background: `url(${projeto.img}) top center no-repeat`,
            backgroundSize: 'cover'}}
            >

              <div className='conteudo-projeto' ref={conteudoProjeto}>
                <p>{projeto.descricao}</p>
                <div className={temaEscolhido === false? "botoes-escuro" : "botoes-claro"} id='botoes'>
                  <a href={projeto.site} target='_blank'>
                    <button>Veja o site</button>
                  </a>
                  <a href={projeto.repositorio} target='_blank'>
                    <button>Repositório</button>
                  </a>
                </div>
              </div>

            </div>
           
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Projetos