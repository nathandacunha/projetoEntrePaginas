import '../src/styles/App.css';
import NavBar from './components/NavBar';
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <>
      <NavBar titulo = "navbar" />
      <main>
        <Cadastro titulo = "formulario_cadastro">
            
        </Cadastro>
      </main>
    </>
  );
}

export default App;