import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar';
// import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { getHomes } from '../Redux/actions';

export default function Details () {

  const homes = useSelector(state => state.homeReducer.homes);
  const dispatch = useDispatch();

  let id = useParams().id;
  let home =homes.find(home => home.id == id);

  dispatch (getHomes(homes))

            
    return (
     <div>
        <Navbar/>
        <div className='container'>
        <div className="container--header">
            <h2>Achat</h2>
          </div>
              <div className="container--home">
                <div className="container--home--left--part">
                  <div className="container--home--left--part--content">
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
                  </div> 
                
                </div>
                <div className="container--home--right--part">
                  <div className="container--home--right--part--content">
                    <div className="container--home--left--part--content--header">
                      <p className="project">{home.project}</p>
                      <p className="name--project">{home.name} </p>
                      <p className="home--descrption">{home.description}</p>
                    </div>
                    <div className="container--home--left--part--content--description">
                      <div className="description--property">
                        <h6>Description</h6>
                        <p>Superbe penthouse de 3 pièces à Riviera mondial béton avec vue sur la lagune :</p>
                        <p>- chambre principale autonome </p>
                        <p>– salle d’eau extérieure à la seconde chambre</p>
                        <p>– toilette visiteur </p>
                        <p>– séjour staffé </p>
                        <p>– cuisine européenne </p>
                        <p>- immense terrasse et immense cour</p>
                        <p className="home--price"> à partir de <span>{home.prices} FCFA/mois</span></p>                
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

