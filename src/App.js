import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
// import Acheter from './Pages/Acheter'
// import Vente from './Pages/Vente'
import Louer from './Pages/Louer';
import Contact from './Pages/Contact';
import Apropos from './Pages/Apropos';
import Details from './Pages/Details';
import 'animate.css';
import DetailsProject from './Pages/DetailsProject';
// import Appartement from './Pages/Appartement';
// import Villa from './Pages/Villa';

// import { uid } from 'uid';


export default function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    {/* <Route path='/details/:id' /> */}
    {/* <Route path='/acheter' element={<Acheter/>} /> */}
    {/* <Route path='/vente' element={<Vente/>} /> */}
    <Route path='/louer' element={<Louer/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/propos' element={<Apropos/>} />
    <Route path='/details/:id' element={<Details/>} />
    {/* <Route path='/appartement' element={<Appartement/>} />
    <Route path='/villa' element={<Villa/>} /> */}
    <Route path='/detail' element={<DetailsProject/>} />
    {/* <Route path='/category/:slug' element={<DetailsProject/>} /> */}
  </Routes>
  );
}

