import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from './Footer';
import bgImage from '../video/background.mp4'


export default function DetailsRea (){
    return(
        <div>
             <Navbar/>
             <div className="container">
                    <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                        <li class="breadcrumb-item"><Link to='/Nos--realisations'>Nos réalisation</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Villa Duplex</li>
                    </ol>
                    </nav>
             </div>
             <div className="project--name">
                        <h2 className="title">Villa Duplex de 7 pièces</h2>
                        <p>Abidjan,Cote d'Ivoire</p>
                    </div>
             {/* <div className="container"> */}
             <div className="real_dis">
             <video autoPlay loop muted>
                        <source src={bgImage}/>
                    </video>
             </div>
                <div className="main--part--detail--realisations">
                    <div className="detail--cards">
                        <img src={`${process.env.PUBLIC_URL}/mc.JPG`} alt=''/>
                    </div>
                    <div className="detail--cards">
                        <img src={`${process.env.PUBLIC_URL}/mb.JPG`} alt=''/>
                    </div>
                    <div className="detail--cards">
                        <img src={`${process.env.PUBLIC_URL}/IMG_5771.jpg`} alt=''/>
                    </div>
                    <div className="detail--cards">
                        <img src={`${process.env.PUBLIC_URL}/IMG_5770.jpg`} alt=''/>
                    </div>
                    <div className="detail--cards">
                        <img src={`${process.env.PUBLIC_URL}/IMG_5769.jpg`} alt=''/>
                    </div>
                    <div className="detail--cards">
                        <img src={`${process.env.PUBLIC_URL}/IMG_5768.jpg`} alt=''/>
                    </div>
                    {/* <div className="detail--cards">
                        <img src={`${process.env.PUBLIC_URL}/IMG_5768.jpg`} alt=''/>
                    </div> */}
               
                </div>
            <Footer/>
             </div>
        // </div>
    )
}