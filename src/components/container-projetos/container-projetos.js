import './container-projetos.css';
import Image from 'next/image';
import MiniToken from '../mini-token/mini-token';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

export default function ContainerProjetos({img,titulo ,texto, tecnologias, links}) {

    const variasTecnologias = tecnologias.map(tecnologia => <MiniToken key={tecnologia} texto={tecnologia} />);
    console.log(links.live)
  
  return (
    <div id="projetos-container">
      <div className='img-projetos'>
        <Image src={img} alt={titulo}></Image>
      </div>
      <div className='textos-projetos'>
        <h2 className='text-2xl font-semibold text-white'>{titulo}</h2>
        <p className=''>{texto}</p>
        <div className='div-token-tecnologias'>
            {variasTecnologias}
        </div>
        <div className='link-projetos'>
            <a href={links.live} alt={links.live} target='_blank'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
            <a href={links.github} alt={links.github} target='_blank'><FontAwesomeIcon icon={faSquareGithub} /></a>
        </div>
      </div>
    </div>
  );
}

