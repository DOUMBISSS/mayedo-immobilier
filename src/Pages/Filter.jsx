import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

export default function  Filter () {

        const rentHomes = useSelector(state =>state.homeReducer.rentHomes);
        const [items,setCat]=useState(rentHomes);

        const filterResult = (catItem)=>{
                const filterData = rentHomes.filter((rentHome) =>  rentHome.nmbres === catItem )
                    setCat(filterData);
            }
            
            
    return (
        <div className="filter--home">
            <h6 className='filter--home__title'>Affiner par :</h6>
            {/* <div className="filter--home--content">
                  <div className="filter--home--content--box">
                      <Link className= "liste" to="/appartement"><p>APPARTEMENTS</p></Link>
                  </div>
                  <div className="filter--home--content--box">
                  <Link className= "liste" to="/villa"><p>VILLAS</p></Link>
                  </div>
            </div> */}
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
                                        <p className="btn__filter" onClick={()=>{filterResult('Studios')}}> studios</p>
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
                                </div>
                                </div>
                                </div>
                                </div>
                    </div>
          </div>

    );
}

