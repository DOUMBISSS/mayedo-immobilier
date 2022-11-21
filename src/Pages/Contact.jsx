import React, { useState } from 'react';
import Footer from '../Pages/Footer';
// import {Link} from 'react-router-dom';
import Navbar from '../Navbar';

export default function Contact () {

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
        <Navbar />
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
                <div className="main--contact--content--right">
                  <p>Aidez-nous à mieux comprendre vos besoins</p>
                  <p>Adresse : Cocody Angré 7eme Tranche / Abidjan – Plateau – 01 BP 2076 Abidjan 01</p>
                  <p>Tel : +225 07 77 88 00 82</p>
                  <p> E-mail : mayedo@immobilier.ci</p>
                  <p>site web : www.mayedo.com</p>
                </div>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
    );
}

