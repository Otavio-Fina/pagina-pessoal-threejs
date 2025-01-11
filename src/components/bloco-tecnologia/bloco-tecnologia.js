import './bloco-tecnologia.css';
import { motion } from "motion/react"
import Image from 'next/image'
import { useRef } from 'react';

export default function BlocoTecnologia({lst}) {

  const tecnologias = lst.map(({img, nome}) => diferentesTecnologias({img, nome}));
  return (
    <div id="tecnologia-container" >
        {tecnologias}
    </div>
  );
}


function diferentesTecnologias({img, nome}) {
    return (
        <div key={nome}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.01 }} className=''>
                    <Image src={img} alt={nome}>
                    </Image>
            </motion.div>
            <p>{nome}</p>
        </div>
    );
}
