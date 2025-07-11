import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './FRONTEND/composant/header.jsx';
import Footer from './FRONTEND/composant/footer.jsx';
import Home from './FRONTEND/pages/home.jsx';
import About from './FRONTEND/pages/about.jsx';
import Error from './FRONTEND/pages/Error.jsx';
import AboutPhoto from './assets/images/about.png';
import Details from './FRONTEND/pages/Details.jsx';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About image={AboutPhoto} />} />
         <Route path="/carte/:id" element={<Details />} />
         <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
