import './App.css';
import Navigation from './component/Navigation/Navigation';
import Loginform from './component/Login/Loginform';
import Signup from './component/Signup/Signup';
import { Routes,Route } from 'react-router-dom';
import Body from './component/body/Body';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Body/>

      <Routes>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Loginform />}/>

      </Routes>
    </div>
  );
}

export default App;
