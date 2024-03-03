import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './homeComponent/Home';
import Navbar from './Navbar';
import Footer from './Footer';
import Register from './Register';
import Login from './Login';

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element ={<Home/>} />
    <Route path='/Register' element = {<Register/>} />
    <Route path='login' element ={<Login/>} />
   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
