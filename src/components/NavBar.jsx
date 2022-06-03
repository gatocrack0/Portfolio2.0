import { getPathImage } from '../helpers/getPathImage'

export const NavBar = () => {
  return (
    <>
      <div className='nav-container'>
        <header>
          <a className='logo' href='/'>Vicente Barra</a>
          <nav>
            <ul>
              <li><a href='#Conocimiento'>Conocimiento</a></li>
              <li><a href='#Proyectos'>Proyectos</a></li>
              <li><a href='#Contacto'>Contacto</a></li>
            </ul>
          </nav>
        </header>

        <div className='social-header'>
          <ul>
            <li>
              <a href='https://www.linkedin.com/in/vicente-barra-rivas/'><img src={getPathImage('linkedin.png')} alt='linkedin' /></a>
            </li>
            <li>
              <a href='https://github.com/gatocrack0'><img src={getPathImage('github.png')} alt='github' /></a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
