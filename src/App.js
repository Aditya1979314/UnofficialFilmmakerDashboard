import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Works } from './pages/Works';
import { Navbar } from './components/Navbar';
import { Hamburgericon } from './components/Hamburgericon';
import { useState } from 'react';
import { PhoneNavbar } from './components/PhoneNavbar';

function App() {
const[navbaropen,setnavbaropen] = useState(false);

  return (
    <div className="bg-[#E5EBED] h-screen">
       <BrowserRouter>
       <Hamburgericon setnavbaropen={setnavbaropen} navbaropen={navbaropen}/>
      {
        navbaropen && <PhoneNavbar/>
      }
      <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/works' element={<Works/>}/>
            </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
