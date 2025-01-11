import './container-experiencia.css';
import Image from 'next/image';

export default function ContainerExperiencia({img,titulo ,textosListados, tempo}) {
    const listDeTextos = textosListados.map(textos => <li key={textos}>{textos}</li>)
  
  return (
    <div id="experiencia-container">
      <Image src={img} alt={titulo}></Image>
      <div className='textos-experiencia'>
        <h2 className='text-2xl font-semibold text-white'>{titulo}</h2>
        <ul>{listDeTextos}</ul>
      </div>
      <p>{tempo}</p>
    </div>
  );
}

