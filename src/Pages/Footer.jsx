import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { coffee } from '@fortawesome/free-brands-svg-icons'
function  Footer () {
            
return (
    <div>
          <div className='footer'>
          <div className='right'>
            <p>Copyright © 2022,SCI MAYEDO </p>
            </div>
          <div className="foot--content">
              <div className='schedule'>
                <h4>Horaire d'ouverture</h4>
                  <p>Lundi-Vendredi : 8h-16h</p>
                  <p>Samedi : 9h-12h</p>
              </div>
              <div className='address'>
                <h4>Contactez-nous</h4>
                <p>Cocody Angré 7eme Tranche / Abidjan – Plateau – 01 BP 2076 Abidjan 01</p>
                <p>+225 07 77 88 00 82 / +225 07 89 80 08 62</p>
                <p>sci-mayedo@immobilier.com</p>
                <p>www.sci-mayedo.com</p>
              </div>

              <div className='social--media'>
                <h4>Reseaux sociaux</h4>
                <p><i class="fa-brands fa-facebook"></i>Facebook</p>
                  <p><i class="fa-brands fa-instagram"></i>Instagram</p>
                  <p><i class="fa-brands fa-whatsapp"></i>WhatsApp</p>
              </div>
          </div>

           <div className='name--developer'>
            <p>Developed by Doumbia Fode (0777880082)</p>
           </div>
      </div>
    </div>

    );
}

export default Footer;
