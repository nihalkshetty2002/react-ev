import { Button } from 'bootstrap'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav col-10 col-md-9 col-lg-11'> 
      <div className="nav-logo col-8">EV-olution</div>
      <ul className="nav-menu col-5 col-md-4 col-lg-2">
        <li>Home</li>
        <li >Explore</li>
        <li>About</li>
      </ul>
      <button className='btn nav-contact col-12 col-md-3 col-lg-1'>Contact</button>

    </div>
  )
}

export default Navbar
