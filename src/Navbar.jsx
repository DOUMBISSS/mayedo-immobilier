import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';

export default function Navbar () {
  const [display, setDisplay] = useState(false);
  // const [searchHome,setSearchHome] = useState()
            
  const afficher = () => {
    setDisplay(true)
  }

  const affi = ()=>{
    setDisplay(false)
  }

    return (
      <div>
      <header>
        <nav>
          <div className="navbar--left">
            <div className="navbar--logo">
              <Link to="/"><img src="27.png"alt=""/></Link>
            </div>
          </div>
          <div className="navbar--right">
            <div className="navbar--right--content">
              <Link className='liste' to="/">Accueil</Link>
              <Link className='liste' to="/louer">Locations</Link>
              <Link className='liste' to="/contact">Contacts</Link>
              <Link className='liste' to="/propos">A propos</Link>
              <form>
                <input className="form-control me-2" type="text" placeholder="Search" />
              </form>
            </div>
                 <div className='icons'>
                      <div className='icon--menu' onClick={afficher}>
                          <i className="fa-solid fa-bars"></i>
                      </div>
                      {/* <div className='icon--search'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </div> */}
                  </div>
          </div>
        </nav>
        <div className={display ? "sidebar show-sidebar" : "sidebar"}>
      <div className='sidebar--menu'>
        <div className='btn--close--sidebar' onClick={affi}>X</div>
              <p><Link className='liste' to="/">Accueil</Link></p>
              <p><Link className='liste' to="/louer">Locations</Link></p>
              <p><Link className='liste' to="/contact">Contacts</Link></p>
              <p><Link className='liste' to="/propos">A propos</Link></p>
              <form>
                <input className="form-control me-2" type="text" placeholder="Search" />
              </form>
      </div>
    </div>
    </header>
  </div>
    );
}

