import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Pages/Footer';

export default function Apropos () {
            
    return (
      <div>
          <Navbar/>
          <div className="description--enterprise">
          <div className="description--enterprise--content--left">
            <h1 className="name--enterprise">BIENVENUE A SCI MAYEDO</h1>
            <p>Créée en Côte d’Ivoire en 2022, elle est dirigée par une équipe compétente, jeune, dynamique et disponible à tout moment afin de répondre aux attentes de la clientèle. Nos réalisations répondent aux besoins de toutes personnes ou entité en quête d’une maison décente, agréable à vivre et à un prix abordable selon le standing. 
              Également, nous nous adaptons à des besoins et proposons les meilleures solutions au meilleur qualité/prix et standing à nos clients. De plus, nous conseillons nos clients dans le choix de sites et documentations répondant à leurs besoins et exigences, 
              pour que les solutions que nous leurs proposons soient viables.</p>
              <p>A <strong>SCI MAYEDO </strong> , la gestion locative et la vente de vos biens sont nos priorités depuis toujours et en nous confiant votre bien, vous bénéficierez de notre expertise et de nos conseils pour :</p>
              <ul>
                <li>Gagner du temps, en nous laissant assurer la gestion courante de votre bien avec rigueur, efficacité, réactivité et disponibilité (interface-client, encaissement des loyers, gestion des travaux, etc...)</li>
                <li>Assurer la rentabilité de votre bien dont la valeur commerciale sera optimisée.</li>
                <li>Recouvrer (par voie amiable ou contentieuse) les éventuels impayés de loyers.</li>
                <li>Suivi de la sécurité, conciergerie, du nettoyage et de l’entretien des parties communes et des équipements communs.</li>
              </ul>
          </div>
          <div className="description--enterprise--content--right">
            <img src="17.jpeg" alt="" />
          </div>

          </div>
        <Footer/>
      </div>
    );
}

