import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Menu from './pages/menu/Menu';
import './App.css';
import CateringEvents from './pages/catering&services/CateringEvents';
import Reservations from './pages/reservations/Reservations';
import Careers from './pages/careers/Careers';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import OnlineOrdering from './pages/order/OnlineOrdering';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/our-menu" element={<Menu/>}/>
        <Route path="/catering-events" element={<CateringEvents/>}/>
        <Route path="/reservations" element={<Reservations/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/blog" element={<Blog/>}/>

        <Route path="/online-orders" element={<OnlineOrdering/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
