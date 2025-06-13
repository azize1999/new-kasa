import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './BACKEND/composant/header.jsx';
import Footer from './BACKEND/composant/footer.jsx';
import Home from './BACKEND/pages/home.jsx';
import About from './BACKEND/pages/about.jsx';
import Error from './BACKEND/pages/Error.jsx';
import AboutPhoto from './assets/images/about.png';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About image={AboutPhoto} />} />
         <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
