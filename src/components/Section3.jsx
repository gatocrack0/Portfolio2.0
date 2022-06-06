import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { getPathImage } from '../helpers/getPathImage'

gsap.registerPlugin(ScrollTrigger)

export const Section3 = () => {
  useEffect(() => {
    gsap.fromTo('.transition3', {
      opacity: 0
    }, {
      scrollTrigger: {
        trigger: '.transition3',
        start: 'top center'
      },
      opacity: 1,
      y: 0,
      duration: 1.2,
      stagger: 0.6
    })
  }, [])
  return (
    <>
      <section className='portfolio' id='Proyectos'>

        <div className='portfolio-container transition3'>
          <div className='portfolio-left'>
            <div className='inner'>
              <a className='' href='https://gatocrack0.github.io/Blackjack-js/'>BlackJack 🃏</a>
              <hr />
              <p className='featured-desc'>Juego web blackjack - Vanilla JavaScript</p>
            </div>
          </div>
          <a href='https://gatocrack0.github.io/Blackjack-js/'><img src={getPathImage('blackjack.png')} alt='blackjack' /></a>
        </div>

        <div className='portfolio-container transition3'>
          <div className='portfolio-left'>
            <div className='inner'>
              <a className='featured-title' href='https://gatocrack0.github.io/To-do-web-app/'>Todo web app 📚</a>
              <hr />
              <p className='featured-desc'>Aplicación web TODO - Nodejs, Local storage y Webpack.</p>
            </div>
          </div>
          <a href='https://gatocrack0.github.io/To-do-web-app/'><img src={getPathImage('todowebapp.png')} alt='todowebapp' /></a>
        </div>

        <div className='portfolio-container transition3'>
          <div className='portfolio-left'>
            <div className='inner'>
              <a className='featured-title' href='https://note-app1.herokuapp.com/'>Note app hbs 📋</a>
              <hr />
              <p className='featured-desc'>Aplicación web de notas - Nodejs, Mongodb, Express y Handlebars.</p>
            </div>
          </div>
          <a href='https://note-app1.herokuapp.com/'><img src={getPathImage('noteapp.png')} alt='noteapp' /></a>
        </div>

        <div className='portfolio-container transition3'>
          <div className='portfolio-left'>
            <div className='inner'>
              <a className='featured-title' href='https://github.com/gatocrack0/To-do-console-app'>Todo console app 📑</a>
              <hr />
              <p className='featured-desc'>Aplicación de consola de tareas por hacer - Nodejs.</p>
            </div>
          </div>
          <a href='https://github.com/gatocrack0/To-do-console-app'><img src={getPathImage('todoconsoleapp.gif')} alt='todoconsoleapp' /></a>
        </div>

        <div className='portfolio-container transition3'>
          <div className='portfolio-left'>
            <div className='inner'>
              <a className='featured-title' href='https://github.com/gatocrack0/Weather-console-app'>Weather console app ⛅</a>
              <hr />
              <p className='featured-desc'>Aplicación de consola que consume APIs Mapbox y Openweather - Nodejs y Axios.</p>
            </div>
          </div>
          <a href='https://github.com/gatocrack0/Weather-console-app'><img src={getPathImage('weatherapp.gif')} alt='weatherapp' /></a>
        </div>

        <div className='portfolio-container transition3'>
          <div className='portfolio-left'>
            <div className='inner'>
              <a className='featured-title' href='https://documenter.getpostman.com/view/9798334/TzseK74F#fd64ed6c-b183-4f0a-b83a-a0b03ba2f473'>REST server 🌐</a>
              <hr />
              <p className='featured-desc'>Servidor REST para administrar un café - Nodejs, Mongodb, Express, JWT, entre otras tecnologías.</p>
            </div>
          </div>
          <a href='https://documenter.getpostman.com/view/9798334/TzseK74F#fd64ed6c-b183-4f0a-b83a-a0b03ba2f473'><img src={getPathImage('restserver.png')} alt='restserver' /></a>
        </div>

        <div className='portfolio-container transition3'>
          <div className='portfolio-left'>
            <div className='inner'>
              <a className='featured-title' href='https://cola-app-socket.herokuapp.com/'>Colas app 👩‍👧‍👧</a>
              <hr />
              <p className='featured-desc'>Aplicación web para gestiónar colas - Nodejs, Express y Socket.io.</p>
            </div>
          </div>
          <a href='https://cola-app-socket.herokuapp.com/'><img src={getPathImage('socketcola.png')} alt='socketcola' /></a>
        </div>

        <div className='portfolio-container transition3'>
          <div className='portfolio-left'>
            <div className='inner'>
              <a className='featured-title' href='https://github.com/gatocrack0/Chat-app-socket'>Chat app 📱</a>
              <hr />
              <p className='featured-desc'>Aplicación web para chat online - Nodejs, Express, Mongodb, Socket.io, JWT, entre otras tecnologías.</p>
            </div>
          </div>
          <a href='https://github.com/gatocrack0/Chat-app-socket'><img src={getPathImage('socketchat.gif')} alt='chatapp' /></a>
        </div>

        <div className='portfolio-container transition3'>
          <div className='portfolio-left'>
            <div className='inner'>
              <a className='featured-title' href='https://gatocrack0.github.io/Gif-app/'>Gif app 🎴</a>
              <hr />
              <p className='featured-desc'>Aplicación web busca gifs - Nodejs y React.</p>
            </div>
          </div>
          <a href='https://gatocrack0.github.io/Gif-app/'><img src={getPathImage('gifapp.gif')} alt='gifapp' /></a>
        </div>

        <div className='portfolio-container transition3'>
          <div className='portfolio-left'>
            <div className='inner'>
              <a className='featured-title' href='https://heroes-app0.vercel.app'>Heroes app 🦸🏻</a>
              <hr />
              <p className='featured-desc'>Aplicación web sobre heroes - Nodejs, React y Local storage.</p>
            </div>
          </div>
          <a href='https://heroes-app0.vercel.app'><img src={getPathImage('heroesapp.gif')} alt='heroesapp' /></a>
        </div>

        <div className='portfolio-container transition3'>
          <div className='portfolio-left'>
            <div className='inner'>
              <a className='featured-title' href='https://journal-app0.vercel.app'>Journal app 📖</a>
              <hr />
              <p className='featured-desc'>Aplicación web de diario personal - Nodejs, React, Redux y Firebase.</p>
            </div>
          </div>
          <a href='https://journal-app0.vercel.app'><img src={getPathImage('journalapp.png')} alt='journalapp' /></a>
        </div>

      </section>
    </>
  )
}
