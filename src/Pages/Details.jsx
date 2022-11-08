import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar';
// import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { getHomes } from '../Redux/actions';

export default function Details () {

  const rentHomes = useSelector(state => state.rentHomeReducer.rentHomes);
  const dispatch = useDispatch();

  let id = useParams().id;
  let rentHome =rentHomes.find(rentHome => rentHome.id == id);

  dispatch (getHomes(rentHomes))

            
    return (
     <div>
        <Navbar/>
        <div className='container'>
        <div className="container--header">
            <h2>{rentHome.name}</h2>
          </div>
              <div className="container--home">
                <div className="container--home--left--part">
                  {/* <div className="container--home--left--part--content">
                    <div className="container--home--left--part--content--image">  
                      <div className="container--home--left--part--content--image--box">
                      <img src={home.img} alt=""/>
                      </div>
                    </div> 
                    <div className="container--home--left--part--content--images">
                        <div className="images--thumbails">
                          <div className="images--thumbails--box">
                        <img src={home.img} alt=""/>
                            
                          </div>
                      </div>
                        <div className="images--thumbails">
                          <div className="images--thumbails--box">
                          <img src={home.img} alt=""/>
                          </div>
                        </div>
                        <div className="images--thumbails">
                          <div className="images--thumbails--box">
                          <img src={home.img} alt=""/>
                          </div>
                        </div>
                        <div className="images--thumbails">
                          <div className="images--thumbails--box">
                          <img src={home.img} alt=""/>
                          </div>
                        </div>
                    </div> 
                  </div>  */}
                  <div className="container--home--left--part--content">
                    <div className="container--home--left--part--content--image">  
                    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img src={rentHome.img} className="d-block w-100" alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src={rentHome.img} className="d-block w-100" alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src={rentHome.img} className="d-block w-100" alt="..."/>
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
                    {/* <div className="container--home--left--part--content--images">
                        <div className="images--thumbails">
                          <div className="images--thumbails--box">
                        <img src={home.img} alt=""/>
                            
                          </div>
                      </div>
                        <div className="images--thumbails">
                          <div className="images--thumbails--box">
                          <img src={home.img} alt=""/>
                          </div>
                        </div>
                        <div className="images--thumbails">
                          <div className="images--thumbails--box">
                          <img src={home.img} alt=""/>
                          </div>
                        </div>
                        <div className="images--thumbails">
                          <div className="images--thumbails--box">
                          <img src={home.img} alt=""/>
                          </div>
                        </div>
                    </div>  */}
                  </div> 
                
                </div>
                <div className="container--home--right--part">
                  <div className="container--home--right--part--content">
                    <div className="container--home--left--part--content--header">
                      <p className="project">{rentHome.project}</p>
                      <p className="name--project">{rentHome.name}</p>
                      <p className="home--descrption">{rentHome.addresse}</p>
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
                        <p className="home--price"> à partir de <span>{rentHome.prices} FCFA/mois</span></p>                
                      </div>
                        <div className="button--block">
                          <Link to="/contact"><button className="btn--buy">Nous contacter</button></Link>
                        </div>
                
                    </div> 
                
                  </div> 
                
                </div>
              </div>
        </div>
     </div>
    );
}

