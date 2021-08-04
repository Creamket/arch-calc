export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
      <div className='container-sm'>
        <a className='navbar-brand' href='/arch-calc'>
          <i className='me-2 fas fa-calculator'></i>
          Arch-calc
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarContent'
          aria-controls='navbarContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a
                className='nav-link'
                aria-current='page'
                href='https://github.com/Creamket/arch-calc'
                rel='noreferrer'
                target='_blank'>
                GitHub
              </a>
            </li>
          </ul>
          <div className='navbar-text'>Расчет железобетонной балки</div>
        </div>
      </div>
    </nav>
  )
}
