'use client';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const focused =
    'block py-2 px-3 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white md:dark:text-gray-500';
  const notFocused =
    'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
    const pathname = usePathname(); // Usando usePathname para obter a rota atual
    const [active, setActive] = useState('home');

    const optionsRef = useRef(null);
  
    useEffect(() => {
      // Função para rolar para a seção correta
      const handleHashChange = () => {
        const hash = window.location.hash;
        if (hash) {
          const element = document.getElementById(hash.substring(1)); // Remove o '#' do hash
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
  
      // Adiciona um listener para a mudança de hash
      window.addEventListener('hashchange', handleHashChange);
  
      // Limpa o listener ao desmontar
      return () => {
        window.removeEventListener('hashchange', handleHashChange);
      };
    }, []);
  
    useEffect(() => {
      // Atualiza o estado ativo com base na rota atual
      if (pathname === '/') {
        setActive('home');
      } else if (pathname === '/portfolio') {
        setActive('portfolio');
      }
    }, [pathname]);

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-600 absolute">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <FontAwesomeIcon icon={faTerminal} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Otavio Fina
            </span>
          </a>
          <button onClick={() => optionsRef.current.classList.toggle('hidden')} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className={active === 'home' ? focused : notFocused}
                  onClick={() => setActive('home')}
                >
                  Home Canva
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className={active === 'portfolio' ? focused : notFocused}
                  onClick={() => setActive('portfolio')}
                >
                  Portfolio Plain Page
                </a>
              </li>
              <li>
                <a
                  href="/portfolio#about-me"
                  className={active === 'about-me' ? focused : notFocused}
                  onClick={() => setActive('about-me')}
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="/portfolio#experience"
                  className={active === 'experience' ? focused : notFocused}
                  onClick={() => setActive('experience')}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="/portfolio#projects"
                  className={active === 'projects' ? focused : notFocused}
                  onClick={() => setActive('projects')}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/portfolio#contact"
                  className={active === 'contact' ? focused : notFocused}
                  onClick={() => setActive('contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="options-navbar hidden" ref={optionsRef}>
            <ul className="font-medium flex flex-col rounded-lg rtl:space-x-reverse bg-gray-800 border-0">
              <li>
                <a
                  href="/"
                  className={active === 'home' ? focused : notFocused}
                  onClick={() => setActive('home')}
                >
                  Home Canva
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className={active === 'portfolio' ? focused : notFocused}
                  onClick={() => setActive('portfolio')}
                >
                  Portfolio Plain Page
                </a>
              </li>
              <li>
                <a
                  href="/portfolio#about-me"
                  className={active === 'about-me' ? focused : notFocused}
                  onClick={() => setActive('about-me')}
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="/portfolio#experience"
                  className={active === 'experience' ? focused : notFocused}
                  onClick={() => setActive('experience')}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="/portfolio#projects"
                  className={active === 'projects' ? focused : notFocused}
                  onClick={() => setActive('projects')}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/portfolio#contact"
                  className={active === 'contact' ? focused : notFocused}
                  onClick={() => setActive('contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
      </nav>
      
    </>
  );
}
