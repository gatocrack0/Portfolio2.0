import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// import { DeveloperActivity } from './icons/DeveloperActivity'
import { getPathImage } from '../helpers/getPathImage'

gsap.registerPlugin(ScrollTrigger)

export const Section = () => {
  useEffect(() => {
    gsap.fromTo('.transition2', {
      opacity: 0
    }, {
      scrollTrigger: {
        trigger: '.transition2',
        start: 'top bottom'
      },
      opacity: 1,
      y: 50,
      duration: 1.2,
      stagger: 0.3
    })
  }, [])

  return (
    <>
      <section className='featured' id='Conocimiento'>
        <div className='left'>
          <div className='transition2'>
            <p className='title'>Conocimientos</p>
            <p className='featured-desc'>⚡ Patrón de arquitectura MVC</p>
            <hr />
            <p className='featured-desc'>⚡ API REST</p>
            <hr />
            <p className='featured-desc'>⚡ MERN Stack</p>
            <hr />
            <p className='featured-desc'>⚡ Metodología Scrum</p>
            <hr />
          </div>
        </div>
        <img className='right transition2' src={getPathImage('developer_activity.gif')} alt='' />
        {/* <DeveloperActivity className='right transition2' /> */}
      </section>
    </>
  )
}
