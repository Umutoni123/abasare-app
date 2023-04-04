import './App.css';
import Navigation from './Navigation';
import Signupform from './component/Login/Loginform';
import Signup from './component/Signup/Signup';
import { Routes,Route} from 'react-router-dom';
import Body from './component/body/Body';
import Comform from './component/comform';
import Digitals from './component/digitals';

function App() {
  return (
    <div className="App">
      <Navigation/>
      {/* <Body/> */}
    <Routes>
        <Route path='/login' element={<Signupform />} />
        <Route path='/signup' element={<Signup />}/>
        <Route path='/comform' element={<Comform />}/>
        <Route path='/digitals' element={<Digitals />}/>
      </Routes>
    </div>
  );
}

export default App;
