import "../styles/App.css";
import "../styles/FormularioCadastro.css";

function Cadastro() {
    return (
        <main className="App-Cadastro">
            <div className = "cadastro_container">
                <form className = "formulario_cadastro" method="post">
                    <h2>Cadastro</h2>
                    <label htmlFor="">Nome: </label>
                    <input type="text" name="" id="" placeholder="Seu nome:...."/>

                    <label htmlFor="">Email: </label>
                    <input type="email" placeholder="Seu email:...."/>
                    
                    <label htmlFor="">CPF: </label>
                    <input type="text" name="" id="" placeholder="Seu CPF:...."/>

                    <label htmlFor="">Senha: </label>
                    <input type="password" name="" id="" placeholder="Sua senha:...."/>

                    <button type="submit">Cadastrar</button>
                    
                    <div className = "container_lado_a_lado">
                        <a href="#">Esqueceu sua senha?</a>
                        <a href="#">Já possui login?</a>
                    </div>
                </form>
            </div>

        </main>
    );
}

export default Cadastro;