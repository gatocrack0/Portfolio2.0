import { useEffect } from 'react'
import gsap from 'gsap'

// import { Scroll } from './icons/Scroll'
import { getPathImage } from '../helpers/getPathImage'

export const Hero = () => {
  useEffect(() => {
    gsap.fromTo('.content', { y: '-30%', opacity: 0 }, { y: '0%', opacity: 1, duration: 1 })
    gsap.fromTo('.hero-design', { y: 50, opacity: 0, duration: 1 }, { y: '0%', opacity: 1, duration: 1 })
    gsap.fromTo('.square-anim1', { stagger: 0.2, scale: 0.1 }, { transform: 'matrix(1,0,0,1,1277,289)', ease: 'power1.out', duration: 1.8 })
    gsap.fromTo('.square-anim2', { stagger: 0.2, scale: 0.1 }, { transform: 'matrix(1,0,0,1,1277,461)', ease: 'power4.out', duration: 1 })
    gsap.fromTo('.square-anim3', { stagger: 0.2, scale: 0.1 }, { transform: 'matrix(1,0,0,1,1449,461)', ease: 'power2.out', duration: 1.4 })
    gsap.fromTo('.square-anim4', { stagger: 0.2, scale: 0.1 }, { transform: 'matrix(1,0,0,1,1277,633)', ease: 'power4.out', duration: 1.5 })
    gsap.fromTo('.square-anim5', { stagger: 0.2, scale: 0.1 }, { transform: 'matrix(1,0,0,1,1107,461)', ease: 'power3.out', duration: 1 })
    gsap.fromTo('.square-anim6', { stagger: 0.2, scale: 0.1 }, { transform: 'matrix(1,0,0,1,1107,633)', ease: 'power1.out', duration: 0.5 })
    gsap.fromTo('.square-anim7', { stagger: 0.2, scale: 0.1 }, { transform: 'matrix(1,0,0,1,935,633)', ease: 'power3.out', duration: 1.1 })
    gsap.fromTo('.square-anim8', { stagger: 0.2, scale: 0.1 }, { transform: 'matrix(1,0,0,1,1107,805)', ease: 'power4.out', duration: 0.9 })
  }, [])

  return (
    <>
      <div className='hero'>
        <div className='content'>
          <h1>Hola, soy Vicente
            <span className='wave-emoji'>
              <img src={getPathImage('hi.png')} alt='👋' draggable='false' />
            </span>
          </h1>
          <div className='meet'>
            <p>Un desarrollador apasionado en la creación de aplicaciones web, con ganas de aprender continuamente sobre las nuevas técnologias.</p>
          </div>
          {/* Scroll SVG */}
          <svg className='scroll' width='40' height='77' viewBox='0 0 40 77'>
            <g transform='translate(-253 -787)'>
              <g data-name='Rectangle 12' transform='translate(253 787)' fill='none' stroke='#fff' strokeWidth='4'>
                <rect width='40' height='77' rx='20' stroke='none' />
                <rect x='2' y='2' width='36' height='73' rx='18' fill='none' />
              </g>
              <circle className='circle' id='Ellipse_1' data-name='Ellipse 1' cx='11' cy='11' r='11' transform='translate(262 798)' fill='#fff' />
            </g>
          </svg>
        </div>

        {/* Hero Design SVG */}
        <svg className='hero-design' width='686' height='688' viewBox='0 0 686 688'>
          <g id='blockdesign' transform='translate(-935 -289)'>
            <rect className='square-anim1' data-name='Rectangle 2' width='172' height='172' rx='19' transform='translate(1277,289)' fill='#6e00ff' />
            <rect className='square-anim2' data-name='Rectangle 10' width='172' height='172' rx='86' transform='translate(1277 461)' fill='#ff64cb' />
            <rect className='square-anim3' data-name='Rectangle 8' width='172' height='172' rx='19' transform='translate(1449 461)' fill='#e5d5fa' />
            <rect className='square-anim4' data-name='Rectangle 5' width='172' height='172' rx='19' transform='translate(1277 633)' fill='#6e00ff' />
            <rect className='square-anim5' data-name='Rectangle 3' width='172' height='172' rx='19' transform='translate(1107 461)' fill='#fff' />
            <rect className='square-anim6' data-name='Rectangle 9' width='172' height='172' rx='86' transform='translate(1107 633)' fill='#00f7ff' />
            <rect className='square-anim7' data-name='Rectangle 7' width='172' height='172' rx='19' transform='translate(935 633)' fill='#fff' opacity='0.17' />
            <rect className='square-anim8' data-name='Rectangle 4' width='172' height='172' rx='19' transform='translate(1107 805)' fill='#fff' />
          </g>
        </svg>
      </div>
    </>
  )
}
