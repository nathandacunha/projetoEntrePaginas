import "../styles/FormularioLogin.css";

function Login() {
    return(
        <main className="App-Login">
            <div className="login_container">
                <form className ="formulario_login" method="post">
                    <h2>Login</h2>

                    <label htmlFor="cpf">CPF</label>
                    <input type="text" name="cpf" id="campo_cpf" required/>

                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="senha" id="campo_senha" required/>

                    <button type="submit">Logar-se</button>

                    <div className="container_lado_a_lado">
                        <a href="#">Esqueceu sua senha?</a>
                        <a href="#">Já possui uma conta?</a>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Login;