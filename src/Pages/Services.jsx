import React, { useState } from 'react';
import Footer from '../Pages/Footer';
import Navbar from '../Navbar';
import { getUser } from '../Redux/actions';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export default function Services () {

    return (
    <div>
        <Navbar/>
        {/* <div className='main__part__concierge'>
            <h1>Conciergerie</h1>
        </div> */}
        <div className='container'>
           
        </div>
        
        <Footer/>
    </div>
    );
}

