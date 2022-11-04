import React, { useState } from 'react';
import Footer from '../Pages/Footer';
// import {Link} from 'react-router-dom';
import Navbar from '../Navbar';

function Contact () {

  const [number,setNumber]=useState();
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [message,setMessage]=useState();

  console.log(email)

  const SubmitForm = (event)=>{
    event.preventDefault();
    fetch ('api/mayedo.com',{
      methode:"POST",
      body:JSON.stringify(
        {
          email:'doumbia77fode@gmail.com',
          password:'gdddh',
          name:'doumbia',
          number:'0777880082'
        }
      )
    })
    .then(res=>res.json())
    .then(json=>console.log(json))
    // alert(`votre message a été reçu !!!: ${name}`)
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
                  <form onSubmit={SubmitForm}>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Noms complets</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleFormControlInput1" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleFormControlInput1" className="form-label">Numéro de téléphone</label>
                      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" value={number} onChange={(e) => setNumber(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleFormControlTextarea1" className="form-label">Votre message</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Envoyer</button>
                  </form>
                </div>
                <div className="main--contact--content--right">
                  <p>Aidez-nous à mieux comprendre vos besoins</p>
                  <p>Adresse : Cocody Angré 7eme Tranche / Abidjan – Plateau – 01 BP 2076 Abidjan 01</p>
                  <p>Tel : +225 07 77 88 00 82 / +225 07 89 80 08 62</p>
                  <p> E-mail : sci-mayedo@immobilier.com</p>
                  <p>site web : www.sci-mayedo.com</p>
                </div>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
    );
}

export default Contact;
