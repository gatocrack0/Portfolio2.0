import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { getPathImage } from '../helpers/getPathImage'

gsap.registerPlugin(ScrollTrigger)

export const Section2 = () => {
  useEffect(() => {
    gsap.fromTo('.transition2', {
      opacity: 0
    }, {
      scrollTrigger: {
        trigger: '.transition2',
        start: 'top bottom'
      },
      opacity: 1,
      y: 0,
      duration: 1.3,
      stagger: 0.3
    })
  }, [])

  return (
    <>
      <section className='skills'>
        <div className='skills-container'>
          <ul>
            <li className='transition2'>
              <ul className='dev-icons'>
                <li className='transition2 software-skill-inline'>
                  <i className='fab fa-js' />
                  <p>JavaScript ES6</p>
                </li>
                <li className='transition2 software-skill-inline'>
                  <i className='fab fa-html5' />
                  <p>HTML 5</p>
                </li>
                <li className='transition2 software-skill-inline'>
                  <i className='fab fa-css3-alt' />
                  <p>CSS 3</p>
                </li>
                <li className='transition2 software-skill-inline'>
                  <i className='fab fa-node' />
                  <p>NodeJS</p>
                </li>
                <li className='transition2 software-skill-inline'>
                  <i className='fas fa-database' />
                  <p>MongoDB</p>
                </li>
                <li className='transition2 software-skill-inline'>
                  <i className='fab fa-react' />
                  <p>React</p>
                </li>
                <li className='transition2 software-skill-inline'>
                  <img src={getPathImage('express.png')} alt='express' />
                  <p>Express</p>
                </li>
                <li className='transition2 software-skill-inline'>
                  <i className='fas fa-terminal' />
                  <p>SQL</p>
                </li>
                <li className='transition2 software-skill-inline'>
                  <i className='fab fa-sass' />
                  <p>Sass</p>
                </li>
                <li className='transition2 software-skill-inline'>
                  <i className='fab fa-git' />
                  <p>git</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
