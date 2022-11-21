import { Link } from "react-router-dom";




export default function Project (){
    return (
            <div>
                <div className="main--part--project">
                    <div className="main--part--project--left--part">
                        <div className="project--pictures">
                                <div className="project--pictures--box">
                                <img src={`${process.env.PUBLIC_URL}/40.jpg`} alt=''/>
                                </div>
                        </div>
                    </div>
                    <div className="main--part--project--right--part">
                            <div className="main--part--project--right--part--content">
                                <h3 className="name--project">Cité des orchidées</h3>
                                <h5>DEVENEZ PROPRIETAIRE D’UN APPARTEMENT OU D’UNE VILLA</h5>
                                <p>Vous êtes invités à parcourir nos dernières offres</p>
                                <Link to='/detail'>
                                    <button className="btn--details">En savoir plus</button>
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
    );
}