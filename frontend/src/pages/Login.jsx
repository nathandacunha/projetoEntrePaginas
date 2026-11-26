import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FormularioLogin.css";

function Login() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ cpf: '', senha: ''});
    const [erro, setErro] = useState('');
    const [sucesso, setSucesso] = useState(false);

    function handleChange(e) 
    {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) 
    {
        e.preventDefault();
        setErro('');
        setSucesso(false);

        try {
            const resposta = await fetch('http://localhost:3001/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(form),
            });

            const dados = await resposta.json();

            if (!resposta.ok) {
                setErro(dados.erro || 'Erro ao fazer login');
                return;
            }

            //setSucesso(true);
            navigate('/home');   
        } catch (err) {
            console.error(err);
            setErro('Não foi possível conectar ao servidor');
        }
    }
    return(
        <main className="App-Login">
            <div className="login_container">
<<<<<<< HEAD
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>

                    <label htmlFor="campo_cpf">CPF</label>
                    <input type="text" name="cpf" id="campo_cpf" value = {form.cpf} onChange={handleChange} required/>

                    <label htmlFor="campo_senha">Senha</label>
                    <input type="password" name="senha" id="campo_senha" value = {form.senha} onChange={handleChange} required/>

                    {erro && <p>{erro}</p>}
                    {sucesso && <p>Login realizado com sucesso!</p>}

                    <button type="submit">Logar-se</button>

                    <div className="container_ao_lado">
                        <a href="#">Esqueceu sua senha?</a>
                        <a href="#">Já possui uma conta?</a>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Login;