import './bloco-tecnologia.css';
import { motion } from "motion/react"
import Image from 'next/image'
import { useRef } from 'react';

export default function BlocoTecnologia({lst}) {

  const tecnologias = lst.map(({img, nome}, index) => diferentesTecnologias({img, nome, index}));
  return (
    <div id="tecnologia-container" >
        {tecnologias}
    </div>
  );
}


function diferentesTecnologias({img, nome, index}) {
    return (
        <div key={nome}>
            <motion.div drag dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.01 }} 
            className='' dragElastic={0.5} dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }} style={{backgroundColor: 'transparent', cursor: 'grab'}}
            animate={{y: [0, -10, 0]}} transition={{duration: 1, ease: "easeInOut", repeat: Infinity,delay: (parseFloat((index * 0.1).toFixed(1))), repeatDelay: (4+(parseFloat((index * 0.1).toFixed(1))))}}>
                    <Image src={img} alt={nome} draggable="false">
                    </Image>
            </motion.div>
            <p>{nome}</p>
        </div>
    );
}
