import './App.css';
import Navigation from './Navigation';
import Signup from './component/Signup/Signup';
import { Routes,Route} from 'react-router-dom';
import Home from './component/Home/Home';
import Digital from './component/Digital';
import Conform from './component/Conform';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='ride'/>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/comform' element={<Conform />}/>
        <Route path='/digitals' element={<Digital />}/>
      </Routes>

      
      
    </div>
  );
}

export default App;
