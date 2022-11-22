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
            <h4 className="name--project">{detail.name}</h4>
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
                        <h6>Description</h6>
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
        </div>
        <div className="container">
          <div className="main--contact">
            <h4>Remplissez notre formulaire de contact</h4>
            <div className="main--contact--content">
                <div className="main--contact--content--left">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Noms & Prénoms</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Numéro de téléphone</label>
                      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Numero de telephone" value={number} onChange={(e) => setNumber(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlTextarea1" className="form-label">Votre message</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" onSubmit={SubmitForm}>Envoyer</button>
                  </form>
                </div>
            </div>
          </div>
        </div>
          <Footer/>
     </div>
    );
}

