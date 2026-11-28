import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ErrorMessage from '../components/ErrorMessage.jsx';
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
                setErro(dados.erro || 'CPF ou senha estão incorretos.');
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
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>

                    <label htmlFor="campo_cpf">CPF</label>
                    <input type="text" name="cpf" id="campo_cpf" value = {form.cpf} onChange={handleChange} required/>

                    <label htmlFor="campo_senha">Senha</label>
                    <input type="password" name="senha" id="campo_senha" value = {form.senha} onChange={handleChange} required/>

                    <ErrorMessage mensagem={erro} />
                    {sucesso && <p>Login realizado com sucesso!</p>}

                    <Button variant="contained" type="submit">Logar-se</Button>

                    <div className="container_ao_lado">
                        <a href="#">Esqueceu sua senha?</a>
                        <a href="#">Não possui uma conta?</a>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Login;