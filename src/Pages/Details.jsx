import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar';
// import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import Footer from './Footer';

export default function Details () {

  const rentHomes = useSelector(state => state.homeReducer.rentHomes);
  const homes = useSelector(state => state.homeReducer.homes);
  const dispatch = useDispatch();

  let id = useParams().id;
  let rentHome =rentHomes.find(rentHome => rentHome.id == id);
  let home =homes.find(home => home.id == id);


  const detail = rentHome ? rentHome : home ;

  const [number,setNumber]=useState();
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [message,setMessage]=useState();

  const SubmitForm = (event)=>{
    event.preventDefault();
    const dataForm={
      name,
      email,
      number,
      message
    }
    fetch ('api/mayedo.com',{
      methode:"POST",
      body:JSON.stringify(dataForm)
    })
    .then(res=>res.json())
    .then(json=>console.log(json))
    setName(" ");
    setEmail(" ");
    setMessage(" ");
    setNumber(" ");
  }

  

            
    return (
     <div>
        <Navbar/>
        <div className='container'>
        <div className="container--header">
            <h5 className="name--home">{detail.name}</h5>
          </div>
              <div className="container--home">
                <div className="container--home--left--part">
                  <div className="container--home--left--part--content">
                    <div className="container--home--left--part--content--image">  
                    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img src={`${process.env.PUBLIC_URL}/${detail.img[0]}`} className="d-block w-100" alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src={`${process.env.PUBLIC_URL}/${detail.img[1]}`}  className="d-block w-100" alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src={`${process.env.PUBLIC_URL}/${detail.img[2]}`} className="d-block w-100" alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src={`${process.env.PUBLIC_URL}/${detail.img[3]}`} className="d-block w-100" alt="..."/>
                          </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div> 
                  </div> 
                
                </div>
                <div className="container--home--right--part">
                  <div className="container--home--right--part--content">
                    <div className="container--home--left--part--content--header">
                      <p className="project">{detail.project}</p>
                      <p className="home--descrption">{detail.addresse}</p>
                    </div>
                    <div className="container--home--left--part--content--description">
                      <div className="description--property">
                        <h6 className='desc--header'>Description</h6>
                        <p>Superbe penthouse de 3 pièces à Riviera mondial béton avec vue sur la lagune </p>
                        <p>- chambre principale autonome </p>
                        <p>– salle d’eau extérieure à la seconde chambre</p>
                        <p>– toilette visiteur </p>
                        <p>– séjour staffé </p>
                        <p>– cuisine européenne </p>
                        <p>- immense terrasse et immense cour</p>
                        {/* <p>{rentHome.description}</p> */}
                        <p className="home--price"> à partir de <span>{detail.prices} FCFA/mois</span></p>                
                      </div>
                        <div className="button--block">
                          <Link to="/contact">
                            <button className="btn--buy">Nous contacter</button>
                          </Link>
                        </div>
                    </div> 
                
                  </div> 
                
                </div>
              </div>
              <div className='main__part__conditions'>
              <h6 className='main__part__conditions__header'>SITUATION :</h6>
                    <p>En plein cœur de la ville d’Abidjan, à Cocody, quartier résidentiel par excellence, 
                      très prisé pour sa centralité et son accessibilité aux différents quartiers périphériques (Plateau, Vieux Cocody Ambassades, Riviera), à proximité de l’autoroute du Nord (vers Yopougon) et de la voie rapide vers le nouveau pont HKB. </p>
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
              </div>
        </div>


          <Footer/>
     </div>
    );
}

