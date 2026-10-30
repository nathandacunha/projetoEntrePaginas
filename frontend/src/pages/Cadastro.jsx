import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/FormularioCadastro.css";

function Cadastro() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ nome: '', cpf: '', email: '', senha: ''});
    const [erro, setErro] = useState('');
    
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        // console.log('digitou:', e.target.name, e.target.value);
    }

    async function handleSubmit(e) 
    {
        e.preventDefault();
        setErro('');

        try {
            const resposta = await fetch('http://localhost:3001/api/auth/cadastro', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(form)
            });

            if(resposta.ok) {
                navigate('/login');
                return;
            } else {
                const dados = await resposta.json();
                setErro(dados.erro || 'Erro ao cadastrar');
                return;
            }
            
        } catch {
            setErro('Não foi possivel conectar ao servidor');
        }
    }

    return (
        <main className="App-Cadastro">
            <div className = "cadastro_container">
                <form className = "formulario_cadastro" onSubmit={handleSubmit} method="post">
                    <h2>Cadastro</h2>

                    <label htmlFor="nome">Nome: </label>
                    <input type="text" name="nome" id="campo_nome" value = {form.nome} onChange={handleChange} placeholder="Seu nome:...."/>

                    <label htmlFor="Email">Email: </label>
                    <input type="email" name="email" id = "campo_email" value = {form.email} onChange={handleChange} placeholder="Seu email:...."/>
                    
                    <label htmlFor="cpf">CPF: </label>
                    <input type="text" name="cpf" id="campo_cpf" value = {form.cpf} onChange={handleChange} placeholder="Seu CPF:...."/>

                    <label htmlFor="senha">Senha: </label>
                    <input type="password" name="senha" id="campo_senha" value = {form.senha} onChange={handleChange} placeholder="Sua senha:...."/>

                    <button type="submit">Cadastrar</button>
                    
                    {/* renderizar uma mensagem de erro na tela apenas se a variável erro existir e for verdadeira */}
                    {erro && <p>{erro}</p>}

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