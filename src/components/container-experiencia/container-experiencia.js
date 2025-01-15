import './container-experiencia.css';
import Image from 'next/image';
import { motion } from "framer-motion";

export default function ContainerExperiencia({img,titulo ,textosListados, tempo, linkParaEmpresa}) {
    const listDeTextos = textosListados.map(textos => <li key={textos}>{textos}</li>)
  
  return (
    <motion.div initial={{y: 100 , opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1, delay: 0.1, ease: "easeInOut"}} viewport={{once: true}} id="experiencia-container">
      <motion.div  whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} animate={{scale: [1, 1.1, 1]}} transition={{duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: (Math.floor(Math.random() * 4+3))}} className='img-experiencia-empresa'>
        <Image src={img} alt={titulo} onClick={() => {window.open(linkParaEmpresa, "_blank")}}></Image>
      </motion.div>
      <div className='textos-experiencia'>
        <h2 className='text-2xl font-semibold text-white'>{titulo}</h2>
        <ul>{listDeTextos}</ul>
      </div>
      <p>{tempo}</p>
    </motion.div>
  );
}

