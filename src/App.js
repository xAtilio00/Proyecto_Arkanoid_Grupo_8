import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Inicio from './Component/Inicio/Inicio'
import Desarrolladores from './Component/Desarrolladores/Desarrolladores'
import Error from './Component/error/Error'
import NavBar from './Component/NavBar/NavBar'
import Arkanoid from './Component/Game/Index'

function App() {
  return (
    <>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Inicio />}></Route>
            <Route path='/desarrolladores' element={<Desarrolladores />}></Route>
            <Route path='/arkanoid' element={<Arkanoid/>}></Route>
            <Route path='*' element={<Error/>}></Route>
          </Routes>
        </Router>
          
        
    </>
  );
}

export default App;