import './App.css';
import Navigation from './Navigation';
import Signupform from './component/Login/Loginform';
import Signup from './component/Signup/Signup';
import { Routes,Route} from 'react-router-dom';
import Body from './component/body/Body';
import Speciality from './component/specialty/Speciality';
import Team from './component/Team/Team';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='ride'/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/comform' element={<Comform />}/>
        <Route path='/digitals' element={<Digitals />}/>
      </Routes>
      <Body/>
      <Speciality/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;
