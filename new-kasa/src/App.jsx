
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './BACKEND/composant/header.jsx';
import Footer from './BACKEND/composant/footer.jsx'
import Home from './BACKEND/pages/home.jsx';
import './App.css';

// Création de fausses pages pour tester
// const Home = () => <h2>Page d'accueil</h2>;
const About = () => <h2>Page À propos</h2>;

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
          <>
          
           
           
        
          </>
          
        
        
        <Route path="/about" element={<About />} />
        
      </Routes>
       <Footer/>
    </BrowserRouter>
  );
}

export default App;
