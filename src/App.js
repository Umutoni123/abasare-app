import './App.css';
import Navigation from './component/Navigation/Navigation'
import Signup from './component/Signup/Signup';
import { Routes,Route} from 'react-router-dom';
import Home from './component/Home/Home';
import Digital from './component/Digital';
import Conform from './component/Conform';
import Location from './component/Location';
import Footer from './component/Footer/Footer'
import Speciality from './component/specialty/Speciality';
import Verify from './component/verify';
import Upload1 from './component/upload1';
import Upload2 from './component/upload2';
import Upload3 from './component/upload3';
import Driverdashbord from './component/driverdashbord';
import Loginform from './component//Login/Loginform';
import Logind from  './component/Logind';




function App() {
  return (
    <div classNameName="App">
      <Navigation/>
      <Routes>
        {/* <Route path='ride'/> */}
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/comform' element={<Conform />}/>
        <Route path='/digitals' element={<Digital />}/>
        <Route path='/speciality' element={<Speciality />}/>
        <Route path='/Verify' element={<Verify/>}/>
        <Route path='/Upload1' element={<Upload1/>}/>
        <Route path='/Upload2' element={<Upload2/>}/>
        <Route path='/Upload3' element={<Upload3/>}/>
        <Route path='/Driverdashbord' element={<Driverdashbord/>}/>
        <Route path='/Logind' element={<Logind/>}/>
        <Route path='/Loginform' element={<Loginform/>}/>
        <Route path='/Loginform' element={<Loginform/>}/>
        <Route path='/Navigation' element={<Navigation/>}/>

      </Routes>
      <Footer /> 

      
      
    </div>
  );
}

export default App;
