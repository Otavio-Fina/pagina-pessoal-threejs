'use client';

import "./canva.css";
import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { gsap } from "gsap/gsap-core";
import { Vector3 } from "three";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import Curriculo from "@/components/curriculo";
import { createRoot } from "react-dom/client";



export default function Canva() {
  const canvasRef = useRef(null);
  const rootSkyRef = useRef(null);
  const rootQuartoRef = useRef(null);
  const rootMewRef = useRef(null);
  const rootCharizardRef = useRef(null);
  const rootRaichuRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const pointerRef = useRef(null);
  const rootRayRef = useRef(null);
  const iframePCRef = useRef(null);
  const iframeTVRef = useRef(null);
  const pokemonDeveAparecerRef = useRef(
    {
      'mew': false,
      'ray': false,
      'charizard': false,
      'raichu': false
    }
  );
  const direcaoQueOPokeVaiAparecerRef = useRef(
    {
      'mew': 'esq',
      'ray': 'esq',
      'charizard': 'esq',
      'raichu': 'esq'
    }
  );

  useEffect(() => {
    if (!canvasRef.current) return;
    

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 40;
    camera.position.y = 4;
    cameraRef.current = camera;
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2(999999,999999)
    const filteredObjectsParaIntersect = []; // Lista de objetos específicos a serem destacado
    const mixers = [];
    const clock = new THREE.Clock();
    
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer; 
    
    const composer = new EffectComposer(renderer)
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const outlinePass = new OutlinePass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      scene,
      camera
    );
    outlinePass.edgeStrength = 4;
    outlinePass.edgeGlow = 0.2;
    outlinePass.edgeThickness = 1;
    outlinePass.pulsePeriod = 1.5;
    outlinePass.visibleEdgeColor.set('#ffffff');
    outlinePass.hiddenEdgeColor.set('#000000');
    composer.addPass(outlinePass);

    const cssRenderer = new CSS3DRenderer();
    cssRenderer.setSize(window.innerWidth, window.innerHeight);
    cssRenderer.domElement.style.position = 'absolute';
    cssRenderer.domElement.style.top = '0';
    cssRenderer.domElement.style.left = '0';
    document.body.appendChild(cssRenderer.domElement);

    const reactDiv = document.createElement('div');
    reactDiv.style.width = '100px';
    reactDiv.style.height = '100px';
    reactDiv.style.overflow = 'hidden'; // Opcional: controlar o layout interno

    document.body.appendChild(reactDiv); // Adiciona ao DOM antes de usar

    const root = createRoot(reactDiv); // Cria a raiz React
    root.render(<Curriculo />); // Renderiza o componente React

    const cssObject = new CSS3DObject(reactDiv);
    cssObject.position.set(-5, 1, 1);
    cssObject.visible = false;
    cssObject.scale.set(0.15, 0.1, 0.1);
    scene.add(cssObject);
    console.log(cssObject.position);
    
    
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.3, // brilho
      0.2, // intensidade do brilho
      0.85  // limiar de brilho
    );
    composer.addPass(bloomPass);

    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(0, 5, 5);
    scene.add(light);

    // Configuração do OrbitControls
    const controls = new OrbitControls(camera, cssRenderer.domElement);
    controls.enableZoom = true;
    controls.enablePan = false; //drag com mouse
    controls.enableDamping = true; //suavizaçao
    controls.dampingFactor = 1; //(valor padrão é 0.05)
    controls.rotateSpeed = -0.25;
    controls.keys = {
      LEFT: 'ArrowLeft', 
      UP: 'ArrowUp', 
      RIGHT: 'ArrowRight',
      BOTTOM: 'ArrowDown' 
    }
    controls.minDistance = 8; 
    controls.maxDistance = 42; 
    controlsRef.current = controls;

    // Loader do modelo
    const loaderSky = new GLTFLoader();
    loaderSky.load(
      '/assets/sky.glb',
      (glb) => {
        const rootSky = glb.scene;
        rootSky.scale.set(10, 10, 10);
        rootSky.position.z = 50
        rootSky.position.y = 3
        rootSky.receiveShadow = true;
        scene.add(rootSky);
        rootSkyRef.current = rootSky;
        console.log(rootSky)
      },
      (xhr) => {
        console.log('Loading model...', (xhr.loaded / xhr.total) * 100 + '%');
      },
      (err) => {
        console.error('An error occurred while loading the model.', err);
      }
    );


    // decidir a posiçao dos modelos
    const GetRandomZeY = () => {
      let eixoY, eixoZ;
    
      do {
        eixoY = Math.floor(Math.random() * (6 + 3 + 1)) - 3; // de -3 a 6
        eixoZ = Math.floor(Math.random() * (36 + 5 + 1)) - 5; // de -5 a 36
      } while ((-5 < eixoY && eixoY < 5) && (6 < eixoZ && eixoZ < 15));
    
      return { z: eixoZ, y: eixoY };
    };

    const loaderQuarto = new GLTFLoader();
    loaderQuarto.load(
      '/assets/pokemon_firered_-_players_room.glb',
      (glb) => {
        const rootQuarto = glb.scene;
        rootQuarto.scale.set(1, 1, 1);
        rootQuarto.position.z = 10
        rootQuarto.position.y = -1
        rootQuarto.receiveShadow = true;
        scene.add(rootQuarto);
        rootQuartoRef.current = rootQuarto;
        const specificObjects = ['TV_fireRed_material_0', 'Computer_fireRed_material_0', 'NES_fireRed_material_0'];
        
        specificObjects.forEach((name) => {
          const obj = rootQuarto.getObjectByName(name);
          obj && filteredObjectsParaIntersect.push(obj);
        });
          },
      (xhr) => {
        console.log('Loading model...', (xhr.loaded / xhr.total) * 100 + '%');
      },
      (err) => {
        console.error('An error occurred while loading the model.', err);
      }
    );





    const loaderMew = new GLTFLoader();
    loaderMew.load(
      '/assets/mew_-_flying_comp.glb',
      (glb) => {
        const rootMew = glb.scene;
        rootMew.scale.set(0.3, 0.3, 0.3);
        let coords = GetRandomZeY();
        rootMew.position.z = coords.z
        rootMew.position.y = coords.y
        rootMew.position.x = 25
        rootMew.rotation.y = - Math.PI / 2
        rootMew.castShadow = true;
        scene.add(rootMew);
        rootMewRef.current = rootMew;

        const mixer = new THREE.AnimationMixer( rootMew );
				mixer.clipAction( glb.animations[ 0 ] ).setDuration( 14 ).play();
				mixers.push( mixer );
      },
      (xhr) => {
        console.log('Loading model...', (xhr.loaded / xhr.total) * 100 + '%');
      },
      (err) => {
        console.error('An error occurred while loading the model.', err);
      }
    );

    const loaderRay = new GLTFLoader();
    loaderRay.load(
      '/assets/rayquaza_comp.glb',
      (glb) => {
        const rootRay = glb.scene;
        rootRay.scale.set(0.01, 0.01, 0.01);
        let coords = GetRandomZeY();
        rootRay.position.z = coords.z
        rootRay.position.y = coords.y
        rootRay.position.x = 30
        rootRay.rotation.y = - Math.PI / 2
        rootRay.castShadow = true;
        rootRayRef.current = rootRay;
        scene.add(rootRay);

        const mixer = new THREE.AnimationMixer( rootRay );
				mixer.clipAction( glb.animations[ 0 ] ).setDuration( 15 ).play();
				mixers.push( mixer );
      },
      (xhr) => {
        console.log('Loading model...', (xhr.loaded / xhr.total) * 100 + '%');
      },
      (err) => {
        console.error('An error occurred while loading the model.', err);
      }
    );

    const loaderCharizard = new GLTFLoader();
    loaderCharizard.load(
      '/assets/charizard_comp.glb',
      (glb) => {
        const rootCharizard = glb.scene;
        rootCharizard.scale.set(1.3, 1.3, 1.3);
        let coords = GetRandomZeY();
        rootCharizard.position.z = coords.z 
        rootCharizard.position.y = coords.y
        rootCharizard.position.x = 25
        rootCharizard.rotation.y = - Math.PI / 2
        rootCharizard.castShadow = true;
        scene.add(rootCharizard);
        rootCharizardRef.current = rootCharizard;

        const mixer = new THREE.AnimationMixer( rootCharizard );
				mixer.clipAction( glb.animations[ 0 ] ).setDuration( 6 ).play();
				mixers.push( mixer );
      },
      (xhr) => {
        console.log('Loading model...', (xhr.loaded / xhr.total) * 100 + '%');
      },
      (err) => {
        console.error('An error occurred while loading the model.', err);
      }
    );

    const loaderRaichu = new GLTFLoader();
    loaderRaichu.load(
      '/assets/raichu_comp.glb',
      (glb) => {
        const rootRaichu = glb.scene;
        rootRaichu.scale.set(1, 1, 1);
        let coords = GetRandomZeY();
        rootRaichu.position.z = coords.z
        rootRaichu.position.y = coords.y
        rootRaichu.position.x = 25
        rootRaichu.rotation.y = - Math.PI / 2
        rootRaichu.castShadow = true;
        scene.add(rootRaichu);
        rootRaichuRef.current = rootRaichu;

        const mixer = new THREE.AnimationMixer( rootRaichu );
				mixer.clipAction( glb.animations[ 0 ] ).setDuration( 3 ).play();
				mixers.push( mixer );
      },
      (xhr) => {
        console.log('Loading model...', (xhr.loaded / xhr.total) * 100 + '%');
      },
      (err) => {
        console.error('An error occurred while loading the model.', err);
      }
    )

    const DeveVirDaEsquerdaOuDaDireita = (poke) => {
      const random = Math.floor(Math.random() * 2)
      switch (poke) {
        case 'mew':
          if(rootMewRef.current){
            if(!pokemonDeveAparecerRef.current[poke])
              {
                random == 1 ? rootMewRef.current.rotation.y *= -1 : null;//vai para a direita -->
                random == 1 ? rootMewRef.current.position.x *= -1 : null;
                direcaoQueOPokeVaiAparecerRef.current[poke] = random == 1 ? 'dir' : 'esq'
              }
          }
          break;
        case 'ray':
          if(rootRayRef.current)
            {
              if(!pokemonDeveAparecerRef.current[poke])
                {
                  random == 1 ? rootRayRef.current.rotation.y *= -1 : null;
                  random == 1 ? rootRayRef.current.position.x *= -1 : null;
                  direcaoQueOPokeVaiAparecerRef.current[poke] = random == 1 ? 'dir' : 'esq';
                }
            }
          break;
        case 'charizard':
          if(rootCharizardRef.current)
            {
              if(!pokemonDeveAparecerRef.current[poke])
                {
                  random == 1 ? rootCharizardRef.current.rotation.y *= -1 : null;
                  random == 1 ? rootCharizardRef.current.position.x *= -1 : null;
                  direcaoQueOPokeVaiAparecerRef.current[poke] = random == 1 ? 'dir' : 'esq';
                }
            }
          break;
          case 'raichu':
            if(rootRaichuRef.current)
              {
                if(!pokemonDeveAparecerRef.current[poke])
                  {
                    random == 1 ? rootRaichuRef.current.rotation.y *= -1 : null;
                    random == 1 ? rootRaichuRef.current.position.x *= -1 : null;
                    direcaoQueOPokeVaiAparecerRef.current[poke] = random == 1 ? 'dir' : 'esq';
                  }
              }
            break;
      }
    };

    const RamdomParaPokemonAparecer = (poke) => {
      if(!pokemonDeveAparecerRef.current[poke])
      {
        let random = Math.floor(Math.random() * (360 + 1));
        if (random == 69)
        {
          pokemonDeveAparecerRef.current[poke] = true
        }
      }
    }

    const MovePokemonAroundX = (poke) => {
      switch (poke) {
        case 'mew':
          if(pokemonDeveAparecerRef.current['mew'])
          {
            if(rootMewRef.current)
              {
                if ((rootMewRef.current.position.x < -25 && direcaoQueOPokeVaiAparecerRef.current['mew'] == 'esq') 
                    || 
                    (rootMewRef.current.position.x > 25 && direcaoQueOPokeVaiAparecerRef.current['mew'] == 'dir'))
                  {
                    rootMewRef.current.position.x = 25;
                    rootMewRef.current.rotation.y = - Math.PI / 2;
                    let coords = GetRandomZeY();
                    rootMewRef.current.position.y = coords.y;
                    rootMewRef.current.position.z = coords.z;
                    pokemonDeveAparecerRef.current['mew'] = false
                    break;
                  }
                direcaoQueOPokeVaiAparecerRef.current['mew'] == 'esq' ? rootMewRef.current.position.x -= 0.07 : rootMewRef.current.position.x += 0.07
                rootMewRef.current.position.y += Math.sin( clock.getElapsedTime() ) * 0.02;
                //rootMewRef.current.rotation.y += Math.sin( clock.getElapsedTime() ) * 0.003;
                rootMewRef.current.rotation.y += Math.sin( clock.getElapsedTime() ) * 0.1;
              }
          }
          break;
        case 'ray':
          if(pokemonDeveAparecerRef.current['ray'])
          {
            if(rootRayRef.current)
              {
                if ((rootRayRef.current.position.x < -30 && direcaoQueOPokeVaiAparecerRef.current['ray'] == 'esq') 
                  || 
                  (rootRayRef.current.position.x > 30 && direcaoQueOPokeVaiAparecerRef.current['ray'] == 'dir'))
                  {
                    rootRayRef.current.position.x = 30;
                    rootRayRef.current.rotation.y = - Math.PI / 2;
                    let coords = GetRandomZeY();
                    rootRayRef.current.position.y = coords.y;
                    rootRayRef.current.position.z = coords.z;
                    pokemonDeveAparecerRef.current['ray'] = false
                    break;
                  } 
                direcaoQueOPokeVaiAparecerRef.current['ray'] == 'esq' ? rootRayRef.current.position.x -= 0.05 : rootRayRef.current.position.x += 0.05
                rootRayRef.current.position.y += Math.sin( clock.getElapsedTime() ) * 0.01;
              }
          }
          break;
        case 'charizard':
          if(pokemonDeveAparecerRef.current['charizard'])
          {
            if(rootCharizardRef.current)
              {
                if ((rootCharizardRef.current.position.x < -25 && direcaoQueOPokeVaiAparecerRef.current['charizard'] == 'esq') 
                  || 
                  (rootCharizardRef.current.position.x > 25 && direcaoQueOPokeVaiAparecerRef.current['charizard'] == 'dir'))
                  {
                    rootCharizardRef.current.position.x = 25;
                    rootCharizardRef.current.rotation.y = - Math.PI / 2;
                    let coords = GetRandomZeY();
                    rootCharizardRef.current.position.y = coords.y;
                    rootCharizardRef.current.position.z = coords.z;
                    pokemonDeveAparecerRef.current['charizard'] = false
                    break;
                  }
                direcaoQueOPokeVaiAparecerRef.current['charizard'] == 'esq' ? rootCharizardRef.current.position.x -= 0.1 : rootCharizardRef.current.position.x += 0.1
                rootCharizardRef.current.position.y += Math.sin( clock.getElapsedTime() ) * 0.05;
                rootCharizardRef.current.rotation.y += Math.sin( clock.getElapsedTime() ) * 0.003;
              }
          }
          break;
        case 'raichu':
          if(pokemonDeveAparecerRef.current['raichu'])
          {
            if(rootRaichuRef.current)
              {
                if ((rootRaichuRef.current.position.x < -25 && direcaoQueOPokeVaiAparecerRef.current['raichu'] == 'esq') 
                  || 
                  (rootRaichuRef.current.position.x > 25 && direcaoQueOPokeVaiAparecerRef.current['raichu'] == 'dir'))
                  {
                    rootRaichuRef.current.position.x = 25;
                    rootRaichuRef.current.rotation.y = - Math.PI / 2;
                    let coords = GetRandomZeY();
                    rootRaichuRef.current.position.y = coords.y;
                    rootRaichuRef.current.position.z = coords.z;
                    pokemonDeveAparecerRef.current['raichu'] = false
                    break;
                  }
                direcaoQueOPokeVaiAparecerRef.current['raichu'] == 'esq' ? rootRaichuRef.current.position.x -= 0.035 : rootRaichuRef.current.position.x += 0.035
                rootRaichuRef.current.position.y += Math.sin( clock.getElapsedTime() ) * 0.02;
                rootRaichuRef.current.rotation.y += Math.sin( clock.getElapsedTime() ) * 0.01;
              }
          }
          break;
        default:
          break;
      }
    }

     







    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };

    const onPointerMove = ( event ) => {

      // calculate pointer position in normalized device coordinates
      // (-1 to +1) for both components
    
      pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
      pointerRef.current = pointer;
    
    }

    const GetPositionObject = (object) => {
      let position = new Vector3(0,0,0);
      switch (object.name) {
          case 'TV_fireRed_material_0':
              position = new Vector3(0.4, 0, 2.7);
              return position;
          case 'NES_fireRed_material_0':
              position = new Vector3(0.4, 0, 2.7);
              return position;
          case 'Computer_fireRed_material_0':
              position = new Vector3(-4.35, 0.35, 0.25);
              return position;
          default:
              position = new Vector3(0, 10, 25);
              return position;
      }
    }

    const RevelarIframeAoClick = (object) => {
      switch (object.name) {
          case 'TV_fireRed_material_0':
              iframeTVRef.current.style.display = 'block';
              break;
          case 'NES_fireRed_material_0':
              iframeTVRef.current.style.display = 'block';
              break;
          case 'Computer_fireRed_material_0':
              cssObject.visible= true;
              break;
          default:
              null
      }
    }

    const onPointerClick = ( event ) => {
      pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(filteredObjectsParaIntersect ,false);

      if (intersects.length > 0)
      {
        const clickedObject = intersects[0].object;
        //clickedObject.material.color.set(0x00ff00);

        const targetPosition =  GetPositionObject(clickedObject);

        controls.dampingFactor = false;


        gsap.to(camera.position, {
          x: targetPosition.x,
          y: targetPosition.y,
          z: targetPosition.z + 1,
          duration: 1.2,
          ease: 'power2.out',
          onUpdate: () => {
            camera.lookAt(targetPosition); // Mantém o foco no objeto
            controls.target.copy(targetPosition); // Atualiza o alvo do OrbitControl
            controls.update(); // Aplica as mudanças
          },
          onComplete: () => {
            controls.target.copy(targetPosition); // Garante que o foco seja a posição-alvo no final
            controls.enabled = false; // Desativa os controles
            controls.update(); // Atualiza o OrbitControls
            RevelarIframeAoClick(clickedObject);
          },
        });
    
        // Atualizar o OrbitControls após a animação
        gsap.to(controls.target, {
          x: targetPosition.x,
          y: targetPosition.y,
          z: targetPosition.z,
          duration: 1.2,
          ease: 'power2.out',
        });
      }
    }


    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);


      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(filteredObjectsParaIntersect, false);

      //condicional para voltar ao original apos mouseoff
      if (intersects.length > 0) {
        const intersectedObject = intersects[0].object;
        outlinePass.selectedObjects = [intersectedObject];
      }  else { // Destaca o objeto atualmente intersectado
        outlinePass.selectedObjects = []; // Substitua pelo original
      }

      const delta = clock.getDelta();

				for ( let i = 0; i < mixers.length; i ++ ) {

					mixers[ i ].update( delta );

				}

        for(let pkmn of ['mew', 'ray', 'charizard', 'raichu'])
          {
            RamdomParaPokemonAparecer(pkmn);
            DeveVirDaEsquerdaOuDaDireita(pkmn);
            MovePokemonAroundX(pkmn);
          }

      
      controls.update(); 
      cssRenderer.render(scene, camera);
      composer.render();
      //renderer.render(scene, camera); 
    };

    animate();


    window.addEventListener('resize', onWindowResize);
    window.addEventListener( 'pointermove', onPointerMove );
    window.addEventListener( 'click', onPointerClick );

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      renderer.dispose();
      composer.dispose();
      cssRenderer.dispose();
      document.body.removeChild(cssRenderer.domElement);
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener( 'pointermove', onPointerMove );
      window.removeEventListener( 'click', onPointerClick );
    };
  }, []);

  return (
    <> 
      <div id="iframe-PC" ref={iframePCRef}>
        <Curriculo/>      
      </div>
      <div id="iframe-TV" ref={iframeTVRef}>
        <iframe src="https://www.youtube.com/watch?v=TbBfsrDzHTU" title="Iframe Example"></iframe>
      </div>
      <canvas id="three-canvas" ref={canvasRef}/>
    </>
  );
} 

