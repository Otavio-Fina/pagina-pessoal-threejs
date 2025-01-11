import './mini-token.css';

export default function MiniToken({texto, mt = false}) {

  
  return (
    <div id="token-container" className={mt ? 'com-mt' : ''}>
      <span className='font-medium'>{texto}</span>
    </div>
  );
}

