import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Pages/Footer';

export default function Realisations () {
            
    return (
      <div>
          <Navbar/>
          <div className='container__real__header'>
                <div className="container__real__header__content">
                  <h2 className='md'>Nos réalisations</h2>
                    <h4>Quelques-unes de nos réalisations en image.</h4>
                </div>
              </div>
              <div className='container'>
                        <div className='container__realisations'>
                            {/* <div className='container__realisations__content'> */}
                                    <div className='cards__realisations'>
                                        <Link to='/detail/realisation1'><img src="mc.JPG" alt="" /></Link>
                                    </div>
                            {/* </div> */}
                        </div>
              </div>
        <Footer/>
      </div>
    );
}

