import '../src/styles/App.css';
import NavBar from './components/NavBar';
import Cadastro from './pages/Cadastro';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar titulo = "navbar" />
      <main>
        <Cadastro titulo = "formulario_cadastro">
        </Cadastro>
      </main>
      <footer>
        <Footer titulo = "footer_cadastro"></Footer>
      </footer>
    </>
  );
}

export default App;