import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './BACKEND/composant/header.jsx';
import Footer from './BACKEND/composant/footer.jsx';
import Home from './BACKEND/pages/home.jsx';
import Navbar from './BACKEND/pages/navbar.jsx';
import AboutPhoto from './assets/images/about.png';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Navbar image={AboutPhoto} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
