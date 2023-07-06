import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from './Footer';



export default function DetailsProject (){
    return(
        <div>
             <Navbar/>
             {/* <div className="container"> */}
                <div className="main--part--detail--project">
                    <div className="project--name">
                        <h2 className="title">Cité des orchidées</h2>
                        <p>Abidjan,Cote d'Ivoire</p>
                    </div>
                    <div className="detail--project--content">
                        <div className="detail--project--content--left">
                            <img src="40.jpg" alt="" />
                        </div>   
                        <div className="detail--project--content--right">
                            <div className="images--container">
                                <div className="images--container--box">
                                    <img src="41.jpg" alt="" />
                                </div>
                            </div>
                            <div className="images--container">
                                <div className="images--container--box">
                                    <img src="42.jpg" alt="" />
                                </div>
                            </div>
                            <div className="images--container">
                                <div className="images--container--box">
                                    <img src="43.jpg" alt="" />
                                </div>
                            </div>
                            <div className="images--container">
                                <div className="images--container--box">
                                    <img src="44.jpg" alt="" />
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="description--project">
                            <h5>Apercu général</h5>
                            <p>Le programme de la « Cité des Orchidées » est situé en plein cœur d’Abidjan ,à Cocody Angré 7ème Tranche près du marché cocovico . Il bénéficie d’un excellent emplacement et doté d’une architecture alliant modernité et confort.</p>
                            <h5>Details concernant le projet</h5>
                            <p>- 21 appartements</p>
                            <p>- 2 commerces (Magasins)</p>
                            <p>- 1000 m²</p>
                            <p>- Parking privé</p>

                            <h6 className='main__part__conditions__header'>Conditions de locations</h6>
                                    <p>2 Mois de loyers d’avance</p>
                                    <p>2 Mois de caution</p>
                                    <p>Honoraires d’agence (1 mois de loyer mensuel TCC) + TVA</p>
                                    <p>Frais de dossier (sur la base de 10 % du montant du loyer mensuel) + TVA </p>

                                    <h6 className='main__part__conditions__header'>LES CHARGES COMPRENNENT : </h6>
                                    <p>2 places de parking seront attribuées pour les appartements de 4, 5 et 6 pièces et 1 place de parking pour les appartements de 3 pièces.</p>
                                    <p>L’entretien des parties communes et des équipements communs (ascenseur, climatiseurs, antenne parabolique, sur presseur et groupe électrogène) ainsi que le gardiennage.</p>

                                    <h6 className='main__part__conditions__header'> Frais Annexes: </h6>
                                    <p>Compteur individuel d’électricité. </p>
                                    <p>Abonnement internet et TV</p>
                                

                                    <h6 className='main__part__conditions__header'> Disponibilités: </h6>
                                    <Link className='na' to='/contact' cl><p>Nous consulter </p></Link>

                            <Link className='liste' to="/contact"> 
                                <button className="btn--contact">Réservez dès maintenant</button>
                            </Link>
                            
                        </div>
                </div>
            <Footer/>
             </div>
        // </div>
    )
}