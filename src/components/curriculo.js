'use client';
import './curriculo.css';
import { Inter } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStreetView, faCheck } from '@fortawesome/free-solid-svg-icons';
import { motion } from "motion/react"
import gsap from "gsap";
import Image from 'next/image'
import profile from '../../public/eu.jpg'
import githubFinder from '../../public/projetos/github_finder.png'
import form from '../../public/projetos/form.png'
import profile2 from '../../public/eu2.png'
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
import ContainerProjetos from './container-projetos/container-projetos';
import itau from '../../public/itau.png'
import countries from '../../public/projetos/countries.png'
import { faChevronDown, faPhoneVolume, faEnvelopeOpenText, faCopy, faUserGraduate  } from '@fortawesome/free-solid-svg-icons'; 
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useRef } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Curriculo() {

  const minhaImg1 = useRef(null);
  const minhaImg2 = useRef(null);
  const linhaQueVaiEVolta = useRef(null);
  const linhaQueVaiEVolta2 = useRef(null);

  const handleMouseEnterImgPerfil = (tag) => {
    gsap.to(tag, { boxShadow: "0px 0px 0px rgb(185, 185, 185, 0.3)", duration: 0.2, ease: "power2.inOut" });
  }

  const handleMouseOutImgPerfil = (tag) => {
    gsap.to(tag, { boxShadow: "40px 40px 0px rgb(185, 185, 185, 0.3)", duration: 0.2, ease: "power2.inOut" });
  }

  useEffect(() => {
    const img1 = minhaImg1.current;
    const img2 = minhaImg2.current;

    img1.addEventListener("mouseenter", () => handleMouseEnterImgPerfil(img1));
    img1.addEventListener("mouseout", () => handleMouseOutImgPerfil(img1));
    img2.addEventListener("mouseenter", () => handleMouseEnterImgPerfil(img2));
    img2.addEventListener("mouseout", () => handleMouseOutImgPerfil(img2));

    // Cleanup
    return () => {
      img1.removeEventListener("mouseenter", () => handleMouseEnterImgPerfil(img1));
      img1.removeEventListener("mouseout", () => handleMouseOutImgPerfil(img1));
      img2.removeEventListener("mouseenter", () => handleMouseEnterImgPerfil(img2));
      img2.removeEventListener("mouseout", () => handleMouseOutImgPerfil(img2));
    };
  }, []);

  useEffect(() => {
    //const tl = gsap.timeline({repeat: -1, repeatDelay: 1, yoyo: true});


        const applyAnimacaoVaiEVolta = (obj , delay) => {
          const tl = gsap.timeline({repeat: -1, repeatDelay: delay, yoyo: true});
          tl.set(obj, { transformOrigin: "left center" })
        .fromTo(obj, { scaleX: 0}, {
            scaleX: 1,
            duration: 0.5,
            ease: 'sine.in',
        })
        .set(obj, { transformOrigin: "right center" })
        .fromTo(obj, {scaleX: 1},{
          scaleX: 0, 
          duration: 0.5, 
          ease: "sine.out", 
      })
      .set(obj, { transformOrigin: "right center" })
      .fromTo(obj,{scaleX: 0}, {
          scaleX: 1,
          duration: 0.5, 
          ease: "sine.out",
      }) 
      .set(obj, { transformOrigin: "left center" })
        .fromTo(obj, {scaleX: 1},{
            scaleX: 0,
            duration: 0.5,
            ease: 'sine.in',
        })
        }

        applyAnimacaoVaiEVolta(linhaQueVaiEVolta.current, 1);
        applyAnimacaoVaiEVolta(linhaQueVaiEVolta2.current, 1.5);

  }, []);

  const  tecnologias = [
    {img: html5, nome: 'HTML5'},
    {img: css3, nome: 'CSS3'},
    {img: sass, nome: 'Sass'},
    {img: bootstrap, nome: 'Bootstrap'},
    {img: tailwind, nome: 'Tailwind'},
    {img: javascript, nome: 'JavaScript'},
    {img: typescript, nome: 'TypeScript'},
    {img: angular, nome: 'Angular'},
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
    {img: core, nome: '.NET core'},
    {img: swagger, nome: 'Swagger'},
    {img: git, nome: 'Git'},
    {img: actions, nome: 'GitHub Actions'},
  ]


  const textosParaExperiencias = {
    estagio: ['Brainstormed new ideas & gathered requirements for internal projects.',
      'Worked on a full-cycle project, from ideation to deployment.',
      'Contributed to involve either in the front-end or the back-end development.',
      'Participated in code reviews to ensure best practices and maintain code quality.',
      'Contributed to accessibility and user experience.',
    ],
    junior: ['Developed a Full-stack web application.',
      'Collaborated with cross-functional teams to deliver high-quality software.',
      'Considered all aspects of an application, including performance and scalability.',
    ],
  }

  const handleOnClickCopy = (text) => {
    if (typeof window !== 'undefined' && navigator?.clipboard) {
      navigator.clipboard.writeText(text);
    }
  }

  useEffect(() => {
    gsap.fromTo("#curriculo", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, [location.href]);
  
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
            I'm a full-stack developer with a focus on creating exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
            I really love what  I'm doing and my goal is to get on big projects and work with amazing people.
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
            <span className='flex items-center quebrada'>
              <FontAwesomeIcon className='icon-hero mr-2' icon={faUserGraduate} />
              <p>Bachelor's degree in progress in Computer Science <br/> at the Federal University of ABC</p>
            </span>
          </div>
          
        </div>
        <motion.div ref={minhaImg1} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.01 }} className='img-minha'>
            <Image src={profile} alt='minha foto pessoal' ></Image>
        </motion.div>
      </div>
      {/* Fim do HERO */}

      

      {/* ABAUME */}
      <div id='about-me'>

      <section id='about-me'>
      <MiniToken texto='About Me' mt={true} />
      </section>
      
      <div className='grid-about-me'>

        <motion.div ref={minhaImg2} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.01 }} className='img-minha img-minha2'>
              <Image src={profile2} alt='minha foto pessoal' ></Image>
        </motion.div>
          <div className='textos-hero'>
            <div>
              <h1 className='text-2xl lg:text-3xl font-bold text-white'>
                Curious about me? Here you have it:
              </h1>
              <p>
              I'm a young and energetic developer who really enjoys creating things. I'm always looking for challenges and opportunities to grow, and I'm not afraid to take big steps.
              I'm constantly searching for new innovations and ways to put my creativity and knowledge into practice. Growing, developing, and evolving as a developer motivates me and makes me happy in my career.
              </p>
              <p>
              Since high school, I have loved learning and discovering how to do things that seem impossible. 
              I started learning how to code when I was 15 years old, and since then, I have specialized in web development. I feel genuinely happy when I realize that I can create anything 
              I imagine in this environment and have fun while doing it.
              </p>
              <p>
              Even before starting high school, I had already learned a lot about web technologies such as React and its ecosystem. Now, I focus on gaining knowledge in all the relevant technologies in 
              the current market, including React, Angular, TypeScript, Next.js, Node.js, Vite, GitHub Actions, AWS, and others. While my focus is on these technologies, throughout my experience in the industry, 
              I've always been eager to learn anything that could be useful for the team, such as Back-End development with .NET Core, PostgreSQL, Clean Architecture, and many more.
              </p>
              <p>
              When I'm not in full-on developer mode, you can find me hanging up with my friends or doing some sport. I really value taking time for myself and staying healthy.
              </p>
              <p>
              Finally, some quick bits about me.
              </p>
              <ul className='texto-listado'>
              <li key={1}>B.E. in Computer Engineering on progress</li>
              <li key={2}>Creative thinker</li>
              <li key={3}>Good vibes propagator</li>
              <li key={4}>Ready to learn</li>
              </ul>
              <p>
              One last thing, I'm available to chat, so feel free to reach out and say hello! I promise I don't bite <motion.span
              className='inline-block'
              animate={{ rotate: [-20, 20, -20]}} 
              transition={{
                duration: 1, // Duração de um ciclo
                repeat: Infinity, // Repetição infinita
                repeatType: "loop", // Faz loop
                ease: "easeInOut",
              }}>😉</motion.span>
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

      <section id='experience'>
        <MiniToken texto='Experience' mt={true} />
      </section>
      
      <p>Here is a quick summary of my most recent experiences:</p>

      <ContainerExperiencia img={itau} titulo='Itaú Full-stack Intern' textosListados={textosParaExperiencias.estagio} tempo='Oct 2023 - Jan 2025' linkParaEmpresa='https://www.linkedin.com/company/itau/posts/?feedView=all'></ContainerExperiencia>
      <FontAwesomeIcon icon={faChevronDown} />
      <ContainerExperiencia img={itau} titulo='Itaú Junior Front-End Developer' textosListados={textosParaExperiencias.junior} tempo='Jan 2025 - Present'  linkParaEmpresa='https://www.linkedin.com/company/itau/posts/?feedView=all'></ContainerExperiencia>
        
      </div>
      {/* Fim do experience */}



      {/* projects */}
      <div id='projects'>
      
      <section id='projects'>
        <MiniToken texto='Projects' mt={true} />
      </section>

      <p>Some of the noteworthy projects I have built:</p>
      
      <ContainerProjetos img={countries} titulo='Countries API Consumer' 
      texto="This is a Frontend Mentor challange about build a Countries API Consumer with search methods and diferents themes." 
      tecnologias={['Bootstrap', 'Postman', 'TypeScript', 'Angular', 'APIs', 'SCSS']}
      links={{github: 'https://github.com/Otavio-Fina/Rest-Countries-API', live: 'https://rest-countries-api-byotaviofina.vercel.app/'}} />
      <FontAwesomeIcon icon={faChevronDown} />
      <ContainerProjetos img={form} titulo='React Redux Forms' 
      texto="This is a SPA about build a multi step form with React, Redux and Typescript." 
      tecnologias={['Bootstrap', 'SCSS', 'TypeScript', 'React', 'Vite', 'React-Hook-Forms']}
      links={{github: 'https://github.com/Otavio-Fina/multi-step-form-main', live: 'https://otavio-fina.github.io/multi-step-form-main/'}} />
      <FontAwesomeIcon icon={faChevronDown} />
      <ContainerProjetos img={githubFinder} titulo='GitHub Search' 
      texto="A React SPA that allows you to search for GitHub profiles." 
      tecnologias={['Bootstrap', 'React', 'TypeScript', 'Vite', 'SCSS']}
      links={{github: 'https://github.com/Otavio-Fina/react-github-perfil-finder', live: 'https://otavio-fina.github.io/react-github-perfil-finder/dist'}} />

        
      </div>


      {/* mim toqui */}
      <div id='touch'>

      <section id='contact'>
        <MiniToken texto='Get in touch' mt={true} />
      </section>
      
      <p>What’s next? Feel free to reach out to me if you are looking <br/> for a developer, have a query, or simply want to connect.</p>

      <div className='email-div'>
        <FontAwesomeIcon icon={faEnvelopeOpenText} />
        <div>
          <p className='text-2xl lg:text-3xl font-bold text-white'>
            otaviofina@gmail.com
          </p>
          <div className='vai-e-volta' ref={linhaQueVaiEVolta}></div>
        </div>
        <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} style={{padding:0}}><FontAwesomeIcon icon={faCopy} className='copy' onClick={handleOnClickCopy('otaviofina@gmail.com')}/></motion.div>
      </div>
      <div className='number-div'>
      <FontAwesomeIcon icon={faPhoneVolume} />
        <div>
          <p className='text-2xl lg:text-3xl font-bold text-white'>
            +55 11 970547222
          </p>
          <div className='vai-e-volta' ref={linhaQueVaiEVolta2}></div>
        </div>
        <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} style={{padding:0}}><FontAwesomeIcon icon={faCopy} className='copy' onClick={handleOnClickCopy('+55 11 970547222')}/></motion.div>
      </div>

      <p style={{fontSize: '0.9rem'}}>You may also find me on these platforms!</p>
      <div className='email-div contato'>
        <a href="https://github.com/Otavio-Fina" target="_blank" rel="noopener noreferrer">
          <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} style={{padding:0}}><FontAwesomeIcon icon={faGithub} /></motion.div>
        </a>
        <a href="https://linkedin.com/in/otavio-fina" target="_blank" rel="noopener noreferrer">
          <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} style={{padding:0}}><FontAwesomeIcon icon={faLinkedinIn} /></motion.div>
        </a>
      </div>


      </div>
      {/* Fim do mim toqui */}
              

    </div>
  );
}
