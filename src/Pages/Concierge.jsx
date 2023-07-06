import React, { useState } from 'react';
import Footer from '../Pages/Footer';
import Navbar from '../Navbar';
import { getUser } from '../Redux/actions';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export default function Concierge () {
  const navigate = useNavigate()
  const dispatch = useDispatch();

            
    return (
    <div>
        <Navbar/>
        <div className='main__part__concierge'>
            <h1>Conciergerie</h1>
        </div>
        <div className='container'>
            <div className='section__concierge'>
                <div className='section__concierge__left'>
                    <h6>Vous souhaitez bénéficier de services Premium ?</h6>
                    <p>Soyez rassurés, nous nous chargeons de tout !</p>
                    <p>Notre conciergerie immobilière vous assiste dans l’entretien et la conservation de vos locaux ainsi que dans la réalisation de vos petites démarches administratives du quotidien, 
                        à travers des prestations personnalisées et à la carte exécutées par des professionnels expérimentés :</p>
                        <ul>
                            <li>Entretien des locaux / Nettoyage</li>
                            <li>Gros Travaux / Rénovations</li>
                            <li>Dépannage ponctuel multiservices (plomberie, électricité, climatisation, menuiserie, etc.)</li>
                            <li>Entretien des espaces verts</li>
                            {/* <li>Gardiennage</li> */}
                            {/* <li>Aménagement / Ameublement</li> */}
                            {/* <li>Déménagement</li> */}
                            <li>Assurances (Habitations, Professionnelle, Responsabilité civile)</li>
                            <li>Sécurité / Domotique</li>
                        </ul>
                        <p>Contactez nous pour en savoir plus !</p>
                        <Link to='/contact'><button className="btn--details">En savoir plus</button></Link>

                </div>
                <div className='section__concierge__right'>
                        <div className='section__concierge__right__content'>
                            <img src="https://www.jlcleanservices.be/wp-content/images/entreprise-de-nettoyage-professionnel-belgique-bruxelles-brabant-wallon-hainaut-namur.png" alt="" />
                        </div>
                    </div>

            </div>
        </div>
        
        <Footer/>
    </div>
    );
}

