import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;