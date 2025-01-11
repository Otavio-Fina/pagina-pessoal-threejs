'use client';
import './curriculo.css';
import { Inter } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStreetView, faCheck } from '@fortawesome/free-solid-svg-icons';
import { motion } from "motion/react"
import gsap from "gsap";
import Image from 'next/image'
import profile from '../../public/eu.jpg'
import MiniToken from './mini-token/mini-token';
import BlocoTecnologia from './bloco-tecnologia/bloco-tecnologia';
import javascript from '../../public/tecnologias/JavaScript.png'
import jest from '../../public/tecnologias/Jest.png'
import node from '../../public/tecnologias/Node.js.png'
import react from '../../public/tecnologias/React.png'
import three from '../../public/tecnologias/Three.js.png'
import typescript from '../../public/tecnologias/TypeScript.png'
import aws from '../../public/tecnologias/AWS.png'
import bootstrap from '../../public/tecnologias/Bootstrap.png'
import csharp from '../../public/tecnologias/Csharp.png'
import css3 from '../../public/tecnologias/CSS3.png'
import express from '../../public/tecnologias/Express.png'
import git from '../../public/tecnologias/Git.png'
import actions from '../../public/tecnologias/GitHub Actions.png'
import html5 from '../../public/tecnologias/HTML5.png'
import core from '../../public/tecnologias/NET core.png'
import next from '../../public/tecnologias/Next.js.png'
import redux from '../../public/tecnologias/Redux.png'
import sass from '../../public/tecnologias/Sass.png'
import swagger from '../../public/tecnologias/Swagger.png'
import tailwind from '../../public/tecnologias/Tailwind CSS.png'
import vite from '../../public/tecnologias/Vite.js.png'
import angular from '../../public/tecnologias/Angular.png'
import ContainerExperiencia from './container-experiencia/container-experiencia'
import itau from '../../public/itau.png'
import { faChevronDown, faPhoneVolume, faEnvelopeOpenText, faCopy  } from '@fortawesome/free-solid-svg-icons'; 
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const inter = Inter({ subsets: ['latin'] });

