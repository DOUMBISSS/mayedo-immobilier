import React, { useState } from 'react';
import Footer from '../Pages/Footer';
// import {Link} from 'react-router-dom';
import Navbar from '../Navbar';
import { getUser } from '../Redux/actions';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Contact () {

  const [number,setNumber]=useState();
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [content,setContent]=useState();
  const dispatch = useDispatch();
  const notify = (e) => {
    e.preventDefault();
    toast.success('Votre Message a bien été reçu , notre équipe vous contactera dès ques possible', {
      position: "top-right",
      autoClose: 3001,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  };

  const SubmitForm = (event)=>{
    event.preventDefault();
    const data={
      name,
      email,
      number,
      content
    }
    fetch('http://127.0.0.1:4000/register',{
      method:"POST",
      headers :{'Content-Type':"application/json"},
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>dispatch(getUser(data)))
    setName(" ");
    setEmail(" ");
    setContent(" ");
    setNumber(" ");
    console.log(data)
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
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={notify}>Envoyer</button>
                    {/* <button onClick={notify}>Notify!</button> */}
                    <ToastContainer
                        position="top-right"
                        autoClose={2001}
                        hideProgressBar={true}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
/>
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

