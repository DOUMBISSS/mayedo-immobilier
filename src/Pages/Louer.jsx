import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar';
import Filter from './Filter';
// import Filter from './Filter';
import Footer from './Footer';

export default function Louer () {
  const rentHomes = useSelector(state =>state.homeReducer.rentHomes);
  const [items,setCat]=useState(rentHomes);
  const [filter, setFilter] = useState(false);

  const filterResult = (catItem)=>{
    const filterData = rentHomes.filter((rentHome) =>  rentHome.nmbres === catItem )
        setCat(filterData);
}

const filterTypes = (catItem)=>{
  const filter = rentHomes.filter((rentHome) =>  rentHome.types === catItem )
      setCat(filter);
}

  const btnFilter = ()=>{
    setFilter(true)
  }
  const btnCloseFilter = ()=>{
    setFilter(false)
  }
  // const dispatch = useDispatch

  // useEffect(() => {
  //   fetch('http://127.0.0.1/rentHomes')
  //   .then((res)=>res.json())
  //   // .then((questions)=>{dispatch(getAllQuestions(questions))})
  //   .catch(e => { console.log(e)})
  //   }, [])

  
    return (
    <div>
        <Navbar />
              <div className='container__rent__homes'>
                <div className="container__rent__homes__header">
                  <h2 className='md'>LOCATIONS</h2>
                    <p>Grâce à notre maîtrise de la cartographie Abidjanaise et les connexions solides que nous avons tissés avec les partenaires du secteur depuis plusieurs années 
                    (Agences immobilières, Promoteurs, Notaires, Agents d’affaires),
                    nous recherchons pour vous les biens les plus en adéquation avec vos critères de sélection et vous accompagnons dans la réalisation de toutes les formalités. </p>
                </div>
              </div>
              <div className='filter__container'>
                    <button className='btn__filter' onClick={btnFilter}> <i class="fa-solid fa-filter"></i> Filtrer</button>
              </div>
              <div className={filter ? "filter__bar show__filter__bar" : "filter__bar"}>
                <div className='filter__bar__content' onMouseLeave={btnCloseFilter}>
                  {/* <div className='filter__btn__close'>
                      <i class="fa-solid fa-xmark" onMouseLeave={btnCloseFilter}></i>
                  </div> */}
                  <div className='filter__header'>
                      <div className='filter__header__content'>
                        <Link to="/"><img src={`${process.env.PUBLIC_URL}/27.png`} alt=''/></Link>
                      </div>
                  </div>
                  <div className="col-12 col-md-12">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingSeven">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Appartements
                                </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                        <p className="btn__filter" onClick={()=>{filterResult('Studios')}}> Studios</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('2 pièces')}} > 2 pièces</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('3 pièces')}}> 3 pièces</p>
                                </div>
                                </div>
                                </div>
                                </div>
                    </div>
                    <div className="col-12 col-md-12">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Villas
                                </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                        <p className="btn__filter" onClick={()=>{filterResult('3 pièces')}}> 3 pièces</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('4 pièces')}}> 4 pièces</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('5 pièces')}}> 5 pièces</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('6 pièces')}}> 6 pièces</p>
                                </div>
                                </div>
                                </div>
                                </div>
                    </div>
                      
                </div>
              </div>
              <div className='main__rent__homes'>
              <div className="filter--home">
            <h6 className='filter--home__title'>Affiner par :</h6>
                     <div className="col-12 col-md-12">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingSeven">
                                <button class="accordion-button collapsed" id="but" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Appartements
                                </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                        <p className="btn__filter" onClick={()=>{filterResult('Studios')}}> Studios</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('2 pièces')}} > 2 pièces</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('3 pièces')}}> 3 pièces</p>
                                </div>
                                </div>
                                </div>
                                </div>
                    </div>
                    <div className="col-12 col-md-12">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" id="but" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Villas
                                </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                        <p className="btn__filter" onClick={()=>{filterResult('3 pièces')}}> 3 pièces</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('4 pièces')}}> 4 pièces</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('5 pièces')}}> 5 pièces</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('6 pièces')}}> 6 pièces</p>
                                </div>
                                </div>
                                </div>
                                </div>
                    </div>
          </div>

              <div className="main__rent__home__right">
                {items.map((item) => <div key={item.id} className="cards">
                    <div className="cards--box">
                      <div className="cards--box--header">
                      <Link to={`/details/${item.id}`}><img src={item.img[0]} alt=""/></Link>
                      </div>
                      <div className="cards--box--content">
                          <p className="home">{item.project}</p>
                          <p className="home--name">{item.name}</p>
                          <p className="home--descrption">{item.addresse}</p>
                          <p className="home--price"> à partir de <span>{item.prices} FCFA/mois</span></p>
                          <Link to={`/details/${item.id}`}>
                            <button className="more--details">Voir l'annonce</button>
                          </Link>
                      </div>
                  </div>
                </div>
                )}

                </div>

              </div>
        <Footer/>
    </div>
    );
}
