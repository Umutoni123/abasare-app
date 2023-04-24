import './App.css';
import Navigation from './component/Navigation/Navigation'
import Signup from './component/Signup/Signup';
import { Routes,Route} from 'react-router-dom';
import Home from './component/Home/Home';
import Digital from './component/Digital';
import Conform from './component/Conform';
import Location from './component/Location';
import Footer from './component/Footer/Footer'


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
        <Route path='/location' element={<Location />}/>

      </Routes>
      <Footer /> 

      
      
    </div>
  );
}

export default App;
