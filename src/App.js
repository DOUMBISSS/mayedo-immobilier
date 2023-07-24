import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Louer from './Pages/Louer';
import Contact from './Pages/Contact';
import Apropos from './Pages/Apropos';
import Details from './Pages/Details';
import 'animate.css';
import DetailsProject from './Pages/DetailsProject';
import Concierge from './Pages/Concierge';
import Services from './Pages/Services';
import Realisations from './Pages/Realisations';
import DetailsRea from './Pages/DetailsRea';



export default function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/louer' element={<Louer/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/about' element={<Apropos/>} />
    <Route path='/details/:id' element={<Details/>} />
    <Route path='/detail' element={<DetailsProject/>} />
    <Route path='/conciergerie' element={<Concierge/>} />
    <Route path='/services' element={<Services/>} />
    <Route path='/Nos--realisations' element={<Realisations/>} />
    <Route path='/detail/realisation1' element={<DetailsRea/>} />
  </Routes>
  );
}

