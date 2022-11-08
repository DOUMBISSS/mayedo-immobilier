import Navbar from '../Navbar';
import 'animate.css';
import Footer from '../Pages/Footer';
import '../App.css';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import Project from './Project';


export default function Home () {
  const homes = useSelector(state =>state.homeReducer.homes);

    return (
        <div>
        <Navbar/>
        <div>
         <div className="main--part">
            <div className="slogan">
              <h1>TROUVEZ VOTRE BIEN IMMOBILIER</h1>
              <p>La référence de l'immobilier</p>
            </div>
    </div>
   
        <div className="container">
              <div className="container--header">
                <h2>Notre sélection de coups de coeur</h2>
              </div>
              <div className="container--content">
                {homes.map((home) =>
                <div key={home.id} className="cards">
                  <div className="cards--box">
                      <div className="cards--box--header">
                        <img src={home.img} alt=""/>
                      </div>
                      <div className="cards--box--content">
                          <p className="project">{home.project}</p>
                          <p className="name--project">{home.name}</p>
                          <p className="project--descrption">{home.addresse}</p>
                          <p className="home--price"> à partir de <span>{home.prices} FCFA/mois</span></p>
                       <Link to={`/details/${home.id}`}><button className="more--details">Voir l'annonce</button></Link>
                      </div>
                  </div>
                </div>
                )};
              </div>
            
        </div>

        <div className="description--enterprise">
          <div className="description--enterprise--content--left">
            <h1 className="name--enterprise">SCI MAYEDO</h1>
            <p>Créée en Côte d’Ivoire en 2022, elle est dirigée par une équipe compétente, 
              jeune, dynamique et disponible à tout moment afin de répondre aux attentes de la clientèle.
              De même, elle se positionne dans le domaine de l’immobilier, plus précisément dans la construction de promotions, 
              l’aménagement et enfin la réhabilitation de bâtiments pour la gestion locative ou la vente. Nos produits répondent 
              aux besoins de toutes personnes ou entité en quête d’une maison décente, agréable à vivre et à un prix abordable selon le standing. 
              Également, nous nous adaptons à des besoins et proposons les meilleures solutions au meilleur qualité/prix et standing à nos clients. 
              De plus, nous conseillons nos clients dans le choix de sites et documentations répondant à leurs besoins et exigences, pour que les 
              solutions que nous leurs proposons soient viables.</p>
              <p>Vous trouverez toujours en poussant la porte, un accueil chaleureux, une équipe de professionnels et un suivi personnalisé. 
                Que vous soyez acquéreur ou vendeur, bailleur ou locataire; vous avez un interlocuteur unique pour vous aider à concrétiser votre projet.</p>
          </div>
            <div className="description--enterprise--content--right">
              <img src="17.jpeg" alt="" />
              {/* <img src={`${process.env.REACT_APP_DOMAIN}17.jpeg`} alt=''/> */}
            </div>
        </div>
        <Project/>

        <div className="question--part">
            <div className="question--part--content">
             <h3 className='question'>À la recherche d’un appartement, d’une villa à louer ou à vendre?</h3>
            <div className="question--part--btn">
             <Link className='liste' to="/contact"> <button className="btn--contact">Contactez-nous !</button></Link>
            </div>
            </div>
        </div>
      

        </div>
        <Footer/>
      </div>
    )
  }
