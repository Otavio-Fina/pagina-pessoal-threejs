import './loading-canva-screen.css';
import { Slab } from 'react-loading-indicators'



export default function LoadingCanvaScreen() {




    

    
  
  return (
    <>
        <div id="loading-canva-screen" className='z-20'>
            <Slab color="#374151" size="large" text="LOADING CANVA" textColor="#D1D5DB" />
        </div>
        <div id="be-creative" className='z-10'>
            <p className='font-bold text-3xl text-white '>Be Creative</p>
        </div>
    </>
    
  );
}
