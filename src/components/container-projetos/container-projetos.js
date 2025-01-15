import './container-projetos.css';
import Image from 'next/image';
import MiniToken from '../mini-token/mini-token';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

export default function ContainerProjetos({img,titulo ,texto, tecnologias, links}) {

    const variasTecnologias = tecnologias.map(tecnologia => <MiniToken key={tecnologia} texto={tecnologia} />);
    console.log(links.live)
  
  return (
    <motion.div initial={{y: 100 , opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1, delay: 0.1, ease: "easeInOut"}} viewport={{once: true}} id="projetos-container">
      <div className='img-projetos bg-white'>
        <Image src={img} alt={titulo}></Image>
      </div>
      <div className='textos-projetos'>
        <h2 className='text-2xl font-semibold text-white'>{titulo}</h2>
        <p className=''>{texto}</p>
        <div className='div-token-tecnologias'>
            {variasTecnologias}
        </div>
        <div className='link-projetos'>
            <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}><a href={links.live} alt={links.live} target='_blank'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></motion.div>
            <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}><a href={links.github} alt={links.github} target='_blank'><FontAwesomeIcon icon={faSquareGithub} /></a></motion.div>
        </div>
      </div>
    </motion.div>
  );
}

