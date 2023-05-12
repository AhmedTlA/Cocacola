import { Routes, Route } from 'react-router'
import { Link } from 'react-router-dom'
import Sprite from './productes/Sprite'
import Fonta from './productes/Fonta'
import Cocacola from './productes/Cocacola'
import CocacolaZERO from './productes/CocacolaZERO'
import cocacola from '../assets/cocacola.png'
import fonta from '../assets/fonta.png'
import sprite from '../assets/sprite.png'
import cocacolaLight from '../assets/cocalight.png'
import { useEffect } from 'react'




const home = () => {

  useEffect(() => {
    const sprite = document.getElementById('sprite')
    const spritelink = document.getElementById('spritelink') 

    const coca = document.getElementById('canvas')
    const cocalink = document.getElementById('cocalink')

    const cocaWhite = document.getElementById('cocaWhite')
    const cocaWhitelink = document.getElementById('cocaWhitelink')

    const fonta = document.getElementById('fonta')
    const fontalink = document.getElementById('fontalink')

    let backg;

    

    spritelink.addEventListener('click', () => {
      backg = 'sprite'
      sprite.style.opacity = 1;
      coca.style.opacity = 0;
      cocaWhite.style.opacity = 0;
      fonta.style.opacity = 0
      document.body.style.background = 'linear-gradient(90deg,#003 50%,#022,#050)'
    })
    
    cocalink.addEventListener('click', () => {
     backg = 'coca'
      sprite.style.opacity = 0;
      coca.style.opacity = 1;
      cocaWhite.style.opacity = 0;
      fonta.style.opacity = 0
      document.body.style.background = 'linear-gradient(90deg,#500 50%,#933,#977)'
    })

    cocaWhitelink.addEventListener('click', () => {
      backg = 'cocaw'
      sprite.style.opacity = 0;
      coca.style.opacity = 0;
      cocaWhite.style.opacity = 1;
      fonta.style.opacity = 0
      document.body.style.background = 'linear-gradient(90deg,#222 50%,#273031,#526767)'
    })

    fontalink.addEventListener('click', () => {
      backg = 'cocaw'
      sprite.style.opacity = 0;
      coca.style.opacity = 0;
      cocaWhite.style.opacity = 0;
      fonta.style.opacity = 1
      document.body.style.background = 'linear-gradient(90deg,#950 50%,#730,#510)'
    })
    

    localStorage.setItem('page-theme' , JSON.stringify(backg))
    
    for (let i = 0; i <= 50; i++){
      const bubblesdiv = document.createElement('div')
    bubblesdiv.classList.add('bubblesAnime')
      document.getElementById('bubbles').appendChild(bubblesdiv)
      document.getElementsByClassName('bubblesAnime')[i].style.left = Math.random() * 3000 + 'px'
      const rand =30 + Math.random() * 60 + 'px'
      document.getElementsByClassName('bubblesAnime')[i].style.width =  rand
      document.getElementsByClassName('bubblesAnime')[i].style.height = rand
      document.getElementsByClassName('bubblesAnime')[i].style.animationDelay = 0.1 * i + 's'
     
    
      

    }
  },[])

  return (
    <div>
      <div id='bubbles' style={{ width: '100%', height: '130vh',pointerEvents : 'none', position: 'absolute', background: 'transparent', top: '-100px', left: '0%', zIndex: 99 }}><span id='bubbleInner' style={{ position: 'absolute', zIndex: 50, left: 0, top: 0, width : '100%' , height : '100%'}}></span></div>
      <div style={{width : '50%' , height : '70vh' , justifyContent : 'center' , alignItems : 'center' , display : 'flex'}}>
      <Routes>
        <Route path='/' element={<CocacolaZERO />} />
        <Route path='/Cocacola' element={<Cocacola />}/>
        <Route path='/Fonta' element={<Fonta/>}/>
        <Route path='/Sprite' element={<Sprite />}/>
        </Routes>
        </div>
      <div className='LINKS' style={{gap : '50px' , display : 'flex' , justifyContent :'center'}}>
        <Link to='/' id='cocaWhitelink'  style={{animationDelay :'0.3s'}}><img src={cocacolaLight} alt="coca" /></Link>
        <Link to='Cocacola' id='cocalink'  style={{animationDelay :'0.5s'}}><img src={cocacola} alt="coca" /></Link>
        <Link to='Fonta' id='fontalink' style={{animationDelay :'0.6'}}><img src={fonta} alt="coca" /></Link>
        <Link to='Sprite' id='spritelink' style={{animationDelay :'0.7s'}}><img src={sprite} alt="coca" /></Link>
      </div>
    </div>
  )
}

export default home