export default function Curriculo() {

  const  tecnologias = [
    {img: html5, nome: 'HTML5'},
    {img: css3, nome: 'CSS3'},
    {img: sass, nome: 'Sass'},
    {img: bootstrap, nome: 'Bootstrap'},
    {img: tailwind, nome: 'Tailwind'},
    {img: javascript, nome: 'JavaScript'},
    {img: typescript, nome: 'TypeScript'},
    {img: angular, nome: 'Angularr'},
    {img: jest, nome: 'Jest'},
    {img: react, nome: 'React'},
    {img: redux, nome: 'Redux'},
    {img: vite, nome: 'Vite.js'},
    {img: node, nome: 'Node'},
    {img: next, nome: 'Next.js'},
    {img: express, nome: 'Express'},
    {img: three, nome: 'Three.js'},
    {img: aws, nome: 'AWS'},
    {img: csharp, nome: 'C#'},
    {img: core, nome: 'NET core'},
    {img: swagger, nome: 'Swagger'},
    {img: git, nome: 'Git'},
    {img: actions, nome: 'GitHub Actions'},
  ]


  const textosParaExperiencias = {
    estagio: ['Brainstormed new ideas & gathered requirements for internal projects.',
      'Developed a web application using React, Redux, and Node.js.',
      'Collaborated with cross-functional teams to deliver high-quality software.',
      'Participated in code reviews to ensure best practices and maintain code quality.',
      'Contributed to the development of a RESTful API using Express and Node.js.',
    ],
    junior: ['developed a web application using React, Redux, and Node.js.',
      'collaborated with cross-functional teams to deliver high-quality software.',
      'Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.',
    ],
  }

  const handleOnClickCopy = (text) => {
    navigator.clipboard.writeText(text)
  }

  
  return (
    
    <div className={`${inter.className} text-gray-600`} id="curriculo">


      {/* HERO */}
      <div id='hero'>
        <div className='textos-hero'>
          <div>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white'>
              Hi, I'm Otavio! 
              <motion.span
                className="ml-2 inline-block"
                animate={{ rotate: [0, 20, 0]}} // Vai para 20° e volta
                transition={{
                  duration: 1, // Duração de um ciclo
                  repeat: Infinity, // Repetição infinita
                  repeatType: "loop", // Faz loop
                  ease: "easeInOut",
                }}
              >
                👋
              </motion.span>
            </h1>
            <p>
            I'm a full stack developer with a focus on creating exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
            Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
            </p>
          </div>

          <div className='textos-localizacao'>
            <span className='flex items-center'>
              <FontAwesomeIcon className='icon-hero mr-2' icon={faStreetView} />
              <p>São Paulo, Brazil</p>
            </span>
            <span className='flex items-center'>
              <FontAwesomeIcon className='icon-hero icon-hero-check mr-2' icon={faCheck} />
              <p>Available for new projects</p>
            </span>
          </div>
          
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.01 }} className='img-minha'>
            <Image src={profile} alt='minha foto pessoal' ></Image>
        </motion.div>
      </div>
      {/* Fim do HERO */}

      

      {/* ABAUME */}
      <div id='about-me'>

      <MiniToken texto='About Me' mt={true} />
      
      <div className='grid-about-me'>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.01 }} className='img-minha'>
              <Image src={profile} alt='minha foto pessoal' ></Image>
        </motion.div>
          <div className='textos-hero'>
            <div>
              <h1 className='text-2xl lg:text-3xl font-bold text-white'>
                Curious about me? Here you have it:
              </h1>
              <p>
              I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am enthusiastic about bringing 
              the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant 
              code matters to me.
              </p>
              <p>
              I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and 
              learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building 
              cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
              </p>
              <p>
              I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
              </p>
              <p>
              When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early 
              startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on 
              GitHub.
              </p>
              <p>
              Finally, some quick bits about me.
              </p>
              <p>
              B.E. in Computer Engineering
              Full time freelancer
              Avid learner
              Aspiring indie hacker
              </p>
              <p>
              One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
            
          </div>
      </div>
        
      </div>
      {/* Fim do Abaume */}






      {/* Skills */}
      <div id='skills'>

      <MiniToken texto='Skills' mt={true} />

      <p>The skills, tools and technologies I am really good at:</p>
      
      <BlocoTecnologia lst={tecnologias}/>
        
      </div>






      {/* experience */}
      <div id='experience'>

      <MiniToken texto='Experience' mt={true} />
      
      <p>Here is a quick summary of my most recent experiences:</p>

      <ContainerExperiencia img={itau} titulo='Itau Fullstack intern' textosListados={textosParaExperiencias.estagio} tempo='Oct 2023 - Jan 2025'></ContainerExperiencia>
      <FontAwesomeIcon icon={faChevronDown} />
      <ContainerExperiencia img={itau} titulo='Itau Junior Front-End Developer' textosListados={textosParaExperiencias.junior} tempo='Jan 2025 - Present'></ContainerExperiencia>
        
      </div>
      {/* Fim do experience */}


      {/* mim toqui */}
      <div id='touch'>

      <MiniToken texto='Get In Touch' mt={true} />
      
      <p>What’s next? Feel free to reach out to me if you are looking <br/> for a developer, have a query, or simply want to connect.</p>

      <div className='email-div'>
        <FontAwesomeIcon icon={faEnvelopeOpenText} />
        <p className='text-2xl lg:text-3xl font-bold text-white'>
          otaviofina@gmail.com
        </p>
        <FontAwesomeIcon icon={faCopy} className='copy' onClick={handleOnClickCopy('otaviofina@gmail.com')}/>
      </div>
      <div className='number-div'>
        <FontAwesomeIcon icon={faPhoneVolume} />
        <p className='text-2xl lg:text-3xl font-bold text-white'>
          +55 11 970547222
        </p>
        <FontAwesomeIcon icon={faCopy} className='copy' onClick={handleOnClickCopy('+55 11 970547222')}/>
      </div>

      <p style={{fontSize: '0.9rem'}}>You may also find me on these platforms!</p>
      <div className='email-div contato'>
        <a href="https://github.com/Otavio-Fina" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://linkedin.com/in/otavio-fina" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>


      </div>
      {/* Fim do mim toqui */}
              

    </div>
  );
}